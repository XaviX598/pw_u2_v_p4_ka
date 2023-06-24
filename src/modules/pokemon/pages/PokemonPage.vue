<template>
    <h1>Juego Pokemon</h1>
    <PokemonOps/>
    <PokeImagen/>
</template>

<script>
// dentro de script siempre
import PokemonOps from '../components/PokemonOps.vue'
import PokeImagen from '../components/PokeImagen.vue'
export default {

    components:{
        PokeImagen,
        PokemonOps
    }
}
</script>

<style></style>