<template>
    <div class="container">
        <h1>ELIGE LA MONEDA</h1>
        <h2>Tienes que adivinar lo que saldrá</h2>
        <p>¿Qué crees que va a salir?</p>
        <p v-if="moneda">Lanzando moneda...</p>
        <p>{{ resultado }}</p>
        <button @click="lanzarMoneda('yes')">Cara</button>
        <button @click="lanzarMoneda('no')">Cruz</button>
        <button id="btn_reiniciar" @click="reiniciarJuego()">Reiniciar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            resultado: null,
            moneda: null
        }
    },

    methods: {
        async lanzarMoneda(eleccion) {
            const respuesta = await fetch('https://yesno.wtf/api').then(r => r.json())
            const { answer } = respuesta
            this.respuesta = answer;
            console.log('la respuesta dada por la API es:' + this.respuesta)
            console.log('la respuesta del usuario es:' + eleccion)
            if (eleccion === this.respuesta) {
                this.moneda = true;
                setTimeout(()=> {
                    this.resultado = "Ganaste, adivinaste el lanzamiento";
                    this.moneda=false
                }, 2000)
                console.log('el usuario adivino la moneda')
            } else {
                this.moneda = true;
                setTimeout(()=> {
                    this.resultado = "Perdiste, no adivinaste lo que iba a salir";
                    this.moneda=false
                }, 2000)
                console.log('el usuario no adivino la moneda')
            }
        },
        reiniciarJuego() {
            this.resultado = null;
        }
    }
};
</script>

<style>
body{
    background-color: rgb(60, 68, 175);
    display: flex;
    justify-content: center;
    text-align: center
}
.container{
    background-color: rgb(160, 164, 221);
    border-radius: 20px;
    border: 10px solid;
    margin: 30px;
    padding: 25px;
    justify-content: center;
}

button{
    width: 100%;
    margin-bottom: 10px;
    padding: 20px;
    font-size: large;
    border-radius: 10px;
}

button:hover{
    background-color: rgb(123, 126, 168);
    color: aliceblue;
}

#btn_reiniciar:hover{
    background-color:  rgb(26, 32, 211);
    color: aliceblue;
}

</style>