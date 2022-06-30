const lista = [
    { nombre: 'Jorge', apellido: 'Aguilar', edad: 45 ,profesion:'Abogado',materia:'Derecho penal'},
    { nombre: 'Juan', apellido: 'Rodriguéz', edad: 34 ,profesion:'Doctor',materia:'Anatomia'},
    { nombre: 'Sandra', apellido: 'Carvajal', edad: 37 ,profesion:'Ingeniero',materia:'algebra'},
    { nombre: 'Jennifer', apellido: 'Aro', edad: 30 ,profesion:'Arquitecto',materia:'Dibujo técnico'},
    { nombre: 'Fabiana', apellido: 'Jaramillo', edad: 33 ,profesion:'Biólogo',materia:'botánica'},
    
]
const app = Vue.createApp({
    //options API
    data() {
        return {
            lista:lista
        }
    },
    methods: {
        agregarProfesor(){
            this.lista.unshift(  { nombre: 'Jaime', apellido: 'Salvador', edad: 45 ,profesion:'Programador',materia:'Programación 1'})
        }
    }
})
app.mount('#myApp')