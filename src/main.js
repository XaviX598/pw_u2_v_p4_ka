import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css' //para importar estilos externos 

//aqui configuramos el router 
import router from './router/router'

//despues de crear la aplicacion y antes de que se monte hay que usar el metodo use

createApp(App).use(router).mount('#app')
