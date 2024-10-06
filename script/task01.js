const footer = document.querySelector("footer"); // pour selectionner le footer dans lequel se trouve le block blanc
const div = footer.firstElementChild; // pr selectionner le 1er élément de footer = la div pour la stocker dans une const

let clickCount = 0;

div.addEventListener("click", function () {
    // click qui est à 0, prend +1 à chaque click
    div.innerHTML = clickCount++  // ajoute la variable "clickCount" dans le fichier HTML 
})


