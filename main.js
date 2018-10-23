let aff = document.querySelector("#boutonPlus");
let initScore = 0;
let score = 0;
let multiplier = document.querySelector("#multiply");
let scoreMulti = 1;
let price = 20;
let autoClick = document.querySelector("#autoclick");
let buyAutoClicker = 200; /*j ai mis 200 au lieu de 500 car trop long*/
let bonusBoost = document.querySelector("#bonus");
let boosterCost = 100; /*j ai mis 100 au lieu de 5000 car trop long*/
let bonus=1;

aff.innerHTML = `${score}`;
multiplier.innerHTML = `Multi x ${scoreMulti}`;
autoClick.innerHTML = `Buy an autoclick for ${buyAutoClicker}`;
bonusBoost.innerHTML = `Buy bonus for ${boosterCost}`;

//*DESACTIVAGE DES BOUTONS SI CONDITIONS PAS ATTEINTES *//



/* FONCTIONS */

let plusUn = (event) => {

    if (scoreMulti === 1) {
        score = ++initScore;
        aff.innerHTML = `${score}`;
    } else {
        score += (scoreMulti*bonus);
        aff.innerHTML = `${score}`;
    }
    console.log(`${score}+${scoreMulti}*${bonus}`);
}

let increaseMultiplier = (event) => {
    if (score >= price) {
        score -= price;
        aff.innerHTML = `${score}`;
        scoreMulti++;
        if (scoreMulti >= 5) {
            price *= 2;
            multiplier.innerHTML = `Multiplier x ${scoreMulti} ! Next multiplier costs :  ${price}`;

        } else {
            multiplier.innerHTML = `Multi x ${scoreMulti}`;
        }
        console.log(`${score} ${initScore} ${scoreMulti} ${price} ${price}`);
    }
}

let autoClickFct = () => {
    if (score >= buyAutoClicker) {
        score -= buyAutoClicker;

        setInterval(function () {
            score += scoreMulti;
            aff.innerHTML = `${score}`;
        }, 100); /*j ai mis 100 ms au lieu de 1000ms (1 sec) car trop lent*/

        autoClick.innerHTML = "Autoclicker already bought";
        console.log("autoclick valide une fois");
        autoClick.disabled = true; /*desactive le bouton  apres usage*/
    }


    /*En pair avec l'addEventListener pour que ce soit exec une fois seulement
     car ce dernier l'enleve*/
}

let seconds = 10; /*pour compter les secondes */
let t;


let decrementSeconds = () => {
    seconds -= 1;
    t = setTimeout(decrementSeconds, 1000); /*NOTE : setTimeout sur sa propre fonction*/
    bonus=2;
    /*La valeur de bonus est de 2 pendant cette periode de temps
     il est multiplie dans la fonjction plusUn*/
    console.log(` multi bonus : ${scoreMulti*2}`);
    bonusBoost.innerHTML = `200% bonus for ${seconds} sec`;
    if (seconds===0){
        clearTimeout(t);
        seconds += 10;
        bonusBoost.innerHTML = `Buy bonus for ${boosterCost}`;
        bonus=1;
        /*La valeur de bonus repasse a un */
    }
     
    
}


let booster = () => {
    if (score >= boosterCost) {
        score -= boosterCost;

        decrementSeconds();
        console.log("booster valide");
    }
    aff.innerHTML = `${score}`;
}



aff.addEventListener("click", plusUn);
multiplier.addEventListener("click", increaseMultiplier);
autoClick.addEventListener("click", autoClickFct, false); /*le false va permettre l'exec une fois uniq*/
bonusBoost.addEventListener("click", booster, false);