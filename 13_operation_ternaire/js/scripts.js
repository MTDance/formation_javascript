// L'opération Ternaire ?:
let nombre = 5;
let texte;
// if(nombre >= 0){
//     texte = ("Le nombre est positif ou nul");
// }else{
//     texte = ("Le nombre est négatif");
// }

texte = (nombre >= 0) ? "Le nombre est positif ou nul" : "Le nombre est négatif";

console.log(texte);

let baliseH2 = document.querySelector("#titre1");

baliseH2.addEventListener("click", function(){
    this.innerText = (this.innerText === "Sous titre") ? "Sous titre cliqué" : "Sous titre";
});