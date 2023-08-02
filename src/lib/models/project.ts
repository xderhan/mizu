import db from '$lib/db'
import type { Instansi, Project } from '$lib/models'

export const getRecentInstansi = async (userId: string | undefined) => {
    return await db.query<[Instansi[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId LIMIT 5`, {
        tb: 'instansi',
        userId
    })
}

export const getAllInstansi = async (userId: string | undefined) => {
    return await db.query<[Instansi[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId`, {
        tb: 'instansi',
        userId
    })
}

export const createInstansi = async (
    nama: string | undefined,
    alamat: string | undefined,
    klpd: string | undefined,
    logo: string | undefined,
    kodeSurat: string | undefined,
    userId: string | undefined
) => {
    return await db.query<[Instansi[]]>(
        `CREATE type::table($tb) CONTENT {
                id: rand::uuid(),
                nama: $nama,
                alamat: $alamat,
                klpd: $klpd,
                logo: $logo,
                kodeSurat: $kodeSurat,
                userId: $userId,
                createdAt: time::now(),
                updatedAt: time::now()
            }`,
        {
            tb: 'instansi',
            nama,
            alamat,
            klpd,
            logo,
            kodeSurat,
            userId
        }
    )
}

export const getRecentProjects = async (userId: string | undefined) => {
    return await db.query<[Project[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId LIMIT 5`, {
        tb: 'projects',
        userId
    })
}

export const getAllProjects = async (userId: string | undefined) => {
    return await db.query<[Project[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId`, {
        tb: 'projects',
        userId
    })
}
