<template>
    <h1>La Caracola Magicaaaaaaaaaa</h1>
    <img src="https://via.placeholder.com/250" alt="No se puede presentar la imagen">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda dar enter al terminar</p>
    <div>
        <h2>Voy a pasar de año?</h2>
        <h1>SI,NO</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pregunta: 'Hola mundo'
        }
    }
}
</script>

<style></style>