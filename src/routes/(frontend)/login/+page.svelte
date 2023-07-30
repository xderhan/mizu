<script lang="ts">
    import { applyAction, enhance } from '$app/forms'
    import type { PageData, ActionData } from './$types'

    let isLoading = false
    let error = ''
    let showPassword = false

    export let data: PageData

    export let form: ActionData
</script>

<h2 class="h2 text-center mb-4">Login</h2>

{#if error}
    <div class="alert alert-danger">{error}</div>
{/if}

{#if form?.loginFailed}
    <div class="alert alert-danger">Invalid login credentials</div>
{/if}

<form
    method="POST"
    action="?/login&redirect={data.redirect}"
    use:enhance={(event) => {
        isLoading = true

        return ({ result, update }) => {
            isLoading = false
            if (result.type === 'failure' || result.type === 'redirect') {
				applyAction(result);
			}
            if (result.type === 'error') {
                error = result.error.message
            }
            // update();
        }
    }}
>
    <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            placeholder="your@email.com"
            autocomplete="off"
            class:is-invalid={form?.emailMissing}
        />
        {#if form?.emailMissing}
            <div class="invalid-feedback">Email is Required!</div>
        {/if}
    </div>
    <div class="mb-2">
        <label class="form-label" for="password">Password</label>
        <div class="input-group input-group-flat">
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                class="form-control"
                placeholder="Your password"
                autocomplete="off"
                class:is-invalid={form?.passwordMissing}
            />
            <span class="input-group-text">
                <a
                    href={null}
                    on:click|preventDefault={() => (showPassword = !showPassword)}
                    class="link-secondary"
                    title="Show password"
                    data-bs-toggle="tooltip"
                >
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
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                </a>
            </span>
            {#if form?.passwordMissing}
                <div class="invalid-feedback">Password is Required!</div>
            {/if}
        </div>
    </div>
    <div class="form-footer">
        <button type="submit" class="btn btn-primary w-100" disabled={isLoading}>
            <span
                class="spinner-border spinner-border-sm me-2"
                style={isLoading ? null : 'display: none;'}
                role="status"
            />
            Masuk
        </button>
    </div>
</form>
