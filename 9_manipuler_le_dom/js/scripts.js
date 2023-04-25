// Manipuler le DOM (partie 1)

//Aller chercher un/des éléments dans le document
let baliseH2 = document.querySelectorAll("h2");

let baliseLi = document.querySelector("li:nth-child(2)");

let classeRow = document.querySelectorAll(".row");

let titre2 = document.querySelector("#titre2");

for(let row of classeRow){
    row.style.color="red";
}




