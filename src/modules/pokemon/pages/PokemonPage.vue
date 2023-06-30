<template>
    <h1>Juego Pokemon</h1>
    <PokeImagen :pokemonId="384" :muestraPokemon="false" />
    <PokemonOps :opciones="arreglo"/>
</template>

<script>
// dentro de script siempre
import PokemonOps from '../components/PokemonOps.vue'
import PokeImagen from '../components/PokeImagen.vue'
import obtenerFachadaPokemons from "../helpers/clientePokemonApi"

export default {
    data(){
        return{
            arreglo: null
        }
    },

    components: {
        PokeImagen,
        PokemonOps
    },
    mounted() { //los metodos del ciclio de vida no hacen falta llamarle con await por lo que no se pone tampoco async
        console.log('Se monto el componente')
        this.cargaJuegoInicial()
    },
    methods: {
        async cargaJuegoInicial() {
            const arregloPokemons = await obtenerFachadaPokemons()
            // console.log(arregloPokemons)
            this.arreglo = arregloPokemons
        }
    }
}
</script>

<style></style>