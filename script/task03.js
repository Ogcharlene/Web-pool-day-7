const footer = document.querySelector("footer");
const div = footer.firstElementChild;

let caracters = ""; // str pour stocker les keydown

document.addEventListener("keydown", function (event) { // dans la page il faut qu'on detect keydown
    caracters = caracters + (event.key) // event est mon parametre de mon eventListener

    if (caracters.length < 42) {
        div.innerHTML = caracters
    }
})