let palabras = ["LAPIZ", "JUEGO", "MESA", "CARGADOR", "PORTATIL"];
let elegirpalabra = Math.floor(Math.random() * palabras.length);
let palabrausada = palabras[elegirpalabra];
const Palabra = document.getElementById('Palabra');
const cabeza = document.getElementById('cabeza');
const manoiz = document.getElementById('manoiz');
const manode = document.getElementById('manode');
const cuerpo = document.getElementById('cuerpo');
const pieiz = document.getElementById('pataiz');
const piede = document.getElementById('patade');
const Resultadop = document.getElementById("Resultadop")
let resultado = "";
let fallo = 0;

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function intento() {
    const letra = document.getElementById('Adivina').value;
    const letraM = letra.toUpperCase(); 
    if (palabrausada.includes(letraM)) {
        for (i = 0; i < palabrausada.length; i++) {
            if (palabrausada[i] == letraM) {
                resultado = resultado.replaceAt(i, letraM); // Actualizamos la cadena resultado
                console.log("resultado[i]", resultado[i])
            }
        }
        Palabra.innerText = resultado;
        if (palabrausada==resultado){
            Resultadop.innerText = "Has ganado felicidades 🥳 "

        }
    } else {
        fallo++;
        switch (fallo) {
            case 1:
                cabeza.style.border = "red solid";
                break;
            case 2:
                cuerpo.style.border = "red solid";
                break;
            case 3:
                manoiz.style.border = "red solid";
                break;
            case 4:
                manode.style.border = "red solid";
                break;
            case 5:
                pieiz.style.border = "red solid";
                break;
            case 6:
                piede.style.border = "red solid";
                break;
            case 7:
                Resultadop.innerText = "Has perdido la palabra era "+palabrausada
                break;
            default:
                break;
        }
    }
};
document.addEventListener("DOMContentLoaded", function () {

    for (i = 0; i < palabrausada.length; i++) {
        resultado += "-";
    }
    Palabra.innerText = resultado;



});




