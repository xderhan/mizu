import type { PageLoad } from './$types'

export const load: PageLoad = () => {
    return {
        title: 'Home',
        description: 'One stop tool for taking notes, managing tasks, and more.'
    }
}
