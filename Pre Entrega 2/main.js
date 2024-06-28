class Usuarios {
    constructor(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.dinero = 0;
    }
    ingresarDinero(ingreso) {
        this.dinero += ingreso;
    }
    retirarDinero(retiro) {
        let estado;
        if (retiro <= this.dinero) {
            this.dinero -= retiro;
            estado = 1;
        } else {
            estado = 0;
        }
        return estado;
    }
    enviarDinero(usuario, cantidad) {
        let estado;
        if ((buscar(usuario)) && (cantidad < this.dinero)) {
            this.dinero -= cantidad;
            usuario.dinero += cantidad;
            estado = 1;
        } else {
            estado = 0;
        }
    }
}

let usuarios = [];

function registrar(usuario, contrasena) {
    let estado;
    if (buscar(usuario)) {
        estado = 0;
    } else {
        let nuevoUsuario = new Usuarios(usuario, contrasena);
        usuarios.push(nuevoUsuario);
        estado = 1;
    }
}

function buscar(usuarioBuscado) {
    let usuarioEncontrado = usuarios.some(usuario => usuario.usuario === usuarioBuscado);
    return usuarioEncontrado;
}

function obtener(usuarioBuscado) {
    let usuarioCompleto = usuarios.find(usuario => usuario.usuario === usuarioBuscado);
    return usuarioCompleto;
}

const body = document.getElementsByTagName("body");

let activacionDarkmode;
activacionDarkmode = localStorage.getItem("dark");

if (activacionDarkmode == null) {
    localStorage.setItem("dark", "off");
} else {
    if (activacionDarkmode == "on") {
        body[0].classList.add("bodyDark");
    }
}

const botonDarkmode = document.getElementById("darkmode");

botonDarkmode.addEventListener("click", () => {
    body[0].classList.toggle("bodyDark");
    if (body[0].classList.contains("bodyDark")) {
        localStorage.setItem("dark", "on");
    } else {
        localStorage.setItem("dark", "off");
    }
});

console.log(activacionDarkmode)