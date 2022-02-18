<script>
    import {obtenerId, blurOnKey}  from "./utils";
    import Modulo from './Modulo.svelte';

    //Recibe: certificado
    export let certificado;

    let modulosArray = [];
    let nombreModulo = '';
    
    let editar = false; //Esta variable controlará la edición del nombre del certificado

    $:  modulosArray = Object.values(certificado.modulos);

    
    function addModulo() {
        const id = obtenerId();
        //Desempacando la propiedad modulos del objeto certificado
        //Con esto se consigue tener una constante denominada
        //modulos que contiene la propiedad modulos del objeto
        //certificado
        const {modulos} = certificado;
        //si quisiémos que tuviera otro nombre
        //pondríamos const {modulos: nuevoNombre} = certificado
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
    {#if editar}
         <input type="text" bind:value={certificado.name} on:blur={() => (editar = false)} on:keydown={blurOnKey}>
    {:else}
         <h2 on:click={() => (editar=true)}>{certificado.name}</h2>
    {/if}

    <!-- <h2>{certificado.name}</h2> -->
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