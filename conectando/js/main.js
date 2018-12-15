let saludo = document.getElementById('saludo')

let botonModifica = document.getElementById('modifica')

botonModifica.addEventListener("click",modificaP)



function modificaP() {
    saludo.innerText += ' Mundo';
    saludo.innerHTML += ` <b> Cruel</b>`;
}
