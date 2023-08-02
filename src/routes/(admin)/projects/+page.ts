import type { PageLoad } from './$types'

export const load: PageLoad = ({ data }) => {
    return {
        pretitle: 'List of',
        title: 'Projects',
        instansi: data.instansi,
        projects: data.projects
    }
}
