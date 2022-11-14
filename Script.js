let playerScore = 0;
let compScore = 0; 
const Selections = [
    {
        Name: 'Rock',
        Beats: 'Scissors'
    },
    {
        Name: 'Paper',
        Beats: 'Rock'
    },
    {
        Name: 'Scissors',
        Beats: 'Paper'
    }
]

function computerSelection() {
    let compC = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    return Selections[compC]
}

function playerSelection(nums) {
    return Selections[nums]
}

function isWinner(selection, opponent){
    return selection.Beats === opponent.Name
}

function Draw(selection, opponent){
    return selection.Name === opponent.Name
}

function play(num) {
    let playerWinner = isWinner(playerSelection(num), computerSelection())
    let computerWinner = isWinner(computerSelection(), playerSelection(num))
    let draw = Draw(playerSelection(num), computerSelection())
    if(draw === true){
        document.querySelector('#results').innerHTML = 'DRAW'
        document.querySelector('#pChoice').innerHTML = playerSelection(num).Name
        document.querySelector('#cChoice').innerHTML = computerSelection().Name
        console.log(playerSelection(num), computerSelection(), 3);
    }else if(playerWinner === true){
        playerScore++
            document.querySelector('#player').innerHTML = 'Player Score:' + ' ' + playerScore
            document.querySelector('#results').innerHTML = 'WIN'
            document.querySelector('#pChoice').innerHTML = playerSelection(num).Name
            document.querySelector('#cChoice').innerHTML = computerSelection().Name
            console.log(playerSelection(num), computerSelection(), 1);
    }else if(computerWinner === true){
        compScore++
        document.querySelector('#comp').innerHTML = 'Computer Score:' + ' ' + compScore
        document.querySelector('#results').innerHTML = 'LOOSE'
        document.querySelector('#pChoice').innerHTML = playerSelection(num).Name
        document.querySelector('#cChoice').innerHTML = computerSelection().Name
        console.log(playerSelection(num), computerSelection(), 2);
    }
}