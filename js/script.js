// ask the user to choose between rock paper or scissors and store the chosen value in a variable
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
console.log(computerPlay());
//  now i need to compare the values given by the user and the machine
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'its a tie, rock equals rock.';
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'you lose! paper beats rock.';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'you won! rock beats scissors.';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'you won! paper beats rock';
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'its a tie, paper equals paper.';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'you lose! scissors beats paper.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'you lose! rock beats scissors.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'you won! scissors beats paper.';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'its a tie, scissors equals scissors.';
    }



}
// show a message saying who is the winner and what did the machine choose  