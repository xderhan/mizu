<script lang="ts">
    import { slide } from 'svelte/transition'
    import { page } from '$app/stores'

    import Home from '$lib/components/icons/Home.svelte'
    import Package from '$lib/components/icons/Package.svelte'
    import CheckBox from '$lib/components/icons/CheckBox.svelte'

    let showDropdown = false
    export let show = false
</script>

<div class="navbar-collapse collapse" class:show id="navbar-menu">
    <div class="navbar">
        <div class="container-xl">
            <ul class="navbar-nav">
                <li class="nav-item" class:active={$page.url.pathname === '/admin'}>
                    <a class="nav-link" href="/admin">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <Home size={24} />
                        </span>
                        <span class="nav-link-title">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item" class:active={$page.url.pathname === '/projects'}>
                    <a class="nav-link" href="/projects">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <Package size={24} />
                        </span>
                        <span class="nav-link-title">Projects</span>
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
                        aria-expanded={showDropdown}
                    >
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <Package size={24} />
                        </span>
                        <span class="nav-link-title"> Interface </span>
                    </a>
                    {#if showDropdown}
                        <div
                            transition:slide={{ delay: 100, duration: 300 }}
                            class="dropdown-menu show"
                            data-bs-popper="static"
                        >
                            <div class="dropdown-menu-columns">
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="./accordion.html"> Accordion </a>
                                    <a class="dropdown-item" href="./blank.html"> Blank page </a>
                                </div>
                                <div class="dropdown-menu-column">
                                    <a class="dropdown-item" href="./placeholder.html"> Placeholder </a>
                                    <a class="dropdown-item" href="./steps.html">
                                        Steps
                                        <span class="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    {/if}
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./form-elements.html">
                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                            <CheckBox size={24} />
                        </span>
                        <span class="nav-link-title">Form elements</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
