
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



function game()
{
    let counter=1;
    let comp=0, user=0;
    while(counter<=5)
    {
        let playerSelection = prompt("\nPlease choose between Rock, Paper, and Scissors:\n");

        let computerSelection = computerPlay();

        let playRound = (playerSelection, computerSelection) =>
        {
            let message;
            console.log("Your Choice: "+ playerSelection+"\nComputer's choice: "+computerSelection);

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
                    counter=counter+1;
                    comp++;
                }
                else
                {
                    message="You Win! Rock Beats Scissors\n" ;
                    counter=counter+1;
                    user++;
                }
                break;

                case "paper":
                if(computerSelection==="rock")
                {
                    message="You Win! Paper Beats Rock\n";
                    counter=counter+1;
                    user++;
                }
                else if(computerSelection==="paper")
                {
                    message="It's a draw!\n" ;
                }
                else
                {
                    message="You Lose! Scissors Beats Paper\n" ;
                    counter=counter+1;
                    comp++;
                }
                break;

                case "scissors":
                if(computerSelection==="rock")
                {
                    message="You Lose! Rock Beats Scissors\n";
                    counter=counter+1;
                    comp++;
                }
                else if(computerSelection==="paper")
                {
                    message="You Win! Scissors Beats Paper\n" ;
                    counter=counter+1;
                    user++;
                }
                else
                {
                    message="It's a draw!\n" ;
                }
                break;
            }

            return message;
        };

        console.log(playRound(playerSelection, computerSelection));
        console.log("Computer: "+comp+"\tYou: "+user+"\n");
    }

    if(user>comp)
        console.log("\nCongratulations. You won the game!\n");

    else
        console.log("\nNice try, but You lost the game!\n")
    
}
game();