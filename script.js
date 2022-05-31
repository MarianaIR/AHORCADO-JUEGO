// Botones 
var botonIniciar = document.querySelector("#boton-iniciar");
var agregarPalabra = document.querySelector("#agregar-palabra");
var guardar = document.querySelector("#guardar");
var cancelar = document.querySelector("#cancelar");
var nuevoJuego = document.querySelector("#nuevo-juego");
var desistir = document.querySelector("#desistir");

// Sec. juego
var inicio = document.querySelector("#inicio");
var aPalabra = document.querySelector("#a-palabra");
var juego = document.querySelector("#juego");
var footer = document.querySelector("footer");

var listaDePalabras = [
  "ORACLE",
  "ALURA",
  "JAVA",
  "HTML",
  "CSS",
  "GITHUB",
];

var palabra = document.querySelector("#palabra");
var letra = document.querySelector("#letra");
var tablero = document.querySelector("canvas");
var pincel = ahorcado.getContext("2d");
var contador = 0;
var flag = false;
var palabraJuego;
var contadorLetraError = 0;
var listadoLetras = [];
var palabraEnJuego = [];
var esGanador = false;

botonIniciar.addEventListener("click", () => {
    inicio.classList.add("invisible");
    juego.classList.remove("invisible");
    footer.classList.add("footer");
    empezarJuego();
    flag = true;
  });

  agregarPalabra.addEventListener("click", () => {
    inicio.classList.add("invisible");
    aPalabra.classList.remove("invisible");
    flag = false;
  });
  
  guardar.addEventListener("click", () => {

    if(!(palabra.value.length > 8)) {
        if(validarPalabra(palabra.value.toUpperCase())) {
          listaDePalabras.push(palabra.value.toUpperCase());
          aPalabra.classList.add("invisible");
          juego.classList.remove("invisible");
          footer.classList.add("footer");
          empezarJuego();
          flag = true;
        }
      } else {
        swal("¡Palabra extensa!", `La palabra debe tener maximo 8 letras y tiene ${palabra.value.length} letras.`, "warning");
      }
    });
    
    cancelar.addEventListener("click", () => {
      aPalabra.classList.add("invisible");
      inicio.classList.remove("invisible");
      footer.classList.remove("footer");
      flag = false;
    });
    
    desistir.addEventListener("click", () => {
      juego.classList.add("invisible");
      inicio.classList.remove("invisible");
      footer.classList.remove("footer");
      esGanador = false;
      flag = false;
    });
    
   nuevoJuego.addEventListener("click", () => {
      empezarJuego();
      flag = true;
    });
    
    window.addEventListener("keydown", (element) => {
      if (flag && validarLetra(element.key) && contador < 9) {
        if (!listadoLetras.includes(element.key.toUpperCase())) {
          listadoLetras.push(element.key.toUpperCase());
          if(!dibujarLetra(element.key.toUpperCase())){
              crearMuneco(contador);
              contador++;
          }
        } else {
          swal("¡LETRA REPETIDA!", `Ha ingresado "${element.key.toUpperCase()}" nuevamente`, "warning");
        }
      } else if (contador >= 9) {
        dibujarPerdedor();
        swal("¡PERDISTE!", `La palabra era "${palabraJuego.join("")}"  , dale a nuevo juego si quieres volver a jugar.`, "info");
      } else if (esGanador) {
        swal("¡Has ganado!", "Dale a nuevo juego si quieres volver a jugar.", "success");
      }
    });


    