const app=Vue.createApp({
    //options API
data(){
    return{
        mensaje:'hola mundo',
        mensaje1:'mi primer mensaje'
    }
},
methods:{
    cambiarMensaje(event){
        console.log(event)
        this.mensaje="texto cambiado"
    },
    cambiarMensajeMayuscula(){
        this.mensaje1=this.mensaje1.toUpperCase()
    },
    cambiarTodo(){
        this.cambiarMensaje()
        this.cambiarMensajeMayuscula()
    }

}
})
app.mount('#myApp')