let palabras = ["Lapiz","Juego","Mesa","Cargador","Portatil"];
let elegirpalabra=Math.floor(Math.random()*palabras.length);
let palabrausada= palabras[elegirpalabra];
const Palabra= document.getElementById('Palabra');
let resultado="";

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }

function intento(){
    const letra = document.getElementById('Adivina').value;
    if(palabrausada.includes(letra)){
        for(i=0;i<palabrausada.length;i++){
            if(palabrausada[i]==letra){
                resultado = resultado.replaceAt(i, letra)
                console.log("resultado[i]", resultado[i])
            }
        }
        Palabra.innerText=resultado;

    }
 };
document.addEventListener("DOMContentLoaded",function()
{          
     
    for (i=0;i<palabrausada.length;i++){
        resultado+= "-";
    }
     Palabra.innerText=resultado;



});




