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
    enviarDinero(usuarioDestino, cantidad) {
        let estado;
        let usuarioEncontrado = usuarios.find(u => u.usuario === usuarioDestino);
        if (usuarioEncontrado && cantidad <= this.dinero) {
            this.dinero -= cantidad;
            usuarioEncontrado.dinero += cantidad;
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
        console.log("El usuario ya existe.");
        estado = 0;
    } else {
        let nuevoUsuario = new Usuarios(usuario, contrasena);
        usuarios.push(nuevoUsuario);
        console.log("Usuario registrado:", nuevoUsuario);
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

const h2InicioSesion = document.getElementById("inicioSesion");
const loginForm = document.getElementById("loginForm");
const registroForm = document.getElementById("registroForm");
const botonRegistrarse = document.getElementById("botonRegistrarse");
const botonCerrarSesion = document.getElementById("botonCerrarSesion");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const usuario = document.getElementById("usuarioInput").value;
    const contrasena = document.getElementById("contrasenaInput").value;
    if (iniciarSesion(usuario, contrasena)) {
        loginForm.style.display = "none";
        h2InicioSesion.textContent = `Bienvenido, ${usuario}`;
        botonRegistrarse.classList.add("d-none"); // Ocultar el botón "Registrarse"
        botonCerrarSesion.classList.remove("d-none"); // Mostrar el botón "Cerrar Sesión"
        console.log("Inicio de sesión exitoso");
    } else {
        console.log("Usuario y/o contraseña incorrectos");
    }
});

function iniciarSesion(usuario, contrasena) {
    let usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
    return usuarioEncontrado !== undefined;
}

botonRegistrarse.addEventListener("click", () => {
    loginForm.style.display = "none";
    registroForm.classList.remove("d-none");
    h2InicioSesion.textContent = "Registrarse";
    botonRegistrarse.classList.remove("d-none"); // Muestra el botón "Registrarse"
    botonCerrarSesion.classList.add("d-none"); // Oculta el botón "Cerrar Sesión"
});

botonCerrarSesion.addEventListener("click", () => {
    loginForm.style.display = "block"; // Muestra el formulario de inicio de sesión
    h2InicioSesion.textContent = "Iniciar Sesión";
    botonCerrarSesion.classList.add("d-none"); // Oculta el botón "Cerrar Sesión"
    botonRegistrarse.classList.remove("d-none"); // Muestra el botón "Registrarse"
    document.getElementById("usuarioInput").value = "";
    document.getElementById("contrasenaInput").value = "";
});