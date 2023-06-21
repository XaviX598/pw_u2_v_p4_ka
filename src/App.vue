<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- Aqui utilizamos dentro de la pagina el componente es como un elemento html -->
  <!-- cada componente maneja una sesion independiente entre ellos, por lo que al modificar con f12 el otro no cambia -->
  <!-- <Contador titulo="Estudiante" valor2="2"/> estos se transforman en atributos del contador -->
  <!-- <Contador titulo="Profesor" valor2="7"/> 
  <Contador titulo="test titulo" valor2="7"/> -->

  <CalculadoraDeber />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CalculadoraDeber from './components/CalculadoraDeber.vue' //se referencia y se da el nombre del componentepuede ser otro pero es mejor el mismo
export default {
  // lo que esta aqui son los OptionApi
  name: 'App',
  components: {
    // HelloWorld
    // Contador el mismo nombre de arriba al importar
    CalculadoraDeber
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
