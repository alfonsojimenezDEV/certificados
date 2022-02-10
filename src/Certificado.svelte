<script>
    import Modulo from './Modulo.svelte';

    //Recibe: certificado
    export let certificado;

    let modulos = [];
    let nombreModulo = '';
    $:  modulos = Object.values(certificado.modulos);
    
    function addModulo() {
        console.log("añadir módulo");
        
    }

    console.log(certificado);
</script>

<div class="certificado">
    <h2>{certificado.name}</h2>
    <form action="" on:submit|preventDefault={addModulo}>
        <label for="">
            <input type="text" placeholder="Nombre del módulo" bind:value={nombreModulo} /> <button>Add</button>
        </label>
    </form>
    {#each modulos as modulo}
        <Modulo bind:modulo/>
    {/each}
</div>

<style>
    .certificado {
        border: 1px solid lightgray;
    }
</style>