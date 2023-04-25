// Manipuler les dates
// Déclarer la date d'aujourd'hui
let maDate = new Date();

// Déclarer une autre date
let autreDate = new Date("2020-01-12 0:25:14");
autreDate.setFullYear(2021)
autreDate.setMonth(6);
autreDate.setDate(10);

// Temps entre 2 dates
let temps = maDate - autreDate;

// Dans 1 jour il y a 24h * 60mn * 60s * 1000 = 86400000ms
let jours = Math.floor(temps / 86400000);

// Reste temps - (jours * durée)
let reste = temps - jours * 86400000;
reste = temps % 8640000;

//Heures: 60mn * 60s * 1000 = 3600000ms
let heures = Math.floor(reste / 3600000);

console.log(heures);