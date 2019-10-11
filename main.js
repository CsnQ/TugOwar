
const item = document.getElementById("item");
let startPosistion = 250;
item.style.left = (startPosistion +'px');
let player1Score = 0;
let player2Score = 0;


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
    if (position < 45) {
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
            displayScore(scores);
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
    if (posistion<45){
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

//writes score into html
const displayScore = (scores) => {
    console.log(scores);
    myElem = document.getElementById("player-1-score");
    myElem2 = document.getElementById("player-2-score");
    myElem.innerHTML = scores.player1
    myElem2.innerHTML = scores.player2;
    return true;
    
}

