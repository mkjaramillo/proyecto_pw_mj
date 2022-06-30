const lista = [
    { nombre: 'Milena', apellido: 'Jaramillo', edad: 22 },
    { nombre: 'Katherine', apellido: 'Basantes', edad: 21 },
    { nombre: 'Dallyana', apellido: 'Vanegas', edad: 24 },
    { nombre: 'Leonardo', apellido: 'Salinas', edad: 25 },
    { nombre: 'Fabiana', apellido: 'Jaramillo', edad: 26 },
    { nombre: 'Carlos', apellido: 'Muñoz', edad: 20 }
]
const app = Vue.createApp({
    //options API
    data() {
        return {
            lista:lista
        }
    },
    methods: {
        agregarEstudiante(){
            this.lista.unshift({nombre:'Robeth',apellido:'Troya',edad:26})
        }
    }
})
app.mount('#myApp')