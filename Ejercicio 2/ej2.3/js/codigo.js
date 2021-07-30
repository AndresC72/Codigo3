const app = new Vue({
    el:'#main',
    data:{
        usuario:null,
        usuarios:[
            {nombre:'Nombre usuario 1:andres',apellido:'Apellido usuario 1: Cristancho',email:'Correo usuario 1: ejemplo1@ejemplo.com',telefono: '555-555-555',registrado:false},
            {nombre:'Nombre usuario 2:pedro',apellido:'Apellido usuario 2: Jovial',email:'Correo usuario 2: ejemplo2@ejemplo.com',telefono: '555-515-515',registrado:false},
            {nombre:'Nombre usuario 3:brayan',apellido:'Apellido usuario 3: Chacon',email:'Correo usuario 3: ejemplo3@ejemplo.com',telefono: '155-555-155',registrado:false},
            {nombre:'Nombre usuario 4:daniel',apellido:'Apellido usuario 4: Castillo',email:'Correo usuario 4: ejemplo4@ejemplo.com',telefono: '551-515-551',registrado:false}, 
        ]
    },
    
    methods:{
        agregarTarea(){
            this.usuarios.unshift(items= {nombre:this.usuario, registrado:false})
        },
        completarTarea(usuario){
            usuario.registrado = !usuario.registrado
        }
    },
    computed:{
        mostrarCompletadas(){
            return this.usuarios.filter(item => item.registrado)
        },
        mostrarNombre(){
            return 'Andres'
        },
        mostrarPorTitulo(){
            return this.usuarios.filter(item => item.nombre.includes(this.usuario))
        }
    },
    

}) 