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
let answerUser;
let userPoints = 0;
let computerPoints = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        answerUser = prompt('rock, paper, scissors...');
        answerUser = answerUser.toLowerCase();
        computerPlay();
        alert(playRound(answerUser, answerComp));
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
alert(game());  