/* 
var

    btn = document.getElementById('player'),
    rectangulodegrafico = document.getElementById('rectangulocongrafico'),
    rectangulodeaudio = document.getElementById('rectangulodelaudio')
contador = 0;


function encender() {

    if (contador == 0) {
        rectangulodegrafico.classList.add('encendido');
        rectangulodeaudio.classList.add('encendido')
        contador = 1;


    }
    else {
        rectangulodegrafico.classList.remove('encendido');
        rectangulodeaudio.classList.remove('encendido')
        contador = 0;
    }
}


function openNav() {
    document.getElementById("menu-movil").style.width = "100%"
}

function closeNav() {
    document.getElementById("menu-movil").style.width = "0%"
}



btn.addEventListener('mouseover', encender, true)

 */


const imagenesPromo1 = ["imagenes/promo1.jpg", "imagenes/promo1alt.jpg"];
const imagenesPromo2 = ["imagenes/promo2.jpg", "imagenes/promo2alt.jpg"];
const imagenesPromo3 = ["imagenes/promo3.jpg", "imagenes/promo3alt.jpg"];

let indiceActual1 = 0;
let indiceActual2 = 0;
let indiceActual3 = 0;

const elementoPromo1 = document.getElementById("promo1");
const elementoPromo2 = document.getElementById("promo2");
const elementoPromo3 = document.getElementById("promo3");

function cambiarImagen() {
    indiceActual1 = (indiceActual1 + 1) % imagenesPromo1.length;
    elementoPromo1.src = imagenesPromo1[indiceActual1];


    indiceActual2 = (indiceActual2 + 1) % imagenesPromo2.length;
    elementoPromo2.src = imagenesPromo2[indiceActual2];

    indiceActual3 = (indiceActual3 + 1) % imagenesPromo3.length;
    elementoPromo3.src = imagenesPromo3[indiceActual3];
}

setInterval(cambiarImagen, 20000); // Cambiar imagen cada 20 segundos


document.addEventListener("DOMContentLoaded", function () {
    const programacionBtn = document.getElementById("programacion-btn");
    const programacionAside = document.getElementById("programacion-aside");
    const closeBtn = document.querySelector(".close-btn");

    programacionBtn.addEventListener("click", function () {
        if (programacionAside.classList.contains("hidden")) {
            programacionAside.classList.remove("hidden");
            programacionAside.style.left = "0";
        } else {
            programacionAside.style.left = "-100vw";
            setTimeout(() => {
                programacionAside.classList.add("hidden");
            }, 300); // Tiempo debe coincidir con la transición CSS
        }
    });
    closeBtn.addEventListener("click", function () {
        programacionAside.style.left = "-100%"; setTimeout(() => { programacionAside.classList.add("hidden"); }, 300); // Tiempo debe coincidir con la transición CSS });
    });
});