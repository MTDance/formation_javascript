// Les fonctions

/**
 * Cette fonction fait un console.log qui dit bonjour
 * @param {string} prenom Prénom de la personne
 * @param {string} nom Nom de la personne
 */

function direBonjour(prenom = "Benoit", nom = "Gambier"){
    console.log(`Bonjour ${prenom} ${nom}`);
}

direBonjour("Roger");

console.log("Brouette");

direBonjour("Brouette", "Rabbit");


/**
 * Cette fonction additionne 2 nombres
 * @param {number} nb1 Nombre 1
 * @param {number} nb2 Nnombre 2
 * @returns number
 * 
 * autre maniere de l'écrire aussi: 
 */
let addition = function(nb1, nb2){
    let total = nb1 + nb2;
    return total;
}

let resultat = addition(5,12);
console.log(resultat);