<script>
    import {v4 as uuidv4 } from "uuid";
    import Modulo from './Modulo.svelte';

    //Recibe: certificado
    export let certificado;

    let modulosArray = [];
    let nombreModulo = '';
    $:  modulosArray = Object.values(certificado.modulos);
    
    function addModulo() {
        const id = uuidv4();
        //Desempacando la propiedad modulos del objeto certificado
        //Con esto se consigue tener una constante denominada
        //modulos que contiene la propiedad modulos del objeto
        //certificado
        const {modulos} = certificado;
        
        modulos[id] = {
            id,
            name: nombreModulo
        }
        certificado.modulos = modulos;
        nombreModulo = '';
        
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
    {#each modulosArray as modulo}
        <Modulo bind:modulo/>
    {/each}
</div>

<style>
    .certificado {
        border: 1px solid lightgray;
    }
</style>