// Les oprérateur de décompostion

const nombres = [25, 12 , 8];

function addition(nb1 , nb2, nb3){
    return nb1 + nb2 + nb3;
};

let resultat = addition(...nombres);
console.log(resultat);

console.log(...nombres);

const tableauDate = [2021, 5, 25];

let maDate = new Date(...tableauDate);

console.log(maDate);

const tableauNombres = [48, 74, ...nombres, 26];

console.table(tableauNombres);

const t1 = ["a", "b", "c"];
const t2 = ["d", "e", "f"];

const t3 = [...t1, ...t2];

console.table(t3);

const nom = {
    nom: "TRAN"
};

const prenom = {
    prenom: "Minh-Tuan"
};

const profil = {...nom, ...prenom};

console.log(profil);