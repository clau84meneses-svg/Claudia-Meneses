const boton =  document.getElementById("botoncambiar");
const titulo = document.getElementById("titulo");
let contador = 0;
boton.addEventListener("click", function() {
    contador++;
    if(contador === 1) {
    titulo.textContent ="¡¡Bienvenido!!";
} else if (contador === 2) {
    titulo.textContent = "¡¡Espero que disfruten mi página!!";
}else if (contador === 3) {
    titulo.textContent = "¡¡Gracias por visitarla!!";
    contador = 0;
}
});
const botonDisminuir = document.getElementById("disminuir");
const botonNormal = document.getElementById("normal");
const botonAumentar = document.getElementById("aumentar");
const body = document.body;
const textoParrafo = document.querySelectorAll(".texto-pagina");
let tamañoFuente = 16; // Tamaño de fuente inicial en píxeles
botonAumentar.addEventListener("click", function() {
    if (tamanofuente < 24) {
        tamanofuente = tamanofuente + 2;
        textoParrafo.style.fontSize = tamanofuente +"px";
    }
        });
btnonDisminuir.addEventListener("click", function() {
    if(tamanoFuente > 12) {
        tamanoActual = tamanoActual - 2;
        textoParrafo.style.fontSize = tamanoActual + "px";
    }
});
botonNormal.addEventListener("click", function() {
    tamanoActual = 16;
    textoParrafo.style.fontSize = tamanoActual + "px";
  });

