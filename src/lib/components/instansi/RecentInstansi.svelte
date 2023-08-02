<script lang="ts">
    import type { Instansi } from "$lib/models"
    import { fly, slide } from "svelte/transition"
    import Eye from "$lib/components/icons/Eye.svelte"
    import Edit from "$lib/components/icons/Edit.svelte"
    import Delete from "$lib/components/icons/Delete.svelte"

    export let instansi: Instansi[] = []
</script>

<div class="col-sm-12 col-lg-6">
    <div class="card">
        <div class="card-status-start bg-blue" />
        <div class="card-body">
            <h2 class="card-title">Daftar Instansi Terbaru</h2>
            {#if instansi.length > 0}
            <div class="table-responsive">
                <table class="table table-bordered table-striped table-vcenter">
                    <thead>
                        <tr>
                            <th class="text-center w-1">No.</th>
                            <th>Nama Instansi</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each instansi as item, i}
                            <tr in:fly={{ y: 20 }} out:slide>
                                <td class="text-center">{i + 1}</td>
                                <td>{item.nama}</td>
                                <td class="text-center">
                                    <a href="/instansi/view/{item.id}" class="btn btn-light btn-icon btn-sm"><Eye size={48} /></a>
                                    <a href="/instansi/edit/{item.id}" class="btn btn-light btn-icon btn-sm"><Edit size={48} /></a>
                                    <a href="/instansi/delete/{item.id}" class="btn btn-light btn-icon btn-sm"><Delete size={48} /></a>
                                </td>
                            </tr>
                            {/each}
                        </tbody>
                    </table>
            </div>
            {:else}
                <div class="alert alert-info">Belum ada instansi yang terdaftar.</div>
            {/if}
        </div>
    </div>
</div>
