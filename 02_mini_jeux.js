/*  ENNONCÉ :

L'ordinateur va choisir un nombre au hasard entre 1 & 10
3 essais pour trouver le nombre mystère
    Si bonne réponse, afficher "Bonne réponse + Numéro mystère"
    Si non, afficher "pas de chance + le Numéro à trouver
*/

const min = 1;
const max = 11;
const chiffreMystere = Math.floor(Math.random() * (max - min)) + min;

let essais = [
    4, 5, 6
];

// Premier jet (Ne s'arrête pas si bonne réponse):

/* essais.forEach(element => {
    if (element == chiffreMystere) {
        console.log("Bravo");
    }
    else {
        console.log("Pas Bravo");
    }
}) */

for(let i = 0; i <3; i++) {
    if (essais[i] === chiffreMystere) {
        console.log("Bravo vous avez gagné 1000€, grâce au chiffre " + chiffreMystere + "!");
        return;
    }
    else {
        console.log("Pas bravo")
    }    
}