<script lang="ts">
    import { applyAction, enhance } from '$app/forms'
    import User from '$lib/components/icons/User.svelte'
    import type { PageData, ActionData } from './$types'

    let isLoading = false
    let error = ''
    let showPassword = false

    export let form: ActionData
</script>

<h2 class="h2 text-center mb-4">Register</h2>

{#if error}
    <div class="alert alert-danger">{error}</div>
{/if}

{#if form?.registerFailed}
    <div class="alert alert-danger">Invalid login credentials</div>
{/if}

<form
    method="POST"
    use:enhance={(event) => {
        isLoading = true

        return ({ result, update }) => {
            isLoading = false
            if (result.type === 'failure' || result.type === 'redirect') {
                applyAction(result)
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
            class:is-invalid={form?.emailMissing || form?.emailExist || form?.invalidEmail}
        />
        {#if form?.emailMissing}
            <div class="invalid-feedback">Email is Required!</div>
        {/if}
        {#if form?.emailExist}
            <div class="invalid-feedback">Email already registered!</div>
        {/if}
        {#if form?.invalidEmail}
            <div class="invalid-feedback">Invalid email address</div>
        {/if}
  </div>
    <div class="mb-3">
        <label class="form-label" for="firstName">First Name</label>
        <input
            type="text"
            id="firstName"
            name="firstName"
            class="form-control"
            placeholder="Your first name"
            autocomplete="off"
            class:is-invalid={form?.firstNameMissing}
        />
        {#if form?.firstNameMissing}
            <div class="invalid-feedback">First name is Required!</div>
        {/if}
    </div>
    <div class="mb-3">
        <label class="form-label" for="lastName">Last Name</label>
        <input
            type="text"
            id="lastName"
            name="lastName"
            class="form-control"
            placeholder="Your last name"
            autocomplete="off"
            class:is-invalid={form?.lastNameMissing}
        />
        {#if form?.lastNameMissing}
            <div class="invalid-feedback">Last name is Required!</div>
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
                    data-bs-toggle="tooltip">
                    <User size={24} />
                </a>
            </span>
            {#if form?.passwordMissing}
                <div class="invalid-feedback">Password is Required!</div>
            {/if}
        </div>
    </div>
    <div class="mb-2">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <div class="input-group input-group-flat">
            <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                class="form-control"
                placeholder="Please re-enter the password"
                autocomplete="off"
                class:is-invalid={form?.confirmPasswordMissing || form?.passwordMismatch}
            />
            <span class="input-group-text">
                <a
                    href={null}
                    on:click|preventDefault={() => (showPassword = !showPassword)}
                    class="link-secondary"
                    title="Show password"
                    data-bs-toggle="tooltip">
                    <User size={24} />
                </a>
            </span>
            {#if form?.confirmPasswordMissing}
                <div class="invalid-feedback">Password confirmation is Required!</div>
            {/if}
            {#if form?.passwordMismatch}
                <div class="invalid-feedback">Password confirmation does not match!</div>
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
            Register
        </button>
    </div>
</form>
