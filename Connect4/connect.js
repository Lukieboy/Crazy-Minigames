let play1 = document.querySelector(".play1");
let play2 = document.querySelector(".play2");
let play3 = document.querySelector(".play3");
let play4 = document.querySelector(".play4");
let play5 = document.querySelector(".play5");
let play6 = document.querySelector(".play6");
let play7 = document.querySelector(".play7");

console.log("hello");
console.log(play1);

let cola = 0;
let grid = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0]
];

turn();
let place = true;

play1.addEventListener("click", ()=>{
    if(place == true){
        let col=1
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    // animation(1, "red");
                    animation(1, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    // box.style.backgroundColor = "yellow";
                    animation(1, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;
                break;
            }
        }

        checkWin();
        turn();
    }

});


play2.addEventListener("click", ()=>{
    if(place == true){
        let col=2
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    animation(2, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    animation(2, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;

                break;
            }
        }

        checkWin();
        turn();
    }

});


play3.addEventListener("click", ()=>{
    if(place == true){
        let col=3
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    animation(3, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    animation(3, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;

                break;
            }
        }

        checkWin();
        turn();
    }
});


play4.addEventListener("click", ()=>{
    if(place == true){
        let col=4
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    animation(4, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    animation(4, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;

                break;
            }
        }

        checkWin();
        turn();
    }
});


play5.addEventListener("click", ()=>{
    if(place == true){
        let col=5
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    animation(5, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    animation(5, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;

                break;
            }
        }

        checkWin();
        turn();
    }
});


play6.addEventListener("click", ()=>{
    if(place == true){
        let col=6
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    animation(6, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    animation(6, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;

                break;
            }
        }

        checkWin();
        turn();
    }
});


play7.addEventListener("click", ()=>{
    if(place == true){
        let col=7;
        for(x=6; x>0; x--){
            let index = ".col" + x.toString() + col.toString();
            let box = document.querySelector(index);
            console.log(box);
            if(box.style.backgroundColor != "red" && box.style.backgroundColor != "yellow"){
                box.style.backgroundColor = cola;
                
                if(cola % 2 == 0){
                    animation(7, "red");
                    grid[x-1][col-1] = 1;
                }else{
                    animation(7, "yellow");
                    grid[x-1][col-1] = 2;
                }

                cola++;

                break;
            }
        }

        checkWin();
        turn();
    }
});


function turn(){
    if(cola==0){
        document.querySelector(".turn").style.backgroundColor="red";
    }
    if(cola % 2 == 0){
        document.querySelector(".turn").style.backgroundColor="red";
    }else if(cola % 2 == 1){
        document.querySelector(".turn").style.backgroundColor="yellow";
    }
}


function checkWin(){
    let winner = "";

    for(i=0; i<6; i++){
        for(j=0; j<7; j++){

            console.log(grid[i][j]);

            if(grid[i][j] == grid[i][j+1] && grid[i][j+1]== grid[i][j+2] && grid[i][j+2]== grid[i][j+3] && grid[i][j] != 0){
                if(grid[i][j]==1){
                    winner = "RED";
                }else{
                    winner="YELLOW";
                }
                document.querySelector(".win").innerHTML = `<h1>The winner is ${winner}!</h1>`;
            }
        }
    }

    for(i=0; i<6; i++){
        for(j=0; j<7; j++){

            console.log(grid[i][j]);

            if(grid[i][j] == grid[i+1][j] && grid[i+1][j]== grid[i+2][j] && grid[i+2][j]== grid[i+3][j] && grid[i][j] != 0){
                if(grid[i][j]==1){
                    winner = "RED";
                }else{
                    winner="YELLOW";
                }
                document.querySelector(".win").innerHTML = `<h1>The winner is ${winner}!</h1>`;
            }
        }
    }

    for(i=0; i<6; i++){
        for(j=0; j<7; j++){
            if(grid[i][j] == grid[i+1][j+1] && grid[i+1][j+1]==grid[i+2][j+2] && grid[i+2][j+2]==grid[i+3][j+3] && grid[i][j] != 0){
                if(grid[i][j]==1){
                    winner = "RED";
                }else{
                    winner="YELLOW";
                }
                document.querySelector(".win").innerHTML = `<h1>The winner is ${winner}!</h1>`;
            }
        }
    }

    for(i=5; i>=3; i--){
        for(j=0; j<7; j++){
            if(grid[i][j] == grid[i-1][j+1] && grid[i-1][j+1]==grid[i-2][j+2] && grid[i-2][j+2]==grid[i-3][j+3] && grid[i][j] != 0){
                if(grid[i][j]==1){
                    winner = "RED";
                }else{
                    winner= "YELLOW";
                }
                document.querySelector(".win").innerHTML = `<h1>The winner is ${winner}!</h1>`;
            }
        }
    }

    if(cola == 42){
        document.querySelector(".win").innerHTML = `<h1>The game is a TIE!</h1>`;
        doc
    }

    if(cola==42 || winner=="RED" || winner=="YELLOW"){
        play1=null;
        play2=null;
        play3=null;
        play4=null;
        play5=null;
        play6=null;
        play7=null;
    }

}



function animation(column, color){
    let i=1;
    place = false;
    
    
    play1.disabled = true;
    let interval = setInterval(function(){
        if(i<=7){
            let index = ".col" + i.toString() + column.toString();
            let previndex = ".col" + (i-1).toString() + column.toString();
            let box = document.querySelector(index);

            let nextbox = document.querySelector(".col" + (i+1).toString() + column.toString());
            if(i != 1){
                let prevbox = document.querySelector(previndex);
                prevbox.style.backgroundColor = "white";
            }

            console.log(box);
            console.log(i);
            // if(i==){

            // }
            console.log(i);
            console.log(column);
            if(grid[i-1][column-1] != '0' || i==7){
                place = true;
                clearInterval(interval);
                i = 10;
            }

            box.style.backgroundColor = color;

        }
        i++;

    }, 30);
}