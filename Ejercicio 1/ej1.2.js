let numero = prompt("Dime un numero entero : ");
numero = parseInt(numero);

if ( numero > 1 ){
    document.write("El numero es  mayor que uno");
}else if ( numero < 1 ){
    document.write("El numero es menor que uno");
}else{
    document.write("El numero es igual a uno")
}