
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
            lista:lista,
            mensaje:'',
            mensaje1:'',
            mensaje2:''
        }
    },
    methods: {
        agregarEstudianteI(){
            this.lista.unshift({nombre:this.mensaje,apellido:'Incio',edad:26})
            this.mensaje=''
        },
        agregarEstudianteF(){
            this.lista.push({nombre:this.mensaje,apellido:'Fin',edad:26})
            this.mensaje=''
        },
        agregarEstudiante(tipo){
            if(tipo==='I'){
                this.lista.unshift({nombre:this.mensaje,apellido:this.mensaje1,edad:this.mensaje2})
                
            }else{
                this.lista.push({nombre:this.mensaje,apellido:this.mensaje1,edad:this.mensaje2})
               
            }
            this.mensaje=''
            this.mensaje1=''
            this.mensaje2=''
        },
        eventoKey(event){
            if(event.charCode===13){
                console.log('se dispara el evento')
                console.log(event)
                this.lista.unshift({nombre:this.mensaje,apellido:'Troya',edad:26})
            }
         
        },
        eventoKeyD({charCode,key}){
            //evento desestructurado
           console.log('Entro al evento')
            if(charCode===13){
                console.log('se dispara el evento')
                this.lista.unshift({nombre:this.mensaje,apellido:'Troya',edad:26})
            }
         
        },
        eventoFinal(){
            //ejemplo de modificadores de eventos
            console.log('Entro al evento')
            this.lista.unshift({nombre:this.mensaje,apellido:this.mensaje1,edad:this.mensaje2})
            this.mensaje=''
            this.mensaje1=''
            this.mensaje2=''
        }
    }
})
app.mount('#myApp')