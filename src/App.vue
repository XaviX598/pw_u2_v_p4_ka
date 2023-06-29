<template>
  <PokemonPage/>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import CalculadoraDeber from './components/CalculadoraDeber.vue' //se referencia y se da el nombre del componentepuede ser otro pero es mejor el mismo
import PokemonPage from './modules/pokemon/pages/PokemonPage.vue'
export default {
  // lo que esta aqui son los OptionApi
  name: 'App',
  components: {
    // HelloWorld
    // Contador el mismo nombre de arriba al importar
    // CalculadoraDeber
    // CaracolaMagica
    // MiIdea
    PokemonPage
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
