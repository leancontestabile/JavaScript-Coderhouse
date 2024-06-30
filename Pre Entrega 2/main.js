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

let usuarioPrueba = new Usuarios("Admin", "Admin");
usuarios.push(usuarioPrueba);

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
const inicioSesion = document.getElementById("inicioSesion");

let activacionDarkmode;
activacionDarkmode = localStorage.getItem("dark");

if (activacionDarkmode == null) {
    localStorage.setItem("dark", "off");
} else {
    if (activacionDarkmode == "on") {
        body[0].classList.add("bodyDark");
        inicioSesion.classList.add("inicioDark");
    }
}

const botonDarkmode = document.getElementById("darkmode");

botonDarkmode.addEventListener("click", () => {
    body[0].classList.toggle("bodyDark");
    inicioSesion.classList.toggle("inicioDark");
    if (body[0].classList.contains("bodyDark")) {
        localStorage.setItem("dark", "on");
    } else {
        localStorage.setItem("dark", "off");
    }
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    const usuario = document.getElementById("usuarioInput").value;
    const contrasena = document.getElementById("contrasenaInput").value;
    const h2InicioSesion = document.getElementById("inicioSesion");
    const botonRegistrarse = document.getElementById("botonDerecho");
    if (iniciarSesion(usuario, contrasena)) {
        loginForm.remove();
        h2InicioSesion.textContent = `Bienvenido, ${usuario}`;
        botonRegistrarse.textContent = "Cerrar Sesion";
        console.log("Inicio de sesión exitoso");
    } else {
        console.log("Usuario y/o contraseña incorrectos");
    }
});

function iniciarSesion(usuario, contrasena) {
    let usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
    return usuarioEncontrado !== undefined;
}
