<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { enhance, applyAction } from '$app/forms'
    import { invalidateAll } from '$app/navigation'

    const dispatch = createEventDispatcher()

    export let title = 'Modal Title'
    export let submitButton = 'Submit'
    export let isOpen = false
    export let action = ''
    export let loading = false

    function closeModal() {
        isOpen = false
        dispatch('close')
    }
    function isLoading() {
        loading = true
        dispatch('startLoading')
    }
    function stopedLoading() {
        loading = false
        dispatch('stopLoading')
    }
</script>

<div
    class="modal modal-blur fade"
    class:show={isOpen}
    id="modal-report"
    tabindex="-1"
    role="dialog"
    aria-modal={isOpen}
    aria-hidden={!isOpen}
    style:display={isOpen ? 'block' : 'none'}
>
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{title}</h5>
                <button
                    on:click|preventDefault={() => closeModal()}
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <form method="POST" {action} use:enhance={() => {
                isLoading()

                return async ({result, update}) => {
                    stopedLoading()
                    if (result.type === 'failure' || result.type === 'redirect') {
                        applyAction(result);
                    }

                    if (result.type === 'success') {
                        await update()
                        await invalidateAll()
                        closeModal()
                    }
                }
            }}>
                <div class="modal-body">
                    <slot />
                </div>
                {#if $$slots.second_body}
                    <div class="modal-body">
                        <slot name="second_body" />
                    </div>
                {/if}
                <div class="modal-footer">
                    {#if $$slots.cancel_action}
                        <slot name="cancel_action" />
                    {:else}
                        <button on:click|preventDefault={() => closeModal()} class="btn btn-link link-secondary">
                            Batal
                        </button>
                    {/if}
                    {#if $$slots.action}
                        <slot name="action" />
                    {:else}
                        <button type="submit" class="btn btn-primary ms-auto" disabled={loading}>
                            <span
                                class="spinner-border spinner-border-sm me-2"
                                style={loading ? null : 'display: none;'}
                                role="status" />{submitButton}
                        </button>
                    {/if}
                </div>
            </form>
        </div>
    </div>
</div>
