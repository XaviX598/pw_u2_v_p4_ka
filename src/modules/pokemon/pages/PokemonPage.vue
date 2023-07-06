<template>
    <div class="juegoPokemon">
        <div class="marcador" v-if="marcadorMostrar">
            <div class="puntos">
                <h2>Puntaje: {{ puntaje }}</h2>
            </div>
            <div class="intentos">
                <h2>Intento: {{ intentos }}</h2>
            </div>
        </div>

        <div v-if="mostrarJuego">
            <h1 v-if="!pokemonCorrecto"> Espere por favor... </h1>
            <div v-else>
                <h1>Juego Pokemon</h1>
                <PokeImagen :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
                <!-- para resivir el argumento que mandamos desde el hijo se pone $event -->
                <PokemonOps v-if="mostrarOps" v-on:seleccionado="revisarSeleccion($event)" :opciones="arreglo" />
            </div>
        </div>
        <div v-if="fallido" class="fallido">
            <h3>Has utilizado tus 3 intentos</h3>
            <h3>El juego ha terminado, intentalo nuevamente</h3>
            <h3>El pokemon era: {{ pokemonCorrecto.nombre }}</h3>
            <button class="btn_reiniciar" v-on:click="reiniciar()">Nuevo Juego</button>
        </div>

        <div v-if="felicidades" class="felicidades">
            <div class="marcador">
                <h2>Puntaje: {{ puntaje }}</h2>
            </div>
            <h2>Felicidades has ganado un premio de $10.000,00</h2>
            <button class="btn_reiniciar" v-on:click="reiniciar()">Nuevo Juego</button>

        </div>
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
            showPokemon: false,
            puntaje: 0,
            intentos: 0,
            fallido: false,
            felicidades: false,
            mostrarJuego: true,
            mostrarOps: true,
            marcadorMostrar: true
        }
    },

    components: {
        PokeImagen,
        PokemonOps
    },
    mounted() {
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
        revisarSeleccion(idSeleccionado) {
            // console.log('evento en el padre')
            if (this.intentos == 0) {
                if (idSeleccionado == this.pokemonCorrecto.id) {
                    this.showPokemon = true
                    this.puntaje += 5
                    console.log('1')
                    this.mostrarJuego = true
                    this.felicidades = true
                    this.mostrarOps = false
                } else {
                    this.showPokemon = false
                    this.mostrarJuego = true
                    this.felicidades = false
                }

            } else if (this.intentos == 1) {
                if (idSeleccionado == this.pokemonCorrecto.id) {
                    this.showPokemon = true
                    this.puntaje += 2
                    this.mostrarOps = false
                    this.mostrarJuego = true
                    console.log('2')
                    this.felicidades = true
                } else {
                    this.showPokemon = false
                    this.mostrarJuego = true

                    this.felicidades = false
                }
            } else {
                if (idSeleccionado == this.pokemonCorrecto.id) {
                    this.showPokemon = true
                    this.mostrarOps = false
                    this.puntaje += 1
                    this.mostrarJuego = true
                    console.log('3')
                    this.felicidades = true
                } else {
                    this.mostrarJuego = true
                    this.fallido = true

                    this.mostrarOps = false
                    this.felicidades = false
                }
            }
            this.intentos += 1
        },
        reiniciar() {
            location.reload()
        }
    }
}
</script>

<style>
.marcador {
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
}

h1{
    color: aliceblue;

}




.puntos {
    display: flex;
    margin-right: 300px;
}

.intentos {
    display: flex;
}



.felicidades {
    display: block;
    justify-content: center;
    align-items: center;
}

.btn_reiniciar {
    padding: 15px 40px;
    color: aliceblue;
    background-color: rgb(141, 0, 207);
    border: 5px solid;
    font-size: large;
    font-weight: bold;
}

.btn_reiniciar:hover {
    background: rgb(44, 170, 170);
    background: radial-gradient(circle, rgba(44, 170, 170, 1) 1%, rgba(2, 0, 36, 1) 49%,  rgb(229, 180, 180)96%);
    cursor: pointer;
}


.felicidades {

    color: rgb(183, 183, 230);
}

.fallido {

    color: rgb(229, 180, 180);
}

.juegoPokemon{
    /* height: 20000px; */
    margin-top: -50px;
}
</style>