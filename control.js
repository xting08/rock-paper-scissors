function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice: rock(r), paper(p), or scissors(s) \n You: " + humanScore + " | Computer: " + computerScore);
    if (choice === "r" || choice === "R") {
        return "rock"; 
    } else if (choice === "p" || choice === "P") {
        return "paper";
    } else if (choice === "s" || choice === "S") {
        return "scissors";
    } else {
        alert("Invalid choice");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 5;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Human Choice: " + humanChoice + " | Computer Choice: " + computerChoice + "\nIt's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("Human Choice: " + humanChoice + " | Computer Choice: " + computerChoice +"\nYou win!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("Human Choice: " + humanChoice + " | Computer Choice: " + computerChoice +"\nYou win!");
        humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("Human Choice: " + humanChoice + " | Computer Choice: " + computerChoice +"\nYou win!");
        humanScore += 1;
    } else {
        alert("Human Choice: " + humanChoice + " | Computer Choice: " + computerChoice +"\nYou lose!");
        computerScore += 1;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < round; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert("Human Score: " + humanScore + " | Computer Score: " + computerScore + "\nYou win the game!");
        playGame();
    } else if (humanScore < computerScore) {
        alert("Human Score: " + humanScore + " | Computer Score: " + computerScore + "\nYou lose the game!");
        playGame();
    } else {
        alert("Human Score: " + humanScore + " | Computer Score: " + computerScore + "\nIt's a tie!");
        playGame();
    }
}

playGame();