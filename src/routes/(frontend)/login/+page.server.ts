import type { PageServerLoad } from './$types'
import { fail, redirect, type Actions } from '@sveltejs/kit'
import { userLogin } from '$lib/models/user'

export const load: PageServerLoad = ({ locals, url }) => {
    if (locals.user) {
        throw redirect(307, '/admin')
    }
    return {
        redirect: url.searchParams.get('redirect')
    }
}

export const actions: Actions = {
    login: async (event) => {
        const { request, url, cookies } = event
        const data = await request.formData()
        const email = data.get('email')?.toString()
        const password = data.get('password')?.toString()

        if (!email) {
            return fail(400, { emailMissing: true })
        }

        if (!password) {
            return fail(400, { passwordMissing: true })
        }

        const [login] = await userLogin(email, password)

        if (login.status !== 'OK' || login.result.length === 0) {
            return fail(400, { loginFailed: true })
        }

        cookies.set('authToken', login.result[0].token, {
            path: '/',
            maxAge: 60 * 60 * 24
        })
        const rd = url.searchParams.get('redirect')

        throw redirect(307, rd && rd !== 'null' ? rd : '/admin')
    },
    logout: (event) => {
        event.cookies.delete('authToken', { path: '/' })
        event.locals.user = undefined
        // const logoutStore = new LogoutStore()
        // logoutStore.mutate(null, { event })
        throw redirect(307, event.url.searchParams.get('redirect') || '/')
    }
}


