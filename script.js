const boton = document.getElementById("botoncambiar");
const titulo =  document.getElementById("titulo");
let contador = 0;
boton.addEventListener("click", funcion () {
  contador ++;  
    if (contador ===1) {
        titulo.textContent "¡¡Bienvenidos!!";
    } else if(contador===2) { 
titulo.textContent = "¡Espero que disfruten mi pagina!";
        } else if(contador===3) { 
titulo.textContent = "Gracias por visitarla!";
        }
 }); 
 