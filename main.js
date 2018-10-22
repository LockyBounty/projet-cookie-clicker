let aff= document.querySelector("#affichage");
let score=0;
let scoreOutput=0;
let affMulti= document.querySelector("#multiplicateur");
let scoreMulti=1;
affMulti.innerHTML=`${scoreMulti}`;




let plusUn = (event) => {
    console.log('Incrementation OK');
    let multip = score * scoreMulti;

    scoreOutput = score++;
    
    

    aff.innerHTML=`${scoreOutput}`;
    
}

let augmenterMultiplicateur = (event) => {
    console.log('multiplication OK');
    scoreMulti++;
    affMulti.innerHTML=`${scoreMulti}`;
}




document.querySelector("#boutonPlus").addEventListener("click", plusUn);
document.querySelector("#boutonMulti").addEventListener("click", augmenterMultiplicateur);

