
const item = document.getElementById("item");
let startPosistion = 300;
item.style.left = (startPosistion +'px');
console.log(`starting value ${item.style.left}`);
console.log (startPosistion - 50);
let player1Score = 0;
let player2Score = 0;
let keepPlaying = true;



const calculateDistanceToMoveItem = (keyCode, currentPosistion)=>{     
    if(keyCode === 37){
        console.log(keyCode);
        return currentPosistion-20;
    } else if (keyCode === 39){
       
        return currentPosistion+20;
    } 
} 

const moveBox = (position) => {
    item.style.left = position +'px';
    return position;
}

const checkWinner = (position) => {
    if (position < 50) {
        return "player1";
    } else if (position > 540) {
        return "player2";
    } else {
        return null;
    }
}

const onKeyUp = (event) => {
    currentPosistion = Number((item.style.left).slice(0, -2));
    console.log("current posistion: " + currentPosistion);
    

    if (event.keyCode === 37 || event.keyCode === 39) {
        const positionOfBox = calculateDistanceToMoveItem(event.keyCode, currentPosistion);
        console.log ("posistion: " + positionOfBox);
        const newPosition = moveBox(positionOfBox);
        console.log("posistion 2: " + newPosition);
        const winner = checkWinner(newPosition);
        if (winner) {
            
            scores = countTheScore(newPosition);
            console.log(scores);
            alert(`Player 1: ${scores.player1}. Player 2: ${scores.player2} `);
            
            //reset the CSS 
            item.style.left = (startPosistion +'px');

            //reset the current possition so it matches the CSS
            currentPosistion = Number((item.style.left).slice(0, -2));           
        };

        return { newPosition, winner };
    }
    
    return {
        errorMessage: "Wrong key pressed"
    }

   
}

document.addEventListener('keyup', onKeyUp);

const countTheScore = (posistion) => {
    if (posistion<50){
        player1Score++;
    }else {
        player2Score++;
    }
    
    let scores =  {
        player1: player1Score,
        player2: player2Score
    }

    return scores;
}

const displayScore = (scores) => {

    console.log (scores.values);
    alert (`Player 1: ${scores.player1()}. Player 2: ${scores.player2} `);
    return true;
}

