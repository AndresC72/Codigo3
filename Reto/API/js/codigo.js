
const app = new Vue({
    el:'#app',
    data:{
        usuario:null,
        usuarios:[]
    },
    mounted(){
        axios.get('https://unique-elkd.static.app/users.json')
             .then( (respuesta = T)=>{
                /* console.log(respuesta.data) */
                this.usuarios = respuesta.data
             })
    },

    methods:{
        completarTarea(usuario){
            usuario.registrado = !usuario.registrado
        }
    },
    computed:{
        mostrarCompletadas(){
            return this.usuarios.filter(item => item.registrado)
        },
       
    },
         

}) 


