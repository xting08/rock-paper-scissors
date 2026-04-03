function getComputerChoice() {
    const n = Math.floor(Math.random() * 3);
    if (n === 0) return "rock";
    if (n === 1) return "paper";
    return "scissors";
}

let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let isGameOver = false;

function updateChoice(clickedHumanChoice) {
    humanChoice = clickedHumanChoice;
    computerChoice = getComputerChoice();

    const getHumanChoiceImg = document.getElementById("human-choice-img");
    const getComputerChoiceImg = document.getElementById("computer-choice-img");

    getHumanChoiceImg.style.transform = "scale(1)";
    getHumanChoiceImg.style.translate = "0 0";
    // animation: reset class so it can re-trigger every click
    getHumanChoiceImg.classList.remove("choice-img-animate");
    getComputerChoiceImg.classList.remove("choice-img-animate");
    // force reflow on both so re-adding the class restarts the animation
    // eslint-disable-next-line no-unused-expressions
    void getHumanChoiceImg.offsetWidth;
    // eslint-disable-next-line no-unused-expressions
    void getComputerChoiceImg.offsetWidth;

    if (humanChoice === "rock") getHumanChoiceImg.src = "images/rock.png";
    else if (humanChoice === "paper") getHumanChoiceImg.src = "images/paper.png";
    else if (humanChoice === "scissors") getHumanChoiceImg.src = "images/scissors.png";

    if (computerChoice === "rock") getComputerChoiceImg.src = "images/robot-rock.png";
    else if (computerChoice === "paper") getComputerChoiceImg.src = "images/robot-paper.png";
    else if (computerChoice === "scissors") getComputerChoiceImg.src = "images/robot-scissors.png";

    getHumanChoiceImg.classList.add("choice-img-animate");
    getComputerChoiceImg.classList.add("choice-img-animate");
}

function gameOver() {
    const gameOverDiv = document.getElementById("game-over");
    const gameOverH2 = document.querySelector("#game-over h2");
    const gameOverP = document.querySelector("#game-over p");
    const interaction = document.getElementById("interaction");
    const heading = document.getElementById("heading");


    isGameOver = true;
    interaction.style.display = "none";
    heading.style.display = "none";
    gameOverDiv.style.display = "flex";

    if (humanScore > computerScore) {
        gameOverH2.textContent = "You Win!";
        gameOverH2.style.color = "#E5AE1E";
        gameOverH2.style.animation = "win-pulse 3s infinite";
        gameOverP.textContent = "Human: " + humanScore + " | Computer: " + computerScore + " | Tie: " + tieScore;
    } else if (humanScore < computerScore) {
        gameOverH2.textContent = "You Lose!";
        gameOverH2.style.color = "#D1382B";
        gameOverH2.style.animation = "lose-pulse 3s infinite";
        gameOverP.textContent = "Human: " + humanScore + " | Computer: " + computerScore + " | Tie: " + tieScore;
    } else {
        gameOverH2.textContent = "It's a Tie!";
        gameOverH2.style.color = "#F5EBC5";
        gameOverH2.style.animation = "tie-pulse 3s infinite";
        gameOverP.textContent = "Human: " + humanScore + " | Computer: " + computerScore + " | Tie: " + tieScore;
    }
}

function playRound(clickedHumanChoice) {
    if (isGameOver) return;

    updateChoice(clickedHumanChoice);

    if (humanChoice === computerChoice) {
        tieScore += 1;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
    document.getElementById("tie-score").textContent = tieScore;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (humanScore + computerScore + tieScore >= 5) {
        gameOver();
    }
}

