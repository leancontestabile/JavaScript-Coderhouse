// Ciclos

/*

1. Solicitar al usuario por prompt un número y mostrar la tabla de ese número (todos los múltiplos de 1 a 10. Ejemplo: si ingreso 3, mostraríamos 3, 6, 9, etc.). Tarea BONUS: validar previamente que el número ingresado se encuentre entre 0 y 9 (opcional).

2. Solicitar al usuario que ingrese el número mágico con solo 3 intentos para adivinarlo. En cada intento, además de solicitar el número hay que avisarle al usuario la cantidad de intentos restantes. Para tomar un número al azar (entre 0 y 9), van a copiar la siguiente línea de código:

const numeroMagico = parseInt(Math.random() * 10);

3. Realizar la misma tarea del punto 2 pero sin límites de intento para el usuario. (OJO: no utilizar un ciclo for con 90000 iteraciones ni break porque no es la idea).

4. Realizar la misma tarea del punto 3 pero esta vez dándole información al usuario en cada intento. Ejemplo: si el número mágico es 3 y el usuario ingresa 6, avisarle que su número es mayor al número mágico. Tarea BONUS: si quieren probar con rangos mayores de números, cambien el 10 que multiplica a Math.random() por un número mayor.

*/

//1

let numeroIngresado;

do {
    numeroIngresado = prompt("Ingrese un numero del 0 al 9");
} while ((numeroIngresado < 0) && (numeroIngresado > 10));

//como se hacen los multiplos?

//2
/*
const numeroMagico = parseInt(Math.random() * 10);
let intentos = 3;
let numeroIntentado;

do {
    numeroIntentado = prompt("Ingrese un numero del 0 al 9\n" + "Intentos restantes: " + intentos);
    intentos--;
} while ((intentos > 0) && (numeroMagico != numeroIntentado));

if (numeroMagico == numeroIntentado) {
    alert("Ganaste");
} else {
    alert("Te quedaste sin intentos");
}
*/

//3
/*
const numeroMagico = parseInt(Math.random() * 10);
let numeroIntentado;

do {
    numeroIntentado = prompt("Ingrese un numero del 0 al 9\n" + "Intentos restantes: " + intentos);
} while (numeroMagico != numeroIntentado);

if (numeroMagico == numeroIntentado) {
    alert("Ganaste");
}
*/

//4
const numeroMagico = parseInt(Math.random() * 100);
let numeroIntentado;

console.log("El numero magico es: " + numeroMagico);

do {
    numeroIntentado = prompt("Ingrese un numero del 0 al 99");
    if (numeroIntentado > numeroMagico) {
        alert("Su numero es mayor al numero magico");
    }
    if (numeroIntentado < numeroMagico) {
        alert("Su numero es menor al numero magico");
    }
} while (numeroMagico != numeroIntentado);

if (numeroMagico == numeroIntentado) {
    alert("Ganaste");
}
