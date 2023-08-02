<script lang="ts">
    import { slide } from 'svelte/transition'
    import { page } from '$app/stores'
    import { user } from '$lib/auth'
    import logo from '$lib/assets/logo.png'
    import type { LayoutData } from './$types'

    import User from '$lib/components/icons/User.svelte'
    import HeaderNavbar from '$lib/components/HeaderNavbar.svelte'

    let showMenu = false
    let showNavbar = false

    export let data: LayoutData
    $: user.set(data.user)
</script>

<div class="page">
    <header class="navbar navbar-expand-md navbar-light d-print-none">
        <div class="container-xl">
            <button
                class="navbar-toggler"
                on:click|preventDefault={() => (showNavbar = !showNavbar)}
                type="button"
                class:collapsed={!showNavbar}
                data-bs-target="#navbar-menu"
                aria-controls="navbar-menu"
                aria-expanded={showNavbar}
                aria-label="Toggle Navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href="/">
                    <img src={logo} width="110" height="32" alt="Aplikasi PSDA" class="navbar-brand-image" />
                </a>
            </h1>

            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item dropdown">
                    <a
                        href={$page.url.pathname}
                        on:click|preventDefault={() => (showMenu = !showMenu)}
                        class="nav-link d-flex lh-1 text-reset p-0"
                        class:show={showMenu}
                        data-bs-toggle="dropdown"
                        aria-label="User Menu"
                        aria-expanded={showMenu}
                    >
                        <span class="avatar avatar-sm"><User size={48} /></span>
                        <div class="d-none d-xl-block ps-2">
                            <div>{$user.firstName} {$user.lastName}</div>
                            <div class="mt-1 small text-muted">{$user.email}</div>
                        </div>
                    </a>
                    {#if showMenu}
                    <div
                        transition:slide={{delay: 100, duration: 300}}
                        class="dropdown-menu dropdown-menu-end dropdown-menu-arrow show"
                        data-bs-popper="static">
                        <a href="./profile" class="dropdown-item">Profile</a>
                        <a href="./settings" class="dropdown-item">Settings</a>
                        <div class="dropdown-divider" />
                        {#if data.user}
                            <form method="POST" action="/login?/logout&redirect={$page.url.pathname}">
                                <button type="submit" class="dropdown-item">Logout</button>
                            </form>
                        {/if}
                    </div>
                    {/if}
                </div>
            </div>
        </div>
    </header>

    {#if showNavbar}
        <header transition:slide class="navbar-expand-md">
            <HeaderNavbar show={showNavbar} />
        </header>
    {:else}
        <header class="navbar-expand-md">
            <HeaderNavbar show={showNavbar} /> 
        </header>
    {/if}

    <div class="page-wrapper">
        <div class="page-body">
            <div class="container-xl">
                <slot />
            </div>
        </div>
    </div>
</div>
