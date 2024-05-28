let randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

//function to validation of user input
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number!')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1!')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100!')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuessList(guess)
            displayMessages(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuessList(guess)
            checkGuess(guess)
        }
    }
    
}

//function to check guess or compare guess with the random number generated
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessages(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessages(`Number is TOOO low`)
    }
    else{
        displayMessages(`Number is TOOO High`)
    }
}

//function to display guessList
function displayGuessList(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

//function to display messages regarding his guesses
function displayMessages(messages){
    loworHi.innerHTML = `<h2>${messages}</h2>`
}

//function to End the game
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

//function to start the game
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        loworHi.innerHTML = ''
        playGame = true
    })
}