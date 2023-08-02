import type { PageServerLoad } from './$types'
import { fail, redirect, type Actions } from '@sveltejs/kit'
import { checkEmailExist, userRegister } from '$lib/models/user'
import { validateEmail } from '$lib/tools'

export const load: PageServerLoad = ({ locals, url }) => {
    if (locals.user) {
        throw redirect(307, '/admin')
    }
    return {
        redirect: url.searchParams.get('redirect')
    }
}

export const actions: Actions = {
    default: async (event) => {
        const { request, url, cookies } = event
        const data = await request.formData()

        const email = data.get('email')?.toString()
        if (!email) {
            return fail(400, { emailMissing: true })
        }

        if (!validateEmail(email)) {
            return fail(400, { invalidEmail: true })
        }

        const firstName = data.get('firstName')?.toString()
        if (!firstName) {
            return fail(400, { firstNameMissing: true })
        }

        const lastName = data.get('lastName')?.toString()
        if (!lastName) {
            return fail(400, { lastNameMissing: true })
        }

        const password = data.get('password')?.toString()
        if (!password) {
            return fail(400, { passwordMissing: true })
        }

        const confirmPassword = data.get('confirmPassword')?.toString()
        if (!confirmPassword) {
            return fail(400, { confirmPasswordMissing: true })
        }

        if (password !== confirmPassword) {
            return fail(400, { passwordMismatch: true })
        }

        const [emailExist] = await checkEmailExist(email)
        if (emailExist.status !== 'OK' || (emailExist.result.length > 0 && emailExist.result[0].total > 0)) {
            return fail(400, { emailExist: true })
        }

        const [register] = await userRegister(email, firstName, lastName, password)

        if (register.status !== 'OK' || register.result.length === 0) {
            return fail(400, { registerFailed: true })
        }

        cookies.set('authToken', register.result[0].token, {
            path: '/',
            maxAge: 60 * 60 * 24
        })
        const rd = url.searchParams.get('redirect')

        throw redirect(307, rd && rd !== 'null' ? rd : '/admin')
    }
}
