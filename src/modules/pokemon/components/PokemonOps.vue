<template>
    <div class="contenedorOps">
        
            <!-- <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li> -->
            <!-- para mandar el evento hacia el padre se pone $emit, se le bautiza con un nombre que debe ir en el padre como evento y luego se puede poner argumentos -->
            <li @click="$emit('seleccionado',pokemon.id)" v-for="pokemon in opciones" :key="pokemon.id"> {{ pokemon.nombre.toUpperCase() }}</li>
        
    </div>
</template>

<script>
export default {
    props: {
        opciones: {
            type: Array,
            required: true
        }
    }, 
    methods: {
        pruebaDeEvento(){
            console.log('probando evento dentro de ops')
        }
    }

}
</script>

<style scoped>


li {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #c15050;
    color: #bbdede;
    margin-bottom: 10px;
    width: 250px;
    /* height: 25px; */
    font-size: large;
    font-weight: bold;
    text-align: center;
    padding: 3px;
    /* justify-content: center;
    align-items: center; */
    list-style-type: none;
    cursor: pointer;
}

li:hover {
    /* background-color: rgb(80, 103, 120); */
    background:  #381f72;
    background: radial-gradient(circle, #381f72 1%, rgba(2, 0, 36, 1) 49%,  #381f72 96%);
}

.contenedorOps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 45px;
}
</style>