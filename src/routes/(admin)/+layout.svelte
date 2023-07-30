<script lang="ts">
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
    import { user } from '$lib/auth'
    import logo from '$lib/assets/logo.png'
    import type { LayoutData } from './$types'

    let showMenu = false
    let showNavbar = false
    let showDropdown = false

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
                data-bs-toggle="collapse"
                data-bs-target="#navbar-menu"
                aria-controls="navbar-menu"
                aria-expanded={showNavbar}
                aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href={null}>
                    <img
                        src={logo}
                        width="110"
                        height="32"
                        alt="Aplikasi PSDA"
                        class="navbar-brand-image"
                    />
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
                        aria-expanded={showMenu}>
                        <span class="avatar avatar-sm"></span>
                        <div class="d-none d-xl-block ps-2">
                            <div>{$user.firstName} {$user.lastName}</div>
                            <div class="mt-1 small text-muted">{$user.email}</div>
                        </div>
                    </a>
                    <div
                        class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                        data-bs-popper={showMenu ? 'static' : null}
                        class:show={showMenu}>
                        <a href="./profile" class="dropdown-item">Profile</a>
                        <a href="./settings" class="dropdown-item">Settings</a>
                        <div class="dropdown-divider" />
                        {#if data.user}
                            <form
                                method="POST"
                                action="/login?/logout&redirect={$page.url.pathname}"
                                use:enhance>
                                <button type="submit" class="dropdown-item">Logout</button>
                            </form>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header class="navbar-expand-md">
        <div class="navbar-collapse collapse" class:show={showNavbar} id="navbar-menu">
            <div class="navbar">
                <div class="container-xl">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="./">
                                <span class="nav-link-icon d-md-none d-lg-inline-block"
                                    ><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                                            d="M5 12l-2 0l9 -9l9 9l-2 0"
                                        /><path
                                            d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                                        /><path
                                            d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                                        /></svg
                                    >
                                </span>
                                <span class="nav-link-title">Home</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                on:click|preventDefault={() => (showDropdown = !showDropdown)}
                                class="nav-link dropdown-toggle"
                                class:show={showDropdown}
                                href="#navbar-base"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                role="button"
                                aria-expanded={showDropdown}>
                                <span class="nav-link-icon d-md-none d-lg-inline-block"
                                    ><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                                            d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"
                                        /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path
                                            d="M12 12l-8 -4.5"
                                        /><path d="M16 5.25l-8 4.5" /></svg
                                    >
                                </span>
                                <span class="nav-link-title"> Interface </span>
                            </a>
                            <div
                                class="dropdown-menu"
                                class:show={showDropdown}
                                data-bs-popper={showDropdown ? 'static' : null}>
                                <div class="dropdown-menu-columns">
                                    <div class="dropdown-menu-column">
                                        <a class="dropdown-item" href="./accordion.html">
                                            Accordion
                                        </a>
                                        <a class="dropdown-item" href="./blank.html">
                                            Blank page
                                        </a>
                                    </div>
                                    <div class="dropdown-menu-column">
                                        <a class="dropdown-item" href="./placeholder.html">
                                            Placeholder
                                        </a>
                                        <a class="dropdown-item" href="./steps.html">
                                            Steps
                                            <span
                                                class="badge badge-sm bg-green-lt text-uppercase ms-auto"
                                                >New</span
                                            >
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./form-elements.html">
                                <span class="nav-link-icon d-md-none d-lg-inline-block"
                                    ><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                                            d="M9 11l3 3l8 -8"
                                        /><path
                                            d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"
                                        /></svg
                                    >
                                </span>
                                <span class="nav-link-title">Form elements</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="page-wrapper">
        <div class="page-body">
            <div class="container-xl">
                <slot />
            </div>
        </div>
    </div>
</div>
