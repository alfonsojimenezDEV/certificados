<script>
    import {v4 as uuidv4 } from "uuid";
    import Certificado from './Certificado.svelte';

    let certificados = {};
    let certificadosArray = []; //Se necesita este array porque el bucle #each sólo funciona con arrays (no funciona con objetos)
    let id;
    let nombreCertificado ='';

    $: certificadosArray = Object.values(certificados); //este comando pasa los objetos a un array

    id= uuidv4();
    certificados[id] = {id, name: 'Actividades de venta', modulos: [{id:1, name: 'MF0233: Ofimática'}, {id:2, name: 'MF0234: Redes'}]};
    id= uuidv4();
    certificados[id] = {id, name: 'Actividades comerciales', modulos: {}}    ;

    // console.log(certificados); 
    function addCertificado() {
        console.log("añadir certificado");
        const id = uuidv4();
        certificados[id] = {
            id,
            name: nombreCertificado,
            modulos: {}
        }
        certificados = certificados;
        nombreCertificado = '';
    }

</script>

<div class="certificados">
    <label for="idCertificado">
        <input type="text" id="idCertificado" placeholder="Nombre del certificado" bind:value={nombreCertificado} >
        <button on:click={addCertificado}>Add</button>
    </label>
    
    <h1>Listado de certificados</h1>
    {#each certificadosArray as certificado}
        <Certificado bind:certificado />
    {/each}
    
</div>

<style>
    .certificados {
        border: 1px solid darkorange;
    }
</style>