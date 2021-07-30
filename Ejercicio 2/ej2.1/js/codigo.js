const app = new Vue({
    el:'#app',
    data:{
        usuarios:[
            {nombre:'Nombre usuario 1:Andres',apellido:'Apellido usuario 1: Cristancho',registrado:true},
            {nombre:'Nombre usuario 3:Pedro',apellido:'Apellido usuario 2: Jovial',registrado:false},
            {nombre:'Nombre usuario 2:Brayan',apellido:'Apellido usuario 3: Chacon',registrado:true},
            {nombre:'Nombre usuario 4:Daniel',apellido:'Apellido usuario 4: Daniel',registrado:false},
        ]
    },
    methods:{
        registrarUsuario(usuario){
            usuario.registrado = !usuario.registrado
        }
    }
}) 