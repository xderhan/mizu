<script>
    import '@tabler/core/dist/css/tabler.min.css'

    import { page } from '$app/stores'
</script>

<svelte:head>
    <title>Mizu App{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
    {#if $page.data.description}
        <meta name="description" content={$page.data.description} />
    {/if}
</svelte:head>

<slot />
