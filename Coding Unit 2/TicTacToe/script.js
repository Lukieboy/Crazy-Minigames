turn = 0
P1Score = 0
P2Score = 0
winner = false;
display1 = '<img src="pretzel.jpg" width="25px padding-left="5px">';
display2 = '<img src="donut.jpeg" width="25px" padding-left="5px">';
popup = document.getElementByClass(".popup");
document.getElementById("turndisplay").innerHTML = ""+display1+"'s turn";

function takeTurn(square){
    if (square.innerHTML == '<img src="question.jpeg" width="80px">' && winner == false){
        console.log(square);
        if (turn%2 == 0){
            square.innerHTML = '<img src="pretzel.jpg" width="80px">';
        }else{
            square.innerHTML = '<img src="donut.jpeg" width="80px">';
        }
        turn++;
        if (turn > 4){
            checkWin(square.innerHTML);
        }
    }
    if (winner == false){
        if (turn%2 == 0){
                document.getElementById("turndisplay").innerHTML = ""+display1+"'s turn";
        }else{
            document.getElementById("turndisplay").innerHTML = ""+display2+"'s turn";
        }
    }
}

function checkWin(player){
    grid = document.getElementsByClassName('gameCell');
    for (i = 0; i < grid.length; i+=3){
        if (player == grid[i].innerHTML && grid[i].innerHTML == grid[i+1].innerHTML && grid[i].innerHTML == grid[i+2].innerHTML){
            console.log("Winner");
            winner = true;
            openpopup();
        }
    }
    for (i = 0; i < 3; i++){
        if (player == grid[i].innerHTML && grid[i].innerHTML == grid[i+3].innerHTML && grid[i].innerHTML == grid[i+6].innerHTML){
            console.log("Winner");
            winner = true;
            openpopup();
        }
    }
    if (player == grid[0].innerHTML && grid[0].innerHTML == grid[4].innerHTML && grid[0].innerHTML == grid[8].innerHTML){
        console.log("Winner");
        winner = true;
        openpopup();
    }if (player == grid[2].innerHTML && grid[2].innerHTML == grid[4].innerHTML && grid[2].innerHTML == grid[6].innerHTML){
        console.log("Winner");
        winner = true;
        openpopup();
    }if (turn == 9 && winner == false){
        document.getElementById("gameMessage").innerHTML = "Cat's Game";
        winner = true;
        openpopup();
    }else if (winner == true){
        if (turn%2 == 0){
            P2Score++;
            document.getElementById("gameMessage").innerHTML = "The Winner Is "+display2+"!";
            document.getElementById('p1score').innerHTML = P1Score
            document.getElementById('p2score').innerHTML = P2Score
        }else{
            P1Score++;
            document.getElementById("gameMessage").innerHTML = "The Winner Is "+display1+"!";
            document.getElementById('p1score').innerHTML = P1Score
            document.getElementById('p2score').innerHTML = P2Score
        }
    }
    console.log(P1Score);
    console.log(P2Score);
}

function reset(){
    turn = 0;
    winner = false;
    document.getElementById("turndisplay").innerHTML = ""+display1+"'s turn";
    document.getElementById("gameMessage").innerHTML = ""
    for (i=0; i<grid.length; i++){
        grid[i].innerHTML = '<img src="question.jpeg" width="80px">';
    }
}

function openpopup(){
    popup.classList.add("open-popup");
    document.getElementById("reset").style.visibility = "visible";
}

function closepopup(){
    document.getElementById("reset").style.visibility = "hidden";
    popup.classList.remove("open-popup");
}