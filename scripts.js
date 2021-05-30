
let computerPlay = () =>
{
    let rand = Math.floor(Math.random()*3);

    let choice;

    switch(rand)
    {
        case 0:
            choice="Rock";
            break;
        case 1:
            choice="Paper";
            break;
        case 2:
            choice="Scissors";
            break;
        default:
            choice="";
            break;
    }

    return choice;
}
//let counter=1;
let comp=0, user=0;

function game(playerSelection="", computerSelection="")
{
    if(playerSelection===""||computerSelection=="")
        return;
    
        // let computerSelection = computerPlay();

        // let playRound = (playerSelection, computerSelection) =>
        // {
    let message;

        // console.log("Your Choice: "+ playerSelection+"\nComputer's choice: "+computerSelection);

        playerSelection=playerSelection.toLowerCase();
        computerSelection=computerSelection.toLowerCase();


    switch(playerSelection)
    {
        case "rock":
        if(computerSelection==="rock")
        {
            message="It's a draw!\n";
                    
        }
        else if(computerSelection==="paper")
        {
            message="You Lose! Paper Beats Rock\n" ;
            //counter=counter+1;
            comp++;
        }
        else
        {
            message="You Win! Rock Beats Scissors\n" ;
           // counter=counter+1;
            user++;
        }
        break;

        case "paper":
        if(computerSelection==="rock")
        {
            message="You Win! Paper Beats Rock\n";
            //counter=counter+1;
            user++;
        }
        else if(computerSelection==="paper")
        {
            message="It's a draw!\n" ;
        }
        else
        {
            message="You Lose! Scissors Beats Paper\n" ;
            //counter=counter+1;
            comp++;
        }
        break;

        case "scissors":
        if(computerSelection==="rock")
        {
            message="You Lose! Rock Beats Scissors\n";
            //counter=counter+1;
            comp++;
        }
        else if(computerSelection==="paper")
        {
            message="You Win! Scissors Beats Paper\n" ;
            //counter=counter+1;
            user++;
        }
        else
            {
                message="It's a draw!\n" ;
            }
        break;
    }

    if(user>=5)
        message="Congratulations. You won the game!";
    
    else if(comp>=5)
        message="Nice try, but You lost the game!"

    return message;


        // console.log(playRound(playerSelection, computerSelection));
        // console.log("Computer: "+comp+"\tYou: "+user+"\n");  

    // else
    //     console.log("\nNice try, but You lost the game!\n")
    
}

const buttons = Array.from(document.querySelectorAll("button")); 
const roundRes = document.querySelector(".round");
const scoreUsr = document.querySelector("#user");
const scoreComp = document.querySelector("#comp");
const choiceComp = document.querySelector(".compChoice");

buttons.forEach( button => {
    button.addEventListener('click', (e)=>
    {
        if(user>=5||comp>=5)
            return;
        console.log(e.target.id)
        const computerSelection=computerPlay();
        choiceComp.innerHTML="The computer chose "+ computerSelection;
        const msg = game(e.target.id, computerSelection);
        console.log(msg);
        roundRes.innerHTML=msg;

        scoreUsr.innerHTML=user;
        scoreComp.innerHTML=comp;

    })
})