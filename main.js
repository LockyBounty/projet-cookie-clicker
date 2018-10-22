let aff= document.querySelector("#boutonPlus");
let score=0;
let scoreOutput=0;
let multiplier= document.querySelector("#multiply");
let scoreMulti=1;
multiplier.value=`${scoreMulti}`;




let plusUn = (event) => {
        
        scoreOutput = score*this.scoreMulti; 
    
        console.log(`${scoreOutput}`);
    
    
    aff.value=`${scoreOutput}`;
    
}

let increaseMultiplicateur = (event) => {
    console.log('multiplication OK');
    scoreMulti++;
    multiplier.value=`${scoreMulti}`;

}




document.querySelector("#boutonPlus").addEventListener("click", plusUn);
document.querySelector("#boutonMulti").addEventListener("click", augmenterMultiplicateur);

