<script lang="ts">
    import type { Project } from "$lib/models"
    import { fly, slide } from "svelte/transition"

    export let projects: Project[] = []
</script>

<div class="col-sm-12 col-lg-6">
    <div class="card">
        <div class="card-status-start bg-red" />
        <div class="card-body">
            <h2 class="card-title">Daftar Paket Terbaru</h2>
            {#if projects.length > 0}
                <table class="table table-bordered table-striped table-vcenter">
                    <thead>
                        <tr>
                            <th class="text-center w-1">No.</th>
                            <th>Nama Paket</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each projects as item, i}
                            <tr in:fly={{ y: 20 }} out:slide>
                                <td class="text-center">{i + 1}</td>
                                <td>{item.nama}</td>
                                <td class="text-center">
                                    <a href="/paket/{item.id}" class="btn btn-sm btn-primary">Detail</a>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}
                <div class="alert alert-info">Belum ada paket yang terdaftar.</div>
            {/if}
        </div>
    </div>
</div>
