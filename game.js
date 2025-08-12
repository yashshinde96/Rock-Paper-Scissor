let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");

const getcompchoice= () =>{
    const options=["rock", "paper", "scissor"];
    const randIDx=Math.floor(Math.random()*3);
    return options[randIDx];
}

const drawgame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    };
}

const playGame = (userChoice) =>{
    const compChoice=getcompchoice();
    if(userChoice===compChoice){
        drawgame();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false : true;

        }else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});