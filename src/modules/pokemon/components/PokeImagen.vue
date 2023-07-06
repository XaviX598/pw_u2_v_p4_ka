<template>
    <div class="contenedorImg">
        <img class="ocultaPokemon" :src="imagenFuente" alt="No se puede mostrar imagen">
        <img v-if="muestraPokemon" :src="imagenFuente" alt="No se puede mostrar imagen">
    </div>
</template>

<script>
export default {
    computed: {
        imagenFuente() {
            //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.pokemonId + ".svg"
            //se puede usar el backtips que es ` y sirve para no tener que concatenar
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    },

    props: {
        pokemonId: {
            type: Number,
            required: true //para indicar que si es requerido, este props es el que envia el numero para mostrar la imagen correcta
        },
        muestraPokemon:{
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
/* si queremos que los estilos apliquen solo a estos componentes */
.ocultaPokemon {
    filter: brightness(0);
}

img {
    /* permite que las dos imagenes esten en una misma posicion */
    position: absolute;
    height: 300px;
    /* left: 35%; */
}

.contenedorImg {
    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>