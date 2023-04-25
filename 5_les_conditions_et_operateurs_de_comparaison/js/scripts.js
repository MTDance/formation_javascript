// Conditions et opérateurs de comparaisons

/**
 si le temps est beau
 Je prends mes lunettes de soleil
 Sinon
 je prends mon mateau
 */

 let nombre = 8;
 let bool = false;

 // On pose une question
 // == est une égalité "faible"
 // === égalité stricte
 // != inégalité
 // <, <=, >, >=
// && et, || ou
 if(bool || (nombre < 12 && nombre > 5)){
    // La condition est remplie
    
    console.log("Le booléen est à true ou le nombre est plus petit que 12");
 }else{
    // La condition n'est pas remplie
    console.log("Le booléen est à false")
 }