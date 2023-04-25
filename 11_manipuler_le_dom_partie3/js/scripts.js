// Manipuler le DOM (partie 1)

// Aller chercher un/des éléments dans le document
// let baliseH2 = document.querySelectorAll("h2");

// let baliseLi = document.querySelector("li:nth-child(2)");

// let classeRow = document.querySelectorAll(".row");

// let titre2 = document.querySelector("#titre2");

// for(let row of classeRow){
//     row.style.color="red";
// }

// On aurait pa dû faire l'exemple précédent car y a l'attribut defer dans le meta sur le fichier html





// Manipuler le DOM (partie 2)
// window.onload =() => {

// }

// window.addEventListener("DOMContentLoaded", () => {
//   // Ici on est certain que le DOM est chargé

//   //Aller chercher un/des éléments dans le document
//   let balisesH2 = document.querySelectorAll("h2");

//   let baliseLi = document.querySelector("li:nth-child(2)");

//   let classeRow = document.querySelectorAll(".row");

//   let titre2 = document.querySelector("#titre2");

//   for (let row of classeRow) {
//     row.style.color = "red";
//   }

//   // On écoute le clic sur les balises h2
//   for(let baliseH2 of balisesH2){
//     baliseH2.addEventListener("click", changeCouleur);
//     baliseH2.addEventListener("mouseenter", ajoutBordures);
//   baliseH2.addEventListener("mouseleave", retraitBordures);
//   }

//   baliseLi.addEventListener("click", changeCouleur);
//   baliseLi.addEventListener("mouseenter", ajoutBordures);
//   baliseLi.addEventListener("mouseleave", retraitBordures);
  
// });

// function changeCouleur(){
//     this.style.color="green";
// }

// function ajoutBordures(){
//     this.style.border = "1px solid black";
//     this.removeEventListener("mouseenter", ajoutBordures);
// }

// function retraitBordures(){
//     this.style.border = "none";
//     this.removeEventListener("mouseleave", retraitBordures);

// }




// Manipuler le DOM (partie 3)
// window.onload = () =>{
// }

window.addEventListener("DOMContentLoaded", () => {
  // Ici on est certains que le DOM est chargé
  let baliseP = document.querySelector("#titre2 + p");

  baliseP.previousElementSibling.innerText = "Texte modifié";

  // let baliseLi = document.querySelector("li:last-child");

  let section1 = baliseP.parentElement.previousElementSibling;

  let baliseLi = section1.querySelector("li:last-child");

  console.log(baliseLi);

});