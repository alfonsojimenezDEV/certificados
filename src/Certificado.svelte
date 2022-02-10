<script>
    import Modulo from './Modulo.svelte';

    //Recibe: certificado
    export let certificado;

    let modulos = [];
    $:  modulos = Object.values(certificado.modulos);
    
    console.log(certificado);
</script>

<div class="certificado">
    <h2>{certificado.name}</h2>
    {#each modulos as modulo}
        <Modulo bind:modulo/>
    {/each}
</div>

<style>
    .certificado {
        border: 1px solid lightgray;
    }
</style>