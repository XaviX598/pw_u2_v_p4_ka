<template>
    <h1><strong>Calculadora Web</strong></h1>
    <div>
        <div class="container">
            <div class="calculadora">

                <button class="botones" v-on:click="opcionesNumericas">1</button>
                <button class="botones" v-on:click="opcionesNumericas">2</button>
                <button class="botones" v-on:click="opcionesNumericas">3</button>
                <button class="botones" v-on:click="opcionesNumericas">+</button>
                <button class="botones" v-on:click="opcionesNumericas">4</button>
                <button class="botones" v-on:click="opcionesNumericas">5</button>
                <button class="botones" v-on:click="opcionesNumericas">6</button>
                <button class="botones" v-on:click="opcionesNumericas">-</button>
                <button class="botones" v-on:click="opcionesNumericas">7</button>
                <button class="botones" v-on:click="opcionesNumericas">8</button>
                <button class="botones" v-on:click="opcionesNumericas">9</button>
                <button class="botones" v-on:click="opcionesNumericas">/</button>
                <button class="ceroDosColumnas" v-on:click="opcionesNumericas">0</button>
                <button class="botones" v-on:click="opcionesNumericas">=</button>
                <button class="botones" v-on:click="opcionesNumericas">*</button>
                <label class="pantalla">{{ numero }}</label>
                <label class="pantalla">{{ numero }}</label>
                <label class="pantalla">{{ numero }}</label>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numero: "",
            igual: true,
        };
    },
    computed: {
        opcionesNumericas() {
            return (event) => {
                const pantalla = event.target.innerText;
                if (pantalla !== "=" && this.igual) {
                    this.numero += pantalla;
                } else if (pantalla === "=") {
                    console.log('Mostrando el resultado con metodos computados')
                    const resultado = eval(this.numero);
                    this.numero = resultado.toString();
                    this.igual = false
                } else if (this.igual == false) {
                    this.numero = pantalla;
                    this.igual = true;
                }
            };
        },
        borrar() {
            return () => {
                this.numero = "";
            };
        },
    },
};


</script>

<style>
body{
    background-color: rgb(54, 52, 52);
}
h1{
    color: antiquewhite;
}
.container {
    display: flex;
    /*a los elementos internos se les puede manipular de una manera mas sencilla*/
    justify-content: center;
    /*centrar elementos */
    align-items: center;
    /*para alinear al centros */
}

.calculadora {
    display: grid;
    /*para ver los elementos en columna*/
    grid-template-columns: repeat(4, 75px);
    /*cantidad de columnas y con un ancho de 75px*/
    /*grid-template-rows: ;*/
    background-color: rgb(100, 183, 118);
    padding: 20px;
    border-radius: 35px;
    box-shadow: 10px 10px 20px 5px black;
    /*para darle sombreado (horizontalt, verticalt, difuminadot u opacidadt, tamaniot*/
}

.ceroDosColumnas {
    grid-column: span 2;
    /*que ocupa dos espacios*/
    margin: 4px;
    border-radius: 7px;
    background-color: aqua;
    border: 4px solid;
}

.pantalla {
    grid-column: span 4;
    color: aliceblue;
    border-style: solid;
    height: 20px;
    width: 100%;
    border: 4px solid aqua;
    text-align: center;
    color: black;
    background-color: rgb(137, 168, 143);
}

.botones {
    margin: 4px;

    border-radius: 7px;
    border: 4px solid;
    background-color: aqua;

}

.botones:hover {
    background-color: yellow;
}

.ceroDosColumnas:hover {
    background-color: yellow;
}

.cabecera {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: rgb(34, 17, 187);

}
</style>