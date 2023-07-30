import type { PageLoad } from "../$types"

export const load: PageLoad = ({ data }) => {
    return {
        title: 'Login',
        redirect: data.redirect
    }
}
