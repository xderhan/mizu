<script lang="ts">
    import type { Instansi } from "$lib/models"

    export let instansi: Instansi[] = []
</script>

<div class="col-sm-12 col-lg-6">
    <div class="card">
        <div class="card-status-start bg-blue" />
        <div class="card-body">
            <h2 class="card-title">Daftar Instansi Terbaru</h2>
            {#if instansi.length > 0}
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
                            <tr>
                                <td class="text-center">{i + 1}</td>
                                <td>{item.nama}</td>
                                <td class="text-center">
                                    <a href="/admin/instansi/{item.id}" class="btn btn-sm btn-primary">Detail</a>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}
                <div class="alert alert-info">Belum ada instansi yang terdaftar.</div>
            {/if}
        </div>
    </div>
</div>
