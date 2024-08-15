let userScore = 0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score")

const generatecomputerChoice = () => {
    const options =["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawgame = () => {
    msg.innerText = "game DRAW play again"
    msg.style.backgroundColor = "cadetblue";

};

const showwinner = (userwin,userChoice,computerChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You WIN! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You LOSE ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice) => {
    console.log("userChoice = ",userChoice);

    const computerChoice = generatecomputerChoice();
    console.log("computer choice =",computerChoice);

    if(userChoice === computerChoice) {
        drawgame();
    } else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userwin = computerChoice === "scissors" ? false : true;
        } else{
            computerChoice === "rock" ? false : true;
        }
        showwinner(userwin,userChoice,computerChoice);
        
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});
