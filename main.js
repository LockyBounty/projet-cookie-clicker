let aff= document.querySelector("#boutonPlus");
let initScore=0;
let score=0;
let multiplier= document.querySelector("#multiply");
let scoreMulti = 1;
let price = 50;
let autoClick = document.querySelector("#autoclick");
let buyAutoClicker = 200; /*j ai mis 200 au lieu de 500 car trop long*/
let bonusBoost = document.querySelector("#bonus");
let boosterCost = 1000; /*j ai mis 1000 au lieu de 5000 car trop long*/

aff.innerHTML = `${score}`;
multiplier.innerHTML = `${scoreMulti}`;
autoClick.innerHTML = `Buy an autoclick for 200`;
bonusBoost.innerHTML = `Bonus`;


let plusUn = (event) => {

    if (scoreMulti === 1) {
        score = ++initScore;
        aff.innerHTML = `${score}`;
    } else {
        score += scoreMulti;
        aff.innerHTML = `${score}`;
    }
    console.log(`${score} ${initScore} ${scoreMulti}`);
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
            multiplier.innerHTML = `${scoreMulti}`;
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
    }
    autoClick.removeEventListener("click", autoClickFct, false);
    /*En pair avec l'addEventListener pour que ce soit exec une fois seulement
     car ce dernier l'enleve*/
}

let booster = () => {
    if (score >= boosterCost) {

    }
}


aff.addEventListener("click", plusUn);
multiplier.addEventListener("click", increaseMultiplier);
autoClick.addEventListener("click", autoClickFct, false); /*le false va permettre l'exec une fois uniq*/
bonusBoost.addEventListener("click", booster);