<script>
    import { page } from '$app/stores'
    import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte'
</script>

<div class="border-top-wide border-primary d-flex flex-column">
    <div class="page page-center">
        <div class="container-tight py-4">
            <div class="empty">
                <div class="empty-header">{$page.status}</div>
                <p class="empty-title">Oops… You just found an error page</p>
                <p class="empty-subtitle text-muted">{$page.error?.message}</p>
                <div class="empty-action">
                    <a href="/" class="btn btn-primary"><ArrowLeft size={24} />Take me home</a>
                </div>
            </div>
        </div>
    </div>
</div>
