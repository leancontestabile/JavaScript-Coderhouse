// Condicionales:

/*

1. Consultar al usuario a través de un confirm si le gusta o no algún deporte. Mostrar un mensaje (a elección) para cada una de las elecciones posibles.

2. Solicitar por prompt al usuario que ingrese un nombre. Si coincide con tu nombre, mostrar un mensaje que diga "Bienvenido". Caso contrario, "Afuera, impostor!".

3. Solicitar dos veces por prompt al usuario que ingrese algún número. Mostrar un mensaje con el resultado de la suma de ambos números.

4. Solicitar al usuario que ingrese un idioma dentro de los disponibles (ESP - Español, ING - Inglés, ALE - Alemán, FRA - Francés). Si elige alguna de las siglas de opciones disponibles, mostrar un mensaje saludando al usuario en ese idioma (Buenos días, Good morning, Guten Tag y Bonjour respectivamente). Caso contrario, mostrar un mensaje mencionando que no sabemos saludar en ese idioma. PISTA: podría ser una buena idea el uso de SWITCH en este caso. Para evitar complicarse mucho, ingresen solamente las letras en mayúsculas (EJ: FRA si quiere Francés).

5. Solicitar usuario y contraseña. Caso que usuario sea "admin" y contraseña sea "adminpass", mostrar un mensaje de éxito. Si no, mostrar un mensaje que diga "Credenciales inválidas".

*/

//1
let deportista;

deportista = confirm("Te gustan los deportes?");

if (deportista == true) {
    console.log("Le gustan los deportes");
} else {
    console.log("No le gustan los deportes");
}

//2
let nombre = "Lean";
let nombreIngresado;

nombreIngresado = prompt("Cual es tu nombre?");

if (nombreIngresado == nombre) {
    console.log("Bienvenido");
} else {
    console.log("Afuera, impostor!");
}

//3
let primerNumero;
let segundoNumero;
let suma;

primerNumero = prompt("Ingrese el primer numero");
segundoNumero = prompt("Ingrese el segundo numero");

suma = Number(primerNumero) + Number(segundoNumero);

console.log("La suma de " + primerNumero + " y " + segundoNumero + " es " + suma);

//4
let idioma;

idioma = prompt("Ingrese un idioma dentro de los disponibles\n(ESP - Español, ING - Inglés, ALE - Alemán, FRA - Francés)")

switch (idioma) {
    case "ESP":
        console.log("Buenos días");
        break;
    case "ING":
        console.log("Good morning");
        break;
    case "ALE":
        console.log("Guten Tag");
        break;
    case "FRA":
        console.log("Bonjour");
        break;
    default:
        console.log("No sabemos saludar en ese idioma");
        break;
}

//5
let usuario = admin;
let contraseña = adminpass;
let usuarioIngresado;
let contraseñaIngresada;

usuarioIngresado = prompt("Ingrese su usuario");
contraseñaIngresada = prompt("Ingrese su contraseña");

if ((usuarioIngresado == usuario) && (contraseñaIngresada == contraseña)) {
    console.log("Bienvenido " + usuario);
} else {
    console.log("Credenciales inválidas");
}