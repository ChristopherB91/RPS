let playerScore = 0;
let compScore = 0;

function play(num) {
const Selections = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

function computerSelection() {
    let compC = Math.floor(Math.random() * 3);
    return Selections[compC]
}

function playerSelection(nums) {
    return Selections[nums]
}

function isWinner(selection, opponent){
    if(selection === opponent){
        document.querySelector('#results').innerHTML = 'DRAW'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
    }
    else if(selection.name == 'rock'){
        if(opponent.name == 'paper'){
        compScore++
        document.querySelector('#comp').innerHTML = 'Computer Score:' + ' ' + compScore
        document.querySelector('#results').innerHTML = 'LOOSE'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
        }else{
        playerScore++
        document.querySelector('#player').innerHTML = 'Player Score:' + ' ' + playerScore
        document.querySelector('#results').innerHTML = 'WIN'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
        }
    }
    else if(selection.name == 'scissors'){
        if(opponent.name == 'rock'){
        compScore++
        document.querySelector('#comp').innerHTML = 'Computer Score:' + ' ' + compScore
        document.querySelector('#results').innerHTML = 'LOOSE'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
        }else{
        playerScore++
        document.querySelector('#player').innerHTML = 'Player Score:' + ' ' + playerScore
        document.querySelector('#results').innerHTML = 'WIN'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
        }
    }
    else if(selection.name == 'paper'){
        if(opponent.name == 'scissors'){
        compScore++
        document.querySelector('#comp').innerHTML = 'Computer Score:' + ' ' + compScore
        document.querySelector('#results').innerHTML = 'LOOSE'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
        }else{
        playerScore++
        document.querySelector('#player').innerHTML = 'Player Score:' + ' ' + playerScore
        document.querySelector('#results').innerHTML = 'WIN'
        document.querySelector('#pChoice').innerHTML = selection.name
        document.querySelector('#cChoice').innerHTML = opponent.name
        }
    }
}
    isWinner(playerSelection(num), computerSelection())
}