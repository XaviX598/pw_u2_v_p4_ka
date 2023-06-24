<template>
    <h1>La Caracola Magicaaaaaaaaaa</h1>
    <img v-if="rutaImagen" :src="rutaImagen" alt="No se puede presentar la imagen">
    <!-- vamos a poner un div con las mismas dimensiones que la imagen para darle color y hacer parecer que la imagen tiene esos efectos -->
    <div class="bg-dark">

    </div>
    <div class="container">
        <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
        <p>Recuerda cerrar la pregunta con ?</p>
        <div>
            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pregunta: '',
            respuesta: '',
            rutaImagen: null,

        }
    },
    watch: {
        //debemos declarar con el nombre de una propiedad reactiva como si fuese un metodo, quedaria asi
        //tiene una firma especifica, (value, oldValue)
        pregunta(value, oldValue) {
            console.log(value);
            console.log(oldValue);
            if (value.includes('?')) { //solo si la pregunta incluye ? se imprime
                //console.log('consumir el api')
                setTimeout(() => {
                    this.respuesta = "pensando...";
                    this.consumirAPI()
                }, 1000)
                this.pregunta = " "
            }
        },
    },
    methods: {
        async consumirAPI() { //cuando ponemos un metodo con await debemos poner async si no no compila y da error
            //si consumos una api antes del fetch debe poner un await
            //metodo consumir api es fetch  
            const respuesta = await fetch('https://yesno.wtf/api').then(r => r.json())
            //para desestructurar
            //const {answer, image} = await fetch('https://yesno.wtf/api').then(r=> r.json())
            // console.log(answer)
            // console.log(image)
            //o tambien 

            const { answer, image } = respuesta
            console.log(answer)
            console.log(image)
            this.respuesta = answer;
            this.rutaImagen = image
        }
    }
};
</script>

<style>
img,
.bg-dark {
    left: 0px;
    /*para que se ponga totalmente a la izquierda*/
    /* para que ocupe todo el ancho de la pagina  */
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    /* para que inicie desde el tope */
    top: 0px;
    /* para que pueda copar todo el ancho y todo el alto hace falta esto  */
    height: 100vh;
    width: 100vw;

}

/* darle un esquema oscuro solo al div */
.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.container {
    position: relative;
    /*para el contenedor se ponga encima se todo*/
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

p,
h1,
h2 {
    color: aliceblue;
}

p {
    font-size: 20px;
    margin-top: 0px;
}
</style>