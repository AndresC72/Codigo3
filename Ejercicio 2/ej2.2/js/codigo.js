const app = new Vue({
    el:'#app',
    data:{
        usuarios:[
            {nombre:'Nombre usuario 1:Andres',apellido:'Apellido usuario 1: Cristancho',email:'Correo usuario 1: ejemplo1@ejemplo.com',telefono: '555-555-555',registrado:true},
            {nombre:'Nombre usuario 3:Pedro',apellido:'Apellido usuario 2: Jovial',email:'Correo usuario 2: ejemplo2@ejemplo.com',telefono: '555-515-515',registrado:false},
            {nombre:'Nombre usuario 2:Brayan',apellido:'Apellido usuario 3: Chacon',email:'Correo usuario 3: ejemplo3@ejemplo.com',telefono: '155-555-155',registrado:true},
            {nombre:'Nombre usuario 4:Daniel',apellido:'Apellido usuario 4: Castillo',email:'Correo usuario 4: ejemplo4@ejemplo.com',telefono: '551-515-551',registrado:false},
        ]
    },
    methods:{
        registrarUsuario(usuario){
            usuario.registrado = !usuario.registrado
        }
    }
}) 