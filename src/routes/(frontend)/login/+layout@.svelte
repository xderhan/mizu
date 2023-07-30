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
                Not registered? <a href="/register" tabindex="-1">Create account</a>
            </div>
        </div>
    </div>
</div>
