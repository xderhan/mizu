import db from '$lib/db'
import type { EmailExist, LoginToken, User } from '$lib/models'

/**
 * Get user by token
 *
 * @param authToken The login token
 * @returns Promise<[QueryResult<User[]>]>
 */
export const getUserByToken = async (authToken: string | undefined) => {
    return await db.query<[User[]]>(`SELECT * FROM type::table($tb) WHERE token = $authToken`, {
        tb: 'user',
        authToken
    })
}

/**
 * User Login
 *
 * @param email User email
 * @param password User Password
 * @returns Promise<[QueryResult<LoginToken[]>]>
 */
export const userLogin = async (email: string | undefined, password: string | undefined) => {
    return await db.query<[LoginToken[]]>(
        `SELECT token FROM type::table($tb) WHERE email = $email AND crypto::argon2::compare(password, $password)`,
        {
            tb: 'user',
            email,
            password
        }
    )
}

/**
 * Check if the email already registered
 *
 * @param email User email
 * @returns Promise<[QueryResult<EmailExist[]>]>
 */
export const checkEmailExist = async (email: string | undefined) => {
    return await db.query<[EmailExist[]]>(`SELECT count(email=$email) AS total FROM user`, {
        email
    })
}

/**
 * Register new user
 * 
 * @param email User email
 * @param firstName User first name
 * @param lastName User last name
 * @param password User Password 
 * @returns Promise<[QueryResult<User[]>]>
 */
export const userRegister = async (
    email: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    password: string | undefined
) => {
    return await db.query<[User[]]>(
        `CREATE user CONTENT {
                id: rand::uuid(),
                email: $email,
                firstName: $firstName,
                lastName: $lastName,
                password: crypto::argon2::generate($password),
                token: rand::uuid::v4(),
                isAdmin: false,
            }`,
        {
            email,
            firstName,
            lastName,
            password
        }
    )
}
