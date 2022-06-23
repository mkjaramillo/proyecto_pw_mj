console.log("objetos y librerias")
console.log(Vue)

const app=Vue.createApp({
    //vue utiliza representacion declarativa para evaluar/ejecutar
    //template: `
    //<h1> hola mundo desde vue.js</h1>
    //<p>Expresion javaScript</p>
    //<p>{{1+1}}</p>
    //<h2> Arreglo</h2>
    //<p>{{[1,2,3,4,5]}}</p>
    //<h2>Objeto</h2>
    //<p>{{ {nombre:"Milena",apellido:"Jaramillo"} }}</p>
    //<h2>Funcion</h2>
    //<p>{{true ?'activo' : 'inactivo' }}</p>
    //`
    data(){
        return{
            mensaje:'mensaje desde un atributo data',
            mensaje2:'prueba M2'
        }
    }
})
app.mount('#myApp')