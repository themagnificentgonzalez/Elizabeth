var hamburger = document.getElementById("hamburger")
var hamburgerButton = document.getElementById("hamburgerButton")
var header = document.getElementsByTagName(header)[0]
var fecha = document.getElementById("fecha")

hamburgerButton.addEventListener("click", abrir)
hamburgerButton.addEventListener("click", fechar)
function abrir() {
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "column"
    hamburger.style.display = "flex" //sai do display none
    hamburgerButton.style.display = "none"
}

function fechar() {
    header.style.display = "flex"
    header.style.flexWrap = "nowrap"
    header.style.flexFlow = "row"
    hamburger.style.display = "none" //sai do display none
    hamburgerButton.style.display = "flex"
    // poderia ser feito um encerrar a função abrir, como num "not abrir" ou um toggle
}