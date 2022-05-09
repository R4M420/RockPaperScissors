//const express = require ('express'); <script type="text/javascript" src="./js/script.js"></script>

//const app = express();

//const path = require('path');

//let port = 3030;

//app.listen (port, () => console.log("Servidor andando"));



// with math.random() and math.floor() i should create a random way for the machine to choose between R P and S and store it in a variable

let answerComp = 0;
function computerPlay() {
    answerComp = Math.floor(Math.random() * 100);
    if (answerComp <= 33) {
        answerComp = 'rock';
        return answerComp;
    }
    else if (answerComp > 33 && answerComp <= 66) {
        answerComp = 'paper';
        return answerComp;
    }
    else {
        answerComp = 'scissors';
        return answerComp;
    }
}
//  with add event listener store the value given by the user on a variable.
let answerUser;
const rock = document.getElementById('rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
rock.addEventListener('click', function() {
    return answerUser = 'rock';
});
paper.addEventListener('click', function() {
    return answerUser = 'paper';
});
scissors.addEventListener('click', function() {
    return answerUser = 'scissors';
});
//  now i need to compare the values given by the user and the machine and show a message saying who is the winner and what did the machine choose
let didUserWin;
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'its a tie, rock equals rock.';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        didUserWin = 'lose';
        return 'you lose! paper beats rock.';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        didUserWin = 'won';
        return 'you won! rock beats scissors.';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        didUserWin = 'won';
        return 'you won! paper beats rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'its a tie, paper equals paper.';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        didUserWin = 'lose';
        return 'you lose! scissors beats paper.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        didUserWin = 'lose';
        return 'you lose! rock beats scissors.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        didUserWin = 'won';
        return 'you won! scissors beats paper.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'its a tie, scissors equals scissors.';
    }



}
// create a loop to play a 5 round game, in each round i should print out its winner and at last print out the overall winner
// each round the player should be prompted
let start = document.querySelector('#start');
let roundResult = document.querySelector('#result');
let userPoints = 0;
let computerPoints = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        result.textContent = playRound(answerUser, answerComp);
        if (didUserWin == 'won') {
            userPoints += 1;
        }
        else if (didUserWin == 'lose') {
            computerPoints += 1;
        }
    }
    if (userPoints > computerPoints) {
        return 'you win!';
    }
    else if (userPoints < computerPoints) {
        return 'you lose!';
    }
    else {
        return 'its a tie';
    }
}
start.addEventListener('click', function() {
    game();
    roundResult.textContent = 'go ahead and choose your answer.';
});  