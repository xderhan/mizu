import db from '$lib/db'
import type { Instansi, Project } from '$lib/models'

/** INSTANSI */

export const getRecentInstansi = async (userId: string) => {
    return await db.query<[Instansi[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId ORDER BY createdAt DESC LIMIT 5`, {
        tb: 'instansi',
        userId
    })
}

export const getAllInstansi = async (userId: string) => {
    return await db.query<[Instansi[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId ORDER BY createdAt ASC`, {
        tb: 'instansi',
        userId
    })
}

export const createInstansi = async (
    nama: string,
    alamat: string,
    klpd: string,
    logo: string,
    kodeSurat: string,
    userId: string
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

export const updateInstansi = async (
    id: string,
    nama: string,
    alamat: string,
    klpd: string,
    logo: string,
    kodeSurat: string,
    userId: string
) => {
    return await db.query<[Instansi[]]>(
        `UPDATE type::table($tb) SET {
                nama: $nama,
                alamat: $alamat,
                klpd: $klpd,
                logo: $logo,
                kodeSurat: $kodeSurat,
                updatedAt: time::now()
            } WHERE id = $id AND userId = $userId`,
        {
            tb: 'instansi',
            nama,
            alamat,
            klpd,
            logo,
            kodeSurat,
            id,
            userId
        }
    )
}

export const deleteInstansi = async (id: string, userId: string) => {
    return await db.query<[Instansi[]]>(`DELETE FROM type::table($tb) WHERE id = $id AND userId = $userId`, {
        tb: 'instansi',
        id,
        userId
    })
}

export const getInstansiById = async (id: string, userId: string) => {
    return await db.query<[Instansi[]]>(`SELECT * FROM type::table($tb) WHERE id = $id AND userId = $userId`, {
        tb: 'instansi',
        id,
        userId
    })
}

/** PROJECTS */

export const getRecentProjects = async (userId: string) => {
    return await db.query<[Project[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId ORDER BY createdAt DESC LIMIT 5`, {
        tb: 'projects',
        userId
    })
}

export const getAllProjects = async (userId: string) => {
    return await db.query<[Project[]]>(`SELECT * FROM type::table($tb) WHERE userId = $userId ORDER BY createdAt ASC`, {
        tb: 'projects',
        userId
    })
}

export const createProject = async (
    nomor: string,
    nama: string,
    deskripsi: string,
    jenis: string,
    metode: string,
    kodePaket: string,
    kodeRUP: string,
    volume: string,
    pagu: number,
    hps: number,
    sumberDana: string,
    tahunAnggaran: number,
    pdn: boolean,
    ukk: boolean,
    aspekEkonomi: boolean,
    aspekSosial: boolean,
    aspekLingkungan: boolean,
    praDPA: boolean,
    mak: string,
    instansiId: string,
    userId: string
) => {
    return await db.query<[Project[]]>(
        `CREATE type::table($tb) CONTENT {
                id: rand::uuid(),
                nomor: $nomor,
                nama: $nama,
                deskripsi: $deskripsi,
                jenis: $jenis,
                metode: $metode,
                kodePaket: $kodePaket,
                kodeRUP: $kodeRUP,
                volume: $volume,
                pagu: $pagu,
                hps: $hps,
                sumberDana: $sumberDana,
                tahunAnggaran: $tahunAnggaran,
                pdn: $pdn,
                ukk: $ukk,
                aspekEkonomi: $aspekEkonomi,
                aspekSosial: $aspekSosial,
                aspekLingkungan: $aspekLingkungan,
                praDPA: $praDPA,
                mak: $mak,
                instansiId: $instansiId,
                userId: $userId,
                createdAt: time::now(),
                updatedAt: time::now()
            }`,
        {
            tb: 'projects',
            nomor,
            nama,
            deskripsi,
            jenis,
            metode,
            kodePaket,
            kodeRUP,
            volume,
            pagu,
            hps,
            sumberDana,
            tahunAnggaran,
            pdn,
            ukk,
            aspekEkonomi,
            aspekSosial,
            aspekLingkungan,
            praDPA,
            mak,
            instansiId,
            userId
        }
    )
}

export const updateProject = async (
    id: string,
    nomor: string,
    nama: string,
    deskripsi: string,
    jenis: string,
    metode: string,
    kodePaket: string,
    kodeRUP: string,
    volume: string,
    pagu: number,
    hps: number,
    sumberDana: string,
    tahunAnggaran: number,
    pdn: boolean,
    ukk: boolean,
    aspekEkonomi: boolean,
    aspekSosial: boolean,
    aspekLingkungan: boolean,
    praDPA: boolean,
    mak: string,
    instansiId: string,
    userId: string
) => {
    return await db.query<[Project[]]>(
        `UPDATE type::table($tb) SET {
                nomor: $nomor,
                nama: $nama,
                deskripsi: $deskripsi,
                jenis: $jenis,
                metode: $metode,
                kodePaket: $kodePaket,
                kodeRUP: $kodeRUP,
                volume: $volume,
                pagu: $pagu,
                hps: $hps,
                sumberDana: $sumberDana,
                tahunAnggaran: $tahunAnggaran,
                pdn: $pdn,
                ukk: $ukk,
                aspekEkonomi: $aspekEkonomi,
                aspekSosial: $aspekSosial,
                aspekLingkungan: $aspekLingkungan,
                praDPA: $praDPA,
                mak: $mak,
                instansiId: $instansiId,
                updatedAt: time::now()
            } WHERE id = $id AND userId = $userId`,
        {
            tb: 'projects',
            nomor,
            nama,
            deskripsi,
            jenis,
            metode,
            kodePaket,
            kodeRUP,
            volume,
            pagu,
            hps,
            sumberDana,
            tahunAnggaran,
            pdn,
            ukk,
            aspekEkonomi,
            aspekSosial,
            aspekLingkungan,
            praDPA,
            mak,
            instansiId,
            id,
            userId
        }
    )
}

export const deleteProject = async (id: string, userId: string) => {
    return await db.query<[Project[]]>(`DELETE FROM type::table($tb) WHERE id = $id AND userId = $userId`, {
        tb: 'projects',
        id,
        userId
    })
}

export const getProjectById = async (id: string, userId: string) => {
    return await db.query<[Project[]]>(`SELECT * FROM type::table($tb) WHERE id = $id AND userId = $userId`, {
        tb: 'projects',
        id,
        userId
    })
}