import type { PageLoad } from './$types'

export const load: PageLoad = () => {
    return {
        title: 'Admin Panel',
        description: 'Admin page for Mizu.'
    }
}
