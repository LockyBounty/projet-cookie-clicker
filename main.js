let aff = document.querySelector("#boutonPlus");
let score = 0;
let scoreOutput = 0;
let multiplier = document.querySelector("#multiply");
let scoreMulti = 1;
multiplier.value = `${scoreMulti}`;




let plusUn = (event) => {
    if (scoreMulti === 1) {
        scoreOutput = score++;
        aff.value = `${scoreOutput}`;
    }
    else {
        scoreOutput += score*scoreMulti;
        aff.value = `${scoreOutput}`;
    }
}

let increaseMultiplier = (event) => {
    console.log('multiplication OK');
    scoreMulti++;
    multiplier.value = `${scoreMulti}`;
    return scoreMulti;
}




document.querySelector("#boutonPlus").addEventListener("click", plusUn);
document.querySelector("#multiply").addEventListener("click", increaseMultiplier);