import { getUserByToken } from '$lib/models/user'
import type { Handle } from '@sveltejs/kit'

/**
 * @param {string} location
 * @param {string | null} body
 */
function redirect(location: string, body: string | null = null) {
    return new Response(body, {
        status: 303,
        headers: { location }
    })
}

const unProtectedRoutes = ['/', '/login', '/register', '/about']

export const handle: Handle = async ({ event, resolve }) => {
    const authToken = event.cookies.get('authToken')
    if (!authToken && !unProtectedRoutes.includes(event.url.pathname))
        return redirect('/login?redirect=' + event.url.pathname, 'No authenticated user')

    const [user] = await getUserByToken(authToken)

    if (user.status !== 'OK' || user.result.length === 0) {
        event.cookies.delete('authToken', { path: '/' })
        if (!unProtectedRoutes.includes(event.url.pathname)) {
            return redirect('/', 'Not a valid user')
        }
    } else {
        const me = user.result[0]
        event.locals.user = {
            id: me.id,
            email: me.email,
            firstName: me.firstName,
            lastName: me.lastName,
            isAdmin: me.isAdmin
        }
    }

    return await resolve(event)
}
