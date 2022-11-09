let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score") 

const result = document.querySelector(".result > p")

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p" , "s"];
    const randomNumbers = Math.floor(Math.random() * 3);
    return choices[randomNumbers];
}

 function convert(letter){
    if(letter === "r" )return " Rock";
    if(letter === "p")return "Paper";
    return "Scissors";
 }

  function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = `Your ${convert(userChoice)} beats comp's ${convert(computerChoice)}  You win!`
    const userChoice_div = document.getElementById(userChoice);
     userChoice_div.classList.add("greenglow");
    setTimeout(function(){ userChoice_div.classList.remove("greenglow")}, 300)

  }



  function lose(userChoice, computerChoice){
   computerScore++;
   computerScore_span.innerHTML = computerScore;
   result.innerHTML = `Your ${convert(userChoice)} loses to comp's ${convert(computerChoice)}  You lost!`
   const userChoice_div = document.getElementById(userChoice);
   userChoice_div.classList.add("redglow");
   setTimeout(function(){userChoice_div.classList.remove("redglow")}, 300)
  }

  function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `Your ${convert(userChoice)} equals to comp's ${convert(computerChoice)}  You draw!`
    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add("greyglow");
    setTimeout(function(){userChoice_div.classList.remove("greyglow")}, 300)

  }

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;   
            
        case "rp":
        case "ps":
        case "sr":
             lose(userChoice, computerChoice);
             break;

        case "rr":
        case "pp":
        case "ss":
             draw(userChoice, computerChoice);
             break;                  
    }
}

function main(){
rock.addEventListener('click', function(){
    game("r")
})

paper.addEventListener('click', function(){
    game("p")
})

scissors.addEventListener('click', function(){
    game("s")
})
};

main();