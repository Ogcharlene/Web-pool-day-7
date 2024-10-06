const footer = document.querySelector("footer");
const div = footer.firstElementChild;

div.addEventListener("click", function () {

    let message = "";

    while (!message) {
        message = prompt("What's your name ?");
    }

    let confirmation = confirm("are you sure that " + message + " is your name")
    
    if(confirmation){
        alert("Hello " + message + " !")
        div.innerHTML = "Hello " + message + " !"
    }
    
})




