<script>
    import logo from '$lib/assets/logo.png'
</script>

<div class="border-top-wide border-primary d-flex flex-column">
    <div class="page page-center">
        <div class="container container-tight py-4">
            <div class="text-center mb-4">
                <a href="/" class="navbar-brand navbar-brand-autodark">
                    <img src={logo} height="72" alt="Mizu Application" />
                </a>
            </div>
            <div class="card card-md">
                <div class="card-body">
                    <slot />
                </div>
            </div>
            <div class="text-center text-muted mt-3">
                Already have account? <a href="/login" tabindex="-1">Login</a>
            </div>
        </div>
    </div>
</div>
