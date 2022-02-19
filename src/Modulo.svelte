<script>
import { blurOnKey } from "./utils";
import {createEventDispatcher} from 'svelte';

const dispatch = createEventDispatcher();


    export let modulo;

    let editar = false; //Esta variable controla si se está en el modo de edición para cambiar e nombre el módulo.
</script>

<div class="modulo">
   {#if editar}
        <input type="text" on:blur={ () => (editar = false)} bind:value={modulo.name} on:keydown={blurOnKey}>
   {:else}
        <span on:click={() => (editar = true)}>{modulo.name}</span> <button on:click={() => dispatch('eliminarModulo')}>Eliminar</button>
   {/if}
    <!-- <p>{modulo.name}</p> -->
</div>

<style>
    .modulo {
        border:1px solid lightblue;
    }
</style>