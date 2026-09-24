let contador = 0;
const boton = document.getElementById("botoncambiar");
const titulo = document.getElementById("titulo");
if (boton && titulo) {
    boton.addEventListener("click", function() {
        contador = contador + 1;
        if (contador === 1) {
            titulo.textContent = "¡¡Hola Claudia!!";
        } else if (contador === 2) {
            titulo.textContent = "Espero que disfruten la página!!";
        } else if (contador === 3) {
            titulo.textContent = " Gracias por visitarnos!!";
            contador = 0;
    }
 });
}
const botonDisminuir = document.getElementById("disminuir");
const botonNormal = document.getElementById("normal");
const botonAumentar = document.getElementById("aumentar");
 const parrafosRegalos = document.querySelectorAll("#regalos p");

 let tamano= 16;
 if (botonAumentar && parrafosRegalos.length > 0) {
    botonAumentar.addEventListener("click", function() {
        if (tamano < 30) {
            tamano = tamano + 2;
            parrafosRegalos.forEach(p => p.style.fontSize = tamano + "px");
        }
    });
}
if (botonNormal && parrafosRegalos.length >0) {
    botonNormal.addEventListener("click", function() { 
        tamano = 16;
        parrafosRegalos.forEach(p => p.style.fontSize = tamano + "px");
    });
}
if (botonDisminuir && parrafosRegalos.length >0){
    botonDisminuir.addEventListener("click" , function() { 
        if(tamano > 12) {
            tamano = tamano - 2;
            parrafosRegalos.forEach(p => p.style.fontSize = tamano + "px");
        }
    });
}
const botonSubir = document.getElementById("volverArriba");
window.addEventListener("scroll",function() { 
    if (window.scrollY >300) { 
        botonSubir.style.display= "block";
    } else {
        botonSubir.style.display = "none";
    }
});
if (botonSubir) {
    botonSubir.addEventListener("click", function() { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const botonesToggle = document.querySelectorAll('.btn-toggle');
botonesToggle.forEach(boton => {
    boton.addEventListener('click' , function(e) {
        e.preventDefault();
        const infoAdicional = this.previousElementSibling;
       if (infoAdicional && (infoAdicional.style.display === 'none' || infoAdicional.style.display ==='')) {
            infoAdicional.style.display = 'block';
        this.textContent = 'Ver menos';
    } else if (infoAdicional) {
        infoAdicional.style.display = 'none';
        this.textContent = 'Ver más';
    }  
  });
});
const imagen = [
    "fotos/agenda.jpeg",
    "fotos/organizador tipo cartuchera.jpeg",
    "fotos/estuche para anteojos.jpeg",
    "fotos/set de mate.jpeg",
    "fotos/Set dia especial.png"
];
let indiceActual = 0;
const imgElement = document.getElementById("imagen-carrousel");
const btnAnterior = document.getElementById("boton-anterior");
const btnSiguiente = document.getElementById("boton-siguiente");
function mostrarImagen() {
    if(imgElement) {
        imgElement.src = ismagenes[indiceActual];
    }
}
if (btnAnterior) {
    btnAnterior.addEventListener("click", function() {
    indiceActual--;
    if(indiceActual < 0) {
    indiceActual = imagenes.length - 1;
    }
    mostrarImagen();
    }); 
}
if (btnSiguiente) {
    btnSiguiente.addEventListener("click", function() {
        indiceActual++;
        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
    }
    mostrarImagen();
    });
}
mostrarImagen();
