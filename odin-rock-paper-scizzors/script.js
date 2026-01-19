const option = document.querySelectorAll(".button");
const desc = document.querySelectorAll(".result");
const player_score = document.querySelectorAll(".player");
const ai_score = document.querySelectorAll(".ai");

let choice = null;
let computer = null;

function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random()*3);
    return choices[random];
}


function getPlayerChoice(){
    for (let i = 0; i < option.length; i++){
        option[i].addEventListener("click", function(){
            choice = i;
            let computer = computerChoice();
            switch(i){
                case 0:
                    if (computer == "rock"){
                        desc[0].innerHTML = "It's a tie!";
                    }
                    else if (computer == "paper"){
                        desc[0].innerHTML = "You lose! Computer choose paper";
                        ai_score[0].innerHTML = parseInt(ai_score[0].innerHTML) + 1;
                    }
                    else {
                        desc[0].innerHTML = "You win! Computer choose scissors";
                        player_score[0].innerHTML = parseInt(player_score[0].innerHTML) + 1;
                    }
                    break;
                    case 1:
                    if (computer == "rock"){
                        desc[0].innerHTML = "You win! Computer choose rock";
                        player_score[0].innerHTML = parseInt(player_score[0].innerHTML) + 1;
                    }
                    else if (computer == "paper"){
                        desc[0].innerHTML = "It's a tie!";
                    }
                    else {
                        desc[0].innerHTML = "You lose! Computer choose scissors";
                        ai_score[0].innerHTML = parseInt(ai_score[0].innerHTML) + 1;
                    }
                    break;
                    case 2:
                    if (computer == "rock"){
                        desc[0].innerHTML = "You lose! Computer choose rock";
                        ai_score[0].innerHTML = parseInt(ai_score[0].innerHTML) + 1;
                    }
                    else if (computer == "paper"){
                        desc[0].innerHTML = "You win! Computer choose paper";
                        player_score[0].innerHTML = parseInt(player_score[0].innerHTML) + 1;
                    }
                    else {
                        desc[0].innerHTML = "It's a tie!";
                    }
            }
        })
    }
}

getPlayerChoice();


