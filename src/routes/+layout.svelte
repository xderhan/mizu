<script>
    import '@tabler/core/dist/css/tabler.min.css'

    import { page } from '$app/stores'
</script>

<svelte:head>
    <title>Aplikasi PSDA{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
    {#if $page.data.description}
        <meta name="description" content={$page.data.description} />
    {/if}
</svelte:head>

<slot />

<footer class="footer footer-transparent d-print-none">
    <div class="container-xl">
        <div class="row text-center align-items-center flex-row-reverse">
            <div class="col-lg-auto ms-lg-auto">
                <ul class="list-inline list-inline-dots mb-0">
                    <li class="list-inline-item">
                        <a href="https://niasbaratkab.go.id" target="_blank" class="link-secondary" rel="noopener">Kabupaten Nias Barat</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul class="list-inline list-inline-dots mb-0">
                    <li class="list-inline-item">
                        Copyright © 2023
                        <a href="https://sederhanagulo.com" class="link-secondary" target="_blank">Sederhana Gulo</a>. All rights reserved.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
