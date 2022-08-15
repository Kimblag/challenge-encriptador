var mensajeEncriptado = "";
var mensajeDesencriptado = "";

const removerAcentos = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u0301]/g, "");
};

function encriptar() {
  var mensaje = document.getElementById("mensaje").value;
  mensaje = removerAcentos(mensaje);
  if (mensaje.length === 0) {
    alert("Debes ingresar un mensaje");
  } else {
    mensajeEncriptado = mensaje
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    document.getElementById("container-vacio").classList.remove("visible");
    document.getElementById("container-vacio").classList.add("no-visible");
    document.getElementById("container-mensaje").classList.add("visible");
    document.getElementById("mensaje-resultado").innerText = mensajeEncriptado;
  }
}

function desencriptar() {
  var mensaje = document.getElementById("mensaje").value;
  if (mensaje.length === 0) {
    alert("Debes ingresar un mensaje");
  } else {
    mensajeDesencriptado = mensaje
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    document.getElementById("container-vacio").classList.remove("visible");
    document.getElementById("container-vacio").classList.add("no-visible");
    document.getElementById("container-mensaje").classList.add("visible");
    document.getElementById("mensaje-resultado").innerText =
      mensajeDesencriptado;
  }
}

function copiarAlPortapapeles() {
  var mensaje = document.getElementById("mensaje-resultado");
  var mensajeCopiado = navigator.clipboard;

  mensajeCopiado
    .writeText(mensaje.value)
    .then(() => {
      alert("text copied to clipboard");
    })
    .catch((err) => console.error("Algo salio mal", err));
}

var buttonEncriptar = document.getElementById("encriptar");
buttonEncriptar.onclick = encriptar;

var buttonDesencriptar = document.getElementById("desencriptar");
buttonDesencriptar.onclick = desencriptar;

var buttonCopiar = document.getElementById("copiar");
buttonCopiar.onclick = copiarAlPortapapeles;
