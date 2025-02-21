const finalNumber = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const prevguess = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const rem = document.querySelector('.lastResult');

const tergetNumber = parseInt(Math.floor(Math.random() * 100));
// console.log(tergetNumber);

let num,remGuess = 0;

submit.addEventListener('click' , (e) => {
    e.preventDefault();
    const val = finalNumber.value;
    finalNumber.value = '';
    // console.log(val);
    validateGuess(val);
});

const validateGuess = function(guess){
    if(isNaN(guess) || guess > 100 || guess < 0 || guess === ''){
        alert(`Enter Valid Number`);
    }
    else{
        isFind(guess);
    }
};

const isFind = function(guess){

    prevguess.innerHTML += `${guess}, `;
    if(remGuess >= 10){
        rem.innerHTML = `No Guesses Remaining `;
        remGuess = 0;
        
    }
    else if(guess > tergetNumber){
        lowOrHi.innerHTML = `Your Guess is TOO High`;
        rem.innerHTML--;
        remGuess++;
    }
    else if(guess < tergetNumber){
        lowOrHi.innerHTML = `Your Guess is TOO Low`;
        rem.innerHTML--;
        remGuess++;
    }
    else{
        lowOrHi.innerHTML = `You Guee it Right : ${guess}`;
        prevguess.innerHTML = '';
        remGuess++;
    }
}