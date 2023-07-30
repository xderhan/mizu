export type LoginToken = {
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
