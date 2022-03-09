<script>
    import {obtenerId, blurOnKey} from './utils.js'
    import Certificado from './Certificado.svelte';

    let certificados = {};
    let certificadosArray = []; //Se necesita este array porque el bucle #each sólo funciona con arrays (no funciona con objetos)
    let nombreCertificado ='';
    let message = '';
    $: certificadosArray = Object.values(certificados); //este comando pasa los objetos a un array

    // id= obtenerId();
    // certificados[id] = {id, name: 'Actividades de venta', modulos: [{id:1, name: 'MF0233: Ofimática'}, {id:2, name: 'MF0234: Redes'}]};
    // id= obtenerId();
    // certificados[id] = {id, name: 'Actividades comerciales', modulos: []};

    // console.log(certificados); 
    function addCertificado() {
        // console.log("añadir certificado");
        //Primero comprobamos si el nombre del certificado ya se ha usado antes.
        const duplicate = certificadosArray.some(cat => cat.name === nombreCertificado);
        if (duplicate) {
            message = `El certificado ${nombreCertificado} ya existe.`
            alert(message);
            return;
        }
        const id = obtenerId();
        certificados[id] = {
            id,
            name: nombreCertificado,
            modulos: {}
        }
        certificados = certificados;
        nombreCertificado = '';
    }

    function eliminarCertificado(certificado) {
        delete certificados[certificado.id]; 
        certificados=certificados;
    }

</script>

<div class="certificados">
    <label for="idCertificado">
        <input type="text" id="idCertificado" placeholder="Nombre del certificado" bind:value={nombreCertificado} >
        <button on:click={addCertificado}>Add</button>
    </label>
    
    <h1>Listado de certificados</h1>
    {#each certificadosArray as certificado}
        <Certificado bind:certificado on:eliminarCertificado={eliminarCertificado(certificado)} />
    {/each}
    
</div>

<style>
    .certificados {
        border: 1px solid darkorange;
    }
</style>