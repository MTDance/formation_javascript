// Les boucles

// for(let compteur = 100; compteur >= 0; compteur -= 5){
//     console.log(compteur);
// }

// let pass ="azerty";

// while (pass != "brouette"){
//     pass = prompt("Entrez le mot de passe");

// }

let clients = ["Robert", "Bruno", "Pascale", "Severine", "Kévin"];
console.table(clients);

// for (let ligne = 0; ligne < clients.length; ligne++){
//     console.log(clients[ligne]);
// }

// for(let ligne in clients){
//     console.log(clients[ligne]);
// }

// for(let valeur of clients){
//     console.log(valeur);
// }

clients.forEach((brouette, index, tableau)=>{
    console.log(tableau);
});