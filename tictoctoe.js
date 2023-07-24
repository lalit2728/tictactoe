let playerFirstSymbol = '', playerSecondSymbol = '';
let counter = 0;
let result = [  ['', '', ''],
                ['', '', ''],
                ['', '', '']  ];

function entry(whichButton){
    if(whichButton === 'btn-1'){
        playerFirstSymbol = 'X';
        playerSecondSymbol = 'O';
        let x = document.getElementById("overlay");
        x.style.display = "none" ;
        document.getElementById("player-movements").innerHTML = `Player first's (${playerFirstSymbol}) move!`;
    }
    else{
        playerFirstSymbol = 'O';
        playerSecondSymbol = 'X';
        let x = document.getElementById("overlay");
        x.style.display = "none" ;
        document.getElementById("player-movements").innerHTML = `Player first's (${playerFirstSymbol}) move!`;
    }
}

// This function is used to check that which symbol ('X' / 'O') is used when;

function checkForSymbol(row, column, index){
    if(counter & 1){
        document.getElementById("player-movements").innerHTML = `Player first's (${playerFirstSymbol}) move!`;
        document.getElementsByClassName("press")[index].innerHTML = playerSecondSymbol;

    }
    else{
        document.getElementById("player-movements").innerHTML = `Player second's (${playerSecondSymbol}) move!`;
        document.getElementsByClassName("press")[index].innerHTML = playerFirstSymbol;
    }
    result[row][column] = document.getElementsByClassName("press")[index].innerHTML;
    counter += 1;
}


// This function is to check the symbol of winning player that is it {first player} or {second player};

function checkForXandO(row, column){
    if(result[row][column] === 'X'){
        if(playerFirstSymbol === 'X'){
            document.getElementById("player-movements").innerHTML = "Player first (X) won this match!";
        }
        else{
            document.getElementById("player-movements").innerHTML = "Player second (X) won this match!";
        }
    }
    else{
        if(playerFirstSymbol === 'O'){
            document.getElementById("player-movements").innerHTML = "Player first (O) won this match!";
        }
        else{
            document.getElementById("player-movements").innerHTML = "Player second (O) won this match!";
        }
    }
    document.getElementById("player-movements").style.backgroundColor = "rgb(122, 240, 194)";
}


// This function is used to check the winning trends;

function checkWinning(){

    // These three if conditions are to check the rows (horizontally);
    console.log(result);
    if((result[0][0] === result[0][1]) && (result[0][0] === result[0][2]) && (result[0][0] !== '')){
        checkForXandO(0, 0);
        
        // for changing the text color of the span after winning;
        document.getElementById("span-1").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-2").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-3").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-1").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-2").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-3").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    if((result[1][0] === result[1][1]) && (result[1][0] === result[1][2]) && (result[1][0] !== '')){
        checkForXandO(1, 0);

        // for changing the text color of the span after winning;
        document.getElementById("span-4").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-5").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-6").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-4").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-5").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-6").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    if((result[2][0] === result[2][1]) && (result[2][0] === result[2][2]) && (result[2][0] !== '')){
        checkForXandO(2, 0);

        // for changing the text color of the span after winning;
        document.getElementById("span-7").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-8").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-9").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-7").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-8").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-9").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    // These three if conditions are to check the columns (vertically);

    if((result[0][0] === result[1][0]) && (result[0][0] === result[2][0]) && (result[0][0] !== '')){
        checkForXandO(0, 0);

        // for changing the text color of the span after winning;
        document.getElementById("span-1").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-4").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-7").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-1").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-4").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-7").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    if((result[0][1] === result[1][1]) && (result[0][1] === result[2][1]) && (result[0][1] !== '')){
        checkForXandO(0, 1);

        // for changing the text color of the span after winning;
        document.getElementById("span-2").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-5").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-8").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-2").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-5").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-8").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    if((result[0][2] === result[1][2]) && (result[0][2] === result[2][2]) && (result[0][2] !== '')){
        checkForXandO(0, 2);

        // for changing the text color of the span after winning;
        document.getElementById("span-3").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-6").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-9").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-3").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-6").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-9").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    // These two if conditions are to check the diagonals;
    if((result[0][0] === result[1][1]) && (result[0][0] === result[2][2]) && (result[0][0] !== '')){
        checkForXandO(0, 0);

        // for changing the text color of the span after winning;
        document.getElementById("span-1").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-5").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-9").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-1").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-5").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-9").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

    if((result[0][2] === result[1][1]) && (result[0][2] === result[2][0]) && (result[0][2] !== '')){
        checkForXandO(0, 2);

        // for changing the text color of the span after winning;
        document.getElementById("span-3").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-5").style.color = "rgb(255, 255, 255)";
        document.getElementById("span-7").style.color = "rgb(255, 255, 255)";

        // for changing the background-color of the span after winning;
        document.getElementById("span-3").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-5").style.backgroundColor = "rgb(122, 240, 194)";
        document.getElementById("span-7").style.backgroundColor = "rgb(122, 240, 194)";

        return true;
    }

}

// function blinkGameOver(i){
//     if(i < 4){
//         if(i % 2 == 0){
//             document.getElementById("for-game-over").innerHTML = "";
//         }
//         else{
//             document.getElementById("for-game-over").innerHTML = "Game-OVER!";
//         }
//         setTimeout(blinkGameOver(i++), 5000);
//     }
// }

// This function is the business logic of the code that how the 'X' and 'O' is placed on the screen;

function theLogic(index){

    // This is for index = 0;

    if(index === 0){
        if((result[0][0].indexOf('X') === -1) && (result[0][0].indexOf('O') === -1)){
            checkForSymbol(0, 0, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 1;

    else if(index == 1){
        if((result[0][1].indexOf('X') === -1) && (result[0][1].indexOf('O') === -1)){
            checkForSymbol(0, 1, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 2;

    else if(index == 2){
        if((result[0][2].indexOf('X') === -1) && (result[0][2].indexOf('O') === -1)){
            checkForSymbol(0, 2, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 3;

    else if(index == 3){
        if((result[1][0].indexOf('X') === -1) && (result[1][0].indexOf('O') === -1)){
            checkForSymbol(1, 0, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 4;

    else if(index == 4){
        if(result[1][1].indexOf('X') === -1 && result[1][1].indexOf('O') === -1){
            checkForSymbol(1, 1, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 5;

    else if(index == 5){
        if(result[1][2].indexOf('X') === -1 && result[1][2].indexOf('O') === -1){
            checkForSymbol(1, 2, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 6;

    else if(index == 6){
        if(result[2][0].indexOf('X') === -1 && result[2][0].indexOf('O') === -1){
            checkForSymbol(2, 0, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 7;

    else if(index == 7){    
        if(result[2][1].indexOf('X') === -1 && result[2][1].indexOf('O') === -1){
            checkForSymbol(2, 1, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    // This is for index = 8;

    else{
        if(result[2][2].indexOf('X') === -1 && result[2][2].indexOf('O') === -1){
            checkForSymbol(2, 2, index);
        }
        else{
            alert("You pressed the used cell again!");
        }
    }

    if(checkWinning()){
        return;
    }
    else{

        // To check that the game is tied or not.

        if(counter == 9){
            document.getElementById("player-movements").innerHTML = "Game is TIE!";
            document.getElementById("player-movements").style.backgroundColor = "rgb(255, 102, 102)";
            console.log(result);
            // blinkGameOver(0);
        }
    }
}
