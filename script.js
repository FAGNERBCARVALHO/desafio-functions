const result = document.querySelector(".result")
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
    //console.log(humanChoice)
    console.log(playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const resultMachine = Math.floor(Math.random() * 3)

    console.log(resultMachine)

    return choices[resultMachine]
}

const playTheGame = (human, machine) => {

    console.log('Humano:' + human + "Maquina: " + machine)


    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissor' && machine === 'paper')) 
        {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para ALexa"
    }

}


/*
unction playHuman(human){
   console.log()
   
}
function playMachine(machine){
   const choices = ['rock', 'paper', 'scissors']
   const randonNumber = Math.floor(Math.randon() * 3)
}

function playTheGame(human, machine){
   if (human === machine) {
       result.innerHTML = "Deu empate"
   } else if ((human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') || (human === 'scissor' && machine === 'paper')) {
       humanScoreNumber.innerHTML++
       result.innerHTML = "Você ganhou!"
   } else {
       machineScoreNumber++
       machineScore.innerHTML = machineScoreNUmber
       result.innerHTML = "Você perdeu para ALexa"
   }

}

*/