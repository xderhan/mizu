<script lang="ts">
    import type { PageData, ActionData } from './$types'
    import Plus from '$lib/components/icons/Plus.svelte'
    import ModalForm from '$lib/components/ModalForm.svelte'
    import RecentInstansi from '$lib/components/instansi/RecentInstansi.svelte'
    import RecentProjects from '$lib/components/projects/RecentProjects.svelte'

    let showAddInstansi = false
    let showAddPaket = false
    export let data: PageData
    export let form: ActionData

    let addInstansiLoading = false
    function addInstansiLoadingStart() {
        addInstansiLoading = true
    }
    function addInstansiLoadingStop() {
        addInstansiLoading = false
    }

    function closeAddInstansiModal() {
        showAddInstansi = false
    }

    function closeAddPaketModal() {
        showAddPaket = false
    }
    $: instansi = data.instansi
    $: projects = data.projects
</script>

<svelte:body
    class:modal-open={showAddInstansi}
    style={showAddInstansi ? "overflow: hidden; padding-right: 0px;" : null}
/>

<div>
    <div class="row g-2 align-items-center mb-3">
        <div class="col">
            <!-- Page pre-title -->
            <div class="page-pretitle">{data.pretitle}</div>
            <h2 class="page-title">{data.title}</h2>
        </div>
        <!-- Page title actions -->
        <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
                <button
                    on:click|preventDefault={() => (showAddInstansi = !showAddInstansi)}
                    class="btn btn-primary d-none d-sm-inline-block">
                    <Plus size={24} />Tambah Instansi</button>
                <button
                    on:click|preventDefault={() => (showAddInstansi = !showAddInstansi)}
                    class="btn btn-primary d-sm-none btn-icon">
                    <Plus size={24} />
                </button>
                <button
                    on:click|preventDefault={() => (showAddPaket = !showAddPaket)}
                    class="btn btn-danger d-none d-sm-inline-block">
                    <Plus size={24} />Tambah Paket</button>
                <button
                    on:click|preventDefault={() => (showAddPaket = !showAddPaket)}
                    class="btn btn-danger d-sm-none btn-icon">
                    <Plus size={24} /></button>
            </div>
        </div>
    </div>

    <div class="row row-deck row-cards">
        <RecentInstansi {instansi} />
        <RecentProjects {projects} />
    </div>

    <ModalForm
        title="Tambah Instansi"
        action="?/addinstansi"
        isOpen={showAddInstansi}
        on:close={closeAddInstansiModal}
        on:startLoading={addInstansiLoadingStart}
        on:stopLoading={addInstansiLoadingStop}
        submitButton="Tambah"
        >
        <div>    
            <div class="mb-3">
                <label class="form-label" for="nama">Nama</label>
                <input
                    type="text"
                    class="form-control"
                    class:is-invalid={form?.namaMissing}
                    name="nama"
                    placeholder="Nama instansi" />
                {#if form?.namaMissing}
                    <div class="invalid-feedback">Silahkan masukan nama instansi</div>
                {/if}
            </div>

            <div class="mb-3">
                <label class="form-label" for="alamat">Alamat</label>
                <textarea
                    class="form-control" 
                    rows="3" 
                    class:is-invalid={form?.alamatMissing}
                    name="alamat" />
                 {#if form?.alamatMissing}
                    <div class="invalid-feedback">Silahkan masukan alamat instansi</div>
                {/if}
           </div>

            <div class="mb-3">
                <label class="form-label" for="klpd">Nama KLPD</label>
                <input
                    type="text"
                    class="form-control"
                    name="klpd"
                    class:is-invalid={form?.klpdMissing}
                    placeholder="Nama Kementerian/Lembaga/Perangkat Daerah"
                />
                {#if form?.klpdMissing}
                    <div class="invalid-feedback">Silahkan masukan nama KLPD</div>
                {/if}
           </div>

            <div class="mb-3">
                <label class="form-label" for="logo">Logo</label>
                <input
                    type="text"
                    class="form-control"
                    name="logo"
                    class:is-invalid={form?.logoMissing}
                    placeholder="Logo" />
                 {#if form?.logoMissing}
                    <div class="invalid-feedback">Silahkan masukan logo instansi</div>
                {/if}
           </div>

            <div class="mb-3">
                <label class="form-label" for="kode">Kode Surat</label>
                <input
                    type="text"
                    class="form-control"
                    name="kode"
                    class:is-invalid={form?.kodeMissing}
                    placeholder="Kode Surat" />
                {#if form?.kodeMissing}
                    <div class="invalid-feedback">Silahkan masukan kode surat</div>
                {/if}
           </div>
        </div>
        <svelte:fragment slot="action">
            <button type="submit" class="btn btn-primary ms-auto" disabled={addInstansiLoading}>
                <span
                    class="spinner-border spinner-border-sm me-2"
                    style={addInstansiLoading ? null : 'display: none;'}
                    role="status" />
                {#if !addInstansiLoading }
                    <Plus size={24} />
                {/if}
                Tambah Instansi
            </button>
        </svelte:fragment>
    </ModalForm>

    <ModalForm title="Tambah Paket" action="?/addpaket" isOpen={showAddPaket} on:close={closeAddPaketModal}>
        <div>
            <div class="mb-3">
                <label class="form-label" for="nomor">Nomor</label>
                <input type="text" class="form-control" name="nomor" placeholder="Nomor index paket" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="nama">Nama</label>
                <input type="text" class="form-control" name="nama" placeholder="Nama paket" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="deskripsi">Deskripsi</label>
                <textarea class="form-control" rows="3" name="deskripsi" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="jenis">Jenis Pengadaan</label>
                <input type="text" class="form-control" name="jenis" placeholder="Jenis Pengadaan Barang dan Jasa" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="metode">Metode Pengadaan</label>
                <input type="text" class="form-control" name="metode" placeholder="Metode Pengadaan Barang dan Jasa" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="kodepaket">Kode Paket</label>
                <input type="text" class="form-control" name="kodepaket" placeholder="Kode Paket" />
            </div>
 
            <div class="mb-3">
                <label class="form-label" for="volume">Volume</label>
                <input type="text" class="form-control" name="volume" placeholder="Volume Pekerjaan" />
            </div>
        </div>
        <div slot="second_body">
            <div class="mb-3">
                <label class="form-label" for="pagu">Pagu</label>
                <input type="text" class="form-control" name="pagu" placeholder="Pagu Anggaran" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="hps">HPS</label>
                <input type="text" class="form-control" name="hps" placeholder="Nilai HPS" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="sumberdana">Sumber Dana</label>
                <input type="text" class="form-control" name="sumberdana" placeholder="Sumber Dana" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="tahunanggaran">Tahun Anggaran</label>
                <input type="text" class="form-control" name="tahunanggaran" placeholder="Tahun Anggaran" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="pdn">PDN</label>
                <input type="text" class="form-control" name="pdn" placeholder="Produk Dalam Negeri?" />
            </div>
 
            <div class="mb-3">
                <label class="form-label" for="ukk">UKK</label>
                <input type="text" class="form-control" name="ukk" placeholder="Usaha Kecil & Koperasi" />
            </div>
  
            <div class="mb-3">
                <label class="form-label" for="ekonomi">Aspek Ekonomi</label>
                <input type="text" class="form-control" name="ekonomi" placeholder="Aspek Ekonomi Pengadaan" />
            </div>
   
            <div class="mb-3">
                <label class="form-label" for="sosial">Aspek Sosial</label>
                <input type="text" class="form-control" name="sosial" placeholder="Aspek Sosial Pengadaan" />
            </div>
   
            <div class="mb-3">
                <label class="form-label" for="lingkungan">Aspek Lingkungan</label>
                <input type="text" class="form-control" name="lingkungan" placeholder="Aspek Lingkungan Pengadaan" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="pradpa">Pra DPA</label>
                <input type="text" class="form-control" name="pradpa" placeholder="Pra DPA" />
            </div>

            <div class="mb-3">
                <label class="form-label" for="mak">MAK</label>
                <input type="text" class="form-control" name="mak" placeholder="Mata Anggaran Pengeluaran" />
            </div>

        </div>
        <svelte:fragment slot="action">
            <button on:click|preventDefault={() => (showAddPaket = !showAddPaket)} class="btn btn-primary ms-auto">
                <Plus size={24} />Tambah Instansi</button>
        </svelte:fragment>
 
    </ModalForm>
</div>
