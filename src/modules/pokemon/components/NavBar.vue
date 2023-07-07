<template>
    <div class="router">
        <!-- para poder navegar usamos el elemento routerlink y no href sino to -->
        <router-link to="/">Bienvenida</router-link>
        <router-link to="/juego">Juego</router-link>
        <router-link to="/premio">Premios</router-link>
        <router-link to="/pokemon">JuegoPokemon</router-link>
        <router-link to="/pokemon/salir">Salir</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #c15050;
    margin: 0 10px;
    font-size: 20px;
}

a:hover{
    color: #5d40a5;
}

.router{
    margin-top: -30px;
    margin-bottom: 20px;
}

</style>