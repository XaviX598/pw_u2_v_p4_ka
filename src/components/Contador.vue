<template>
    <h3>{{tituloComponente}}</h3>
    <h3>{{titulo}}</h3>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <button v-on:click="sumar">+</button>
    <button v-on:click="restar">-</button>
</template>

<script>
export default {
    // debemos darle un nombre especifico al componente y debe ser el mismo del archivo
    name: "Contador",

    //propiedad reactiva
    data() {
        return {
            numero: 5,
            tituloComponente: this.titulo //aqui tambien se usa this
        }

    },

    methods: {
        obtenerCuadrado() {
            console.log('Entro al metodo cuadrado')
            return this.numero * this.numero
        },
        sumar() {
            return this.numero++
        },
        restar() {
            return this.numero++
        }

    },

    //propiedades computadas pera ver si hay funciones que arrojan un resultado similiar y asi no se imprima varias veces
    computed: {
        obtenerCuadradoComputado() {
            console.log('Obtener cuadrado computado')
            return this.numero * this.numero
        }
    },
    // lo mas comun es que vaya a inicio 
    props:['titulo','valor2'] //declaramos que alguien ponga un titulo y alguien ponga el valor2
}
</script>

<style>
body{
    background-color: #716B87 ;
}
button {
    background-color: #64B687;
    border-radius: 5px;
    border: 1px solid white;
    color: aliceblue;
    /* para que al pasar por el boton se ponga el dedo */
    cursor: pointer; 
    margin: 0 5px;
    padding: 5px 15px;
}

button:hover{
    background-color: #67B;
}
</style>