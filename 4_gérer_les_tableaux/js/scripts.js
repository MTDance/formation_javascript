// Manipuler les tableaux
let tableau = [10, "Brouette", true, 18.25];

tableau.reverse()

// Ajouter un/des valeurs dans un tableau
// Au début
tableau.unshift("Bonjour", "Benoit")

//A la fin 
tableau.push("Au revoir", 14);

// Retirer une valeur du tableau
// La 1ere
let valeur = tableau.shift();

// La dernière
valeur = tableau.pop();

// Modifier des valeurs dans le tableau
tableau.splice(2, 0, "Inséré")

console.table(tableau);
console.log(valeur);