<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let title = 'Modal Title'
    export let isOpen = false

    function closeModal() {
        isOpen = false
        dispatch('close')
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
                    <button on:click|preventDefault={() => closeModal()} class="btn btn-primary ms-auto">
                        Submit
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>
