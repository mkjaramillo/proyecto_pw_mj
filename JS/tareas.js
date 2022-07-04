const lista = [
]
const app = Vue.createApp({
    //options API
    data() {
        return {
            lista:lista,
            tarea:'',
            
            
        }
    },
    methods: {
        
        agregarTarea(){
           
            this.lista.push({nombre:this.mensaje,apellido:this.mensaje1,edad:this.mensaje2})
            this.tarea=''
           
        },
       
        agregarEnter(){
            //ejemplo de modificadores de eventos
            console.log('Entro al evento')
            this.lista.push({tarea:this.tarea})
            this.tarea=''
            
        }
    }
})
app.mount('#myApp')