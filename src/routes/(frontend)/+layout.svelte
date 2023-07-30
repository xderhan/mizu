<script>
    import logo from '$lib/assets/logo.png'
</script>

<div class="page">
    <header class="navbar navbar-expand-md navbar-light d-print-none">
        <div class="container-xl">
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href="/">
                    <img src={logo} width="110" height="32" alt="Aplikasi PSDA" class="navbar-brand-image" />
                </a>
            </h1>
            <div class="navbar-nav flex-row order-md-last">
                <div class="nav-item d-none d-md-flex me-3">
                    <div class="btn-list">
                        <a href="/admin" class="btn">Admin Panel</a>
                    </div>
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
