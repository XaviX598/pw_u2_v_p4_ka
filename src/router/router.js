// aqui configuramos el router que es general para toda la app y las rutas de la aplicacion

// para configurar el router debemos usar 2 metodos de la libreria de router
import {createRouter, createWebHashHistory} from 'vue-router' //'vue/router' este es un objeto que tiene atributos y metodos, usamos solo 2 metodos
//ahora importamos las paginas
// import BienvenidaPage from '../modules/pokemon/pages/BienvenidaPage.vue'
// import JuegoPage from '../modules/pokemon/pages/JuegoPage.vue'
// import PremiosPage from '../modules/pokemon/pages/PremiosPage.vue'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage.vue'
// import PokemonSalirPage from '../modules/pokemon/pages/PokemonSalirPage.vue'
// import NoEncontradoPage from '../modules/pokemon/pages/NoEncontradoPage.vue'
//definicion de las rutas
const routes = [
    //el objeto tiene 2 atributos
    {path: '/', //aqui ponemos la ruta 
    component: () => import('../modules/pokemon/pages/BienvenidaPage.vue')}, // como valor del component ponemos la pagina para carga perezosa se hace asi, solo si es necesario se muestra
    {path: '/juego', 
    component: () => import('../modules/pokemon/pages/JuegoPage.vue')}, 
    {path: '/premio', 
    component: () => import('../modules/pokemon/pages/PremiosPage.vue')},
    {path: '/pokemon', 
    component: () => import('../modules/pokemon/pages/PokemonPage.vue')},
    {path: '/pokemon/salir', 
    component: () => import('../modules/pokemon/pages/NoEncontradoPage.vue')},
    //debemos encontrar un bulcard que si no es una de las paginas configuradas o definidas debemos mostrar el no encontrada
    {path: '/:pathMatch(.*)*', 
    component: () => import('../modules/pokemon/pages/JuegoPage.vue')}
]
//createRouter es un metodo y por eso se hace asi, y recibe un objeto
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router //exportamos el router