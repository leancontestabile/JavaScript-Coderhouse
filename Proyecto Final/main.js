class Usuarios {
    constructor(usuario, contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.dinero = 0;
    }
    ingresarDinero(ingreso) {
        this.dinero += parseInt(ingreso);
    }
    retirarDinero(retiro) {
        let estado;
        if (parseInt(retiro) <= this.dinero) {
            this.dinero -= parseInt(retiro);
            estado = true;
        } else {
            estado = false;
        }
        return estado;
    }
    enviarDinero(usuarioDestino, cantidad, usuariosRegistrados) {
        let estado = false;
        let usuarioEncontrado = usuariosRegistrados.find(u => u.usuario === usuarioDestino);
        if (usuarioEncontrado && parseInt(cantidad) <= this.dinero) {
            this.dinero -= parseInt(cantidad);
            usuarioEncontrado.dinero += parseInt(cantidad);
            estado = true;
        } else {
            estado = false;
        }
        return estado;
    }
}

let usuarios = [];

let usuarioPrueba = new Usuarios("admin", "admin");
usuarios.push(usuarioPrueba);

function registrar(usuario, contrasena) {
    let estado;
    if (buscar(usuario)) {
        estado = false;
    } else {
        let nuevoUsuario = new Usuarios(usuario, contrasena);
        usuarios.push(nuevoUsuario);
        estado = true;
    }
    return estado;
}

function iniciarSesion(usuario, contrasena) {
    let usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);
    return usuarioEncontrado !== undefined;
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
const cantidadDinero = document.getElementById("dinero");

let activacionDarkmode = localStorage.getItem("dark");

if (activacionDarkmode == null) {
    localStorage.setItem("dark", "off");
} else {
    if (activacionDarkmode == "on") {
        body[0].classList.add("bodyDark");
        inicioSesion.classList.add("inicioDark");
        cantidadDinero.classList.add("inicioDark");
    }
}

const botonDarkmode = document.getElementById("darkmode");

botonDarkmode.addEventListener("click", () => {
    body[0].classList.toggle("bodyDark");
    inicioSesion.classList.toggle("inicioDark");
    cantidadDinero.classList.toggle("inicioDark");
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
const interfazPrincipal = document.getElementById("principal");

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const usuario = document.getElementById("usuarioInput").value;
    const contrasena = document.getElementById("contrasenaInput").value;
    try {
        if (iniciarSesion(usuario, contrasena)) {
            let usuarioIngresado = obtener(usuario);
            const dineroUsuario = document.getElementById("dinero");
            dineroUsuario.textContent = `$${usuarioIngresado.dinero}`;
            loginForm.style.display = "none";
            h2InicioSesion.textContent = `Bienvenido, ${usuario}`;
            interfazPrincipal.classList.remove("d-none");
            botonRegistrarse.classList.add("d-none");
            botonCerrarSesion.classList.remove("d-none");
        } else {
            throw new Error("Usuario y/o contraseña incorrectos");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});

registroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nuevoUsuario = document.getElementById("nuevoUsuarioInput");
    const nuevaContrasena = document.getElementById("nuevaContrasenaInput");

    try {
        if (registrar(nuevoUsuario.value, nuevaContrasena.value)) {
            registroForm.classList.add("d-none");
            h2InicioSesion.textContent = "Iniciar Sesión";
            loginForm.style.display = "block";
            alert("Registro exitoso");
        } else {
            throw new Error("Registro inválido, ingrese otro nombre de usuario");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});


botonRegistrarse.addEventListener("click", () => {
    loginForm.style.display = "none";
    registroForm.classList.remove("d-none");
    h2InicioSesion.textContent = "Registrarse";
    botonRegistrarse.classList.remove("d-none");
    botonCerrarSesion.classList.add("d-none");
});

botonCerrarSesion.addEventListener("click", () => {
    interfazPrincipal.classList.add("d-none");
    loginForm.style.display = "block";
    h2InicioSesion.textContent = "Iniciar Sesión";
    botonCerrarSesion.classList.add("d-none");
    botonRegistrarse.classList.remove("d-none");
    document.getElementById("usuarioInput").value = "";
    document.getElementById("contrasenaInput").value = "";
});

document.getElementById('botonIngresarDinero').addEventListener('click', function () {
    const usuario = document.getElementById("usuarioInput").value;
    let usuarioIngresado = obtener(usuario);
    let dineroIngresado = document.getElementById('dineroModificar').value;
    usuarioIngresado.ingresarDinero(dineroIngresado);
    const dineroUsuario = document.getElementById("dinero");
    dineroUsuario.textContent = `$${usuarioIngresado.dinero}`;
});

document.getElementById('botonRetirarDinero').addEventListener('click', function () {
    const usuario = document.getElementById("usuarioInput").value;
    let usuarioIngresado = obtener(usuario);
    let dineroIngresado = document.getElementById('dineroModificar').value;
    try {
        if (usuarioIngresado.retirarDinero(dineroIngresado)) {
            const dineroUsuario = document.getElementById("dinero");
            dineroUsuario.textContent = `$${usuarioIngresado.dinero}`;
        } else {
            throw new Error("No se pudo retirar dinero");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});


document.getElementById('botonEnviarDinero').addEventListener('click', function () {
    const usuario = document.getElementById("usuarioInput").value;
    const usuarioIngresado = obtener(usuario);
    const usuarioDestino = document.getElementById("destinatarioDinero").value;
    const cantidad = parseInt(document.getElementById('dineroModificar').value);

    try {
        if (!usuarioIngresado) {
            throw new Error("Usuario no encontrado.");
        }

        if (!usuarioDestino) {
            throw new Error("Destinatario no especificado.");
        }

        if (isNaN(cantidad) || cantidad <= 0 || cantidad > usuarioIngresado.dinero) {
            throw new Error("Cantidad inválida o insuficiente.");
        }

        if (usuarioIngresado.enviarDinero(usuarioDestino, cantidad, usuarios)) {
            document.getElementById("dinero").textContent = `$${usuarioIngresado.dinero}`;
            document.getElementById("dineroModificar").value = "";
            document.getElementById("destinatarioDinero").value = "";
        } else {
            throw new Error("Error al enviar dinero.");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
});