//Declaring counters
var winCount=0;
var loseCount=0;
var tieCount=0;
var choiceCPU;

cpuGuess();


function play(myChoice) {//function will make the game run

    if (myChoice===1) {//If I choose rock, run this code
        picMy.src="./images/RPS/left-hand-rock.png";
        cpuGuess();
    }
    if (myChoice===2) {//If I choose paper, run this code
        picMy.src="./images/RPS/left-hand-paper.png";
        cpuGuess();
    }
    if (myChoice===3) {//If I choose scissors, run this code
        picMy.src="./images/RPS/left-hand-scissor.png";
        cpuGuess();
    }
    
    if (myChoice==choiceCPU) {//IF your selection equals the computer's selection, run this code
        tieCount++;// Adds one to the tie counter
        theScore.innerHTML = "Wins: "+ winCount+" Losses: "+loseCount+ " Ties: " +tieCount;//Updates score
    }
    if (myChoice==1 && choiceCPU==2 || myChoice==2 && choiceCPU==3 || myChoice==3 && choiceCPU==1) {//If you lose the round, run this code
        loseCount++;
        theScore.innerHTML = "Wins: "+ winCount+" Losses: "+loseCount+ " Ties: " +tieCount;//Updates score
    }
    if (myChoice==1 && choiceCPU==3 || myChoice==2 && choiceCPU==1 || myChoice==3 && choiceCPU==2) {//If you win the round, run this code
        winCount++;
        theScore.innerHTML = "Wins: "+ winCount+" Losses: "+loseCount+ " Ties: " +tieCount;//Updates score
    }

    if (myChoice===4) {//Resets game
        winCount=0;
        loseCount=0;
        tieCount=0;
        theScore.innerHTML = "Wins: "+ winCount+" Losses: "+loseCount+ " Ties: " +tieCount;//Updates score
    }
}

function cpuGuess(){
    var computerChoice= Math.random();
    if (computerChoice>=0 && computerChoice<=0.33) {// 1/3 Percentage to choose rock
        picCPU.src = "./images/RPS/right-hand-rock.png";
        choiceCPU =1;
    }
    if (computerChoice>=0.34 && computerChoice<=0.66) {// 1/3 Percentage to choose paper
        picCPU.src = "./images/RPS/right-hand-paper.png";
        choiceCPU =2;
    }
    if (computerChoice>=0.67 && computerChoice<=1) {// 1/3 Percentage to choose scissors
        picCPU.src = "./images/RPS/right-hand-scissor.png";
        choiceCPU =3;
    }     
}