// Funciones nativas / Concatenación

/*

1. Ingresar nombre y apellido del usuario por prompt y consultar si los datos son correctos a través de un confirm.

2. Repetir el ejercicio de operaciones básicas pero ingresando los valores numéricos a través de prompt y mostrando un mensaje con el resultado por alert.

3. Repetir el ejercicio de declarar una variable y asignarle el valor luego, pero a través de prompt. Mostrar el resultado por consola y por alert.

*/

//1
let nombre;
let apellido;
let confirmacion;
nombre = prompt("Ingresar nombre");
apellido = prompt("Ingresar apellido");
confirmacion = confirm(apellido + " " + nombre + " ¿Correcto?");

//2
/*
let primerNumero = prompt("Ingresa el primer numero");
let segundoNumero = prompt("Ingresa el segundo numero");
let suma = Number(primerNumero) + Number(segundoNumero);
let resta = Number(primerNumero) - Number(segundoNumero);
alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
*/

//3
let primerNumero;
let segundoNumero;
let suma;
let resta;
primerNumero = prompt("Ingresa el primer numero");
segundoNumero = prompt("Ingresa el segundo numero");
suma = Number(primerNumero) + Number(segundoNumero);
resta = Number(primerNumero) - Number(segundoNumero);
console.log("El resultado de la suma es: " + suma);
console.log("El resultado de la resta es: " + resta);
alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);