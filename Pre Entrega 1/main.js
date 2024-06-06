function ingresarUsuario(usuarios, contrasenas) {
    let ingresoCorrecto = -1;
    let entradaUsuario;
    let entradaContrasena;
    entradaUsuario = prompt("Ingrese su usuario");
    if (usuarios.includes(entradaUsuario)) {
        entradaContrasena = prompt("Ingrese su contraseña");
        if (entradaContrasena == contrasenas[usuarios.indexOf(entradaUsuario)]) {
            ingresoCorrecto = 0;
        } else {
            ingresoCorrecto = -1;
        }
    } else {
        if (confirm("El usuario no se encuentra registrado, quiere registrarlo?")) {
            usuarios.push(entradaUsuario);
            entradaContrasena = prompt("Ingrese una contraseña");
            contrasenas.push(entradaContrasena);
            ingresoCorrecto = 0;
        } else {
            ingresoCorrecto = -1;
        }
    }
    return ingresoCorrecto;
}

function solicitarMonto(moneda) {
    let monto;
    monto = prompt("Ingrese un monto en " + moneda);
    while (monto <= 0) {
        monto = prompt("Ingrese un monto valido");
    }
    return monto;
}

function convertirPesos(monto, valorMoneda) {
    let conversion;
    conversion = monto / valorMoneda;
    return conversion;
}

function mostrarRedondeado(monto) {
    let montoRedondeado;
    montoRedondeado = monto.toFixed(2);
    alert(montoRedondeado);
}

const usuarios = ["admin", "prueba"];
const contrasenas = ["admin", "abc"];
const valorDolar = 896.25;
const valorEuro = 973.92;
const valorReal = 170.83;
let ingresoUsuario;
let montoPesos;
let entradaMenu;

do {
    ingresoUsuario = ingresarUsuario(usuarios, contrasenas);
} while (ingresoUsuario == -1);

montoPesos = solicitarMonto("pesos");

do {
    entradaMenu = parseInt(prompt("Ingrese el numero de la divisa a la que desea convertir\n1 Dolar\n2 Euro\n3 Real\n4 Cambiar monto\n5 Cambiar usuario\n0 Salir"));
    switch (entradaMenu) {
        case 1:
            mostrarRedondeado(convertirPesos(montoPesos, valorDolar));
            break;
        case 2:
            mostrarRedondeado(convertirPesos(montoPesos, valorEuro));
            break;
        case 3:
            mostrarRedondeado(convertirPesos(montoPesos, valorReal));
            break;
        case 4:
            montoPesos = solicitarMonto("pesos");
            break;
        case 5:
            //cambiar usuario
            break;
        case 0:
            alert("Hasta luego")
            break;
        default:
            alert("Ingrese una opcion valida");
    }
} while (entradaMenu != 0);