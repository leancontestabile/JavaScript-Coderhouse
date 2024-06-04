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

const valorDolar = 896.25;
const valorEuro = 973.92;
const valorReal = 170.83;
let montoPesos;
let entradaMenu;

montoPesos = solicitarMonto("pesos");

do {
    entradaMenu = parseInt(prompt("Ingrese el numero de la divisa a la que desea convertir\n1 Dolar\n2 Euro\n3 Real\n0 Salir"));
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
        case 0:
            alert("Hasta luego")
            break;
        default:
            alert("Ingrese una opcion valida");
    }
} while (entradaMenu != 0);
