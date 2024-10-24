const parejas = ["🐕", "🐕", "🐈‍⬛", "🐈‍⬛", "🐎", "🐎", "🐸", "🐸"];
const girados = [];
let correctas = 0;
parejas.sort(() => Math.random() - 0.5);
document.addEventListener("DOMContentLoaded", function () {
    const bloque = document.getElementById("Bloque");

    parejas.forEach(pareja => {
        const newDiv = document.createElement("div");
        const resultado = document.getElementById("resultado");
        
        newDiv.classList.add("animal");
        newDiv.setAttribute("Icono", pareja);
        newDiv.addEventListener('click', girar);

        bloque.appendChild(newDiv);
    })
    
}
);

function girar() {

    const icono = this.getAttribute("Icono");
    girados.push(icono); 
    this.innerText = icono;

    console.log(girados);
    console.log(correctas);
    if (girados.length === 2) {

        if (girados[0] === girados[1]) {
            correctas++;
            girados.length = 0; 
            if(correctas == 4) {
                resultado.innerText= "Has ganado";
            }
        } else {
            setTimeout(() => {
                const animales = document.querySelectorAll(".animal");
                animales.forEach(animal => {
                    if (animal.innerText === girados[0] || animal.innerText === girados[1]) {
                        animal.innerText = ""; 
                    }
                });

                girados.length = 0; 
               
            }, 1000); 
        }}};

