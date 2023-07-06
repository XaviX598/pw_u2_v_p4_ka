<template>
    <h1 v-if="!pokemonCorrecto"> Espere por favor... </h1>
    <div v-else>
        <h1>Juego Pokemon</h1>
        <PokeImagen  :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
        <!-- para resivir el argumento que mandamos desde el hijo se pone $event -->
        <PokemonOps v-on:seleccionado="revisarSeleccion($event)"  :opciones="arreglo" />
    </div>
</template>

<script>
// dentro de script siempre
import PokemonOps from '../components/PokemonOps.vue'
import PokeImagen from '../components/PokeImagen.vue'
import obtenerFachadaPokemons from "../helpers/clientePokemonApi"

export default {
    data() {
        return {
            arreglo: [],
            pokemonCorrecto: null,
            showPokemon: false
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
            const indicePokemon = Math.floor(Math.random() * 4)
            this.pokemonCorrecto = this.arreglo[indicePokemon]
        },
        revisarSeleccion(idSeleccionado){
            // console.log('evento en el padre')
            if(idSeleccionado == this.pokemonCorrecto.id){
                this.showPokemon =  true
            }
        }
    }
}
</script>

<style></style>