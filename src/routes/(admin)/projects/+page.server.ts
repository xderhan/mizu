import { createInstansi, getRecentInstansi, getRecentProjects } from '$lib/models/project'
import { error, fail, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
    const [instansi] = await getRecentInstansi(locals.user?.id)
    const [projects] = await getRecentProjects(locals.user?.id)
    if (instansi.status === "OK" && projects.status === "OK") {
        return {
            instansi: instansi.result,
            projects: projects.result
        }
    }
    throw error(500, instansi.detail)
}

export const actions: Actions = {
    addinstansi: async (event) => {
        const { request, locals } = event
        const data = await request.formData()
        const nama = data.get('nama')?.toString()
        const alamat = data.get('alamat')?.toString()
        const klpd = data.get('klpd')?.toString()
        const logo = data.get('logo')?.toString()
        const kode = data.get('kode')?.toString()

        if (!nama) {
            return fail(400, { namaMissing: true })
        }
        if (!alamat) {
            return fail(400, { alamatMissing: true })
        }
        if (!klpd) {
            return fail(400, { klpdMissing: true })
        }
        if (!logo) {
            return fail(400, { logoMissing: true })
        }
        if (!kode) {
            return fail(400, { kodeMissing: true })
        }

        const [instansi] = await createInstansi(nama, alamat, klpd, logo, kode, locals.user?.id)
        if (instansi.status === "OK") {
            return {
                status: 200,
                body: {
                    instansi: instansi.result
                }
            }
        }
        throw error(500, instansi.detail)
    },
}