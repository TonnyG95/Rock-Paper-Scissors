// get all the image tags
const imageTags = document.querySelectorAll('img');
// variables for game stats
let computerWin = 0;
let userWin = 0;
// console.log(imageTags);
// find out the img element on which a click is performed
for(let i = 0; i < imageTags.length; i++){
    imageTags[i].onclick = function(e){
        
        let user = e.target.id; // user optioin
        let computer = GetComputerChoice(); // computer option

        DecideWinner(user, computer);
    }
}

// Computer Choice function

function GetComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

// Decide winner function

function DecideWinner(userChoice, computerChoice) {
    const result = document.getElementById("result");

    if(userChoice === computerChoice) {
        result.innerHTML = "Both selected " + userChoice + "It is a tie!"
    }else if (userChoice === "rock") {
        if (computerChoice === "scissor") {
            result.innerHTML= "rock smashes the scissor"
        }
    }
}
