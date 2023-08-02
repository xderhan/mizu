export type LoginToken = {
    id: string
    token: string
}

export type EmailExist = {
    total: number
}

export type User = {
    id: string
    email: string
    firstName: string
    lastName: string
    password: string
    token: string
    isAdmin: boolean
}

export type Instansi = {
    id: string
    nama: string
    alamat: string
    klpd: string
    logo: string
    kodeSurat: string
    userId: string
    createdAt: string
    updatedAt: string
}

export type Pegawai = {
    id: string
    nama: string
    nip: string
    pangkat: string
    golongan: string
    jabatan: string
    instansiId: string
    userId: string
    createdAt: string
    updatedAt: string
}

export type Project = {
    id: string
    nomor: string
    nama: string
    deskripsi: string
    jenis: string
    metode: string
    kodePaket: number
    kodeRUP: number
    volume: string
    pagu: number
    hps: number
    sumberDana: string
    tahunAnggaran: number
    pdn: boolean
    ukk: boolean
    aspekEkonomi: boolean
    aspekSosial: boolean
    aspekLingkungan: boolean
    praDPA: boolean
    mak: string
    instansiId: string
    userId: string
    createdAt: string
    updatedAt: string
}