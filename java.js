let miImagenes = document.querySelector("#imagenescasinos");
let btI=document.getElementById("izquierdaboto")
let btD=document.getElementById("derechaboto")


let imagenes = ["Img/casino img 1.jpg", "Img/casino img 2.jpg", "Img/casino img 3.jpg"];
  let index = 0; // empieza en la primera imagen

  function mostrarImagen() {
    miImagenes.setAttribute("src", imagenes[index]);
  }

  btD.onclick = function() { // botón derecha (siguiente)
    index = (index + 1) % imagenes.length; // avanza y vuelve al inicio
    mostrarImagen();
  };

  btI.onclick = function() { // botón izquierda (anterior)
    index = (index - 1 + imagenes.length) % imagenes.length; // retrocede y vuelve al final
    mostrarImagen();}
