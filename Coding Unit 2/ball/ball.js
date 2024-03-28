let ball1 = document.querySelector(".ball");
let ball2 = document.querySelector(".ball2");

let bucket1 = document.querySelector(".bucket1");
let bucket2 = document.querySelector(".bucket2");

let ball1score =0;
let ball2score=0;

let press1 = true;
let press2 = true;

document.querySelector(".score").innerHTML = `<strong>Score: 0</strong>`;
document.querySelector(".score2").innerHTML = `<strong>Score: 0</strong>`;

let ballDown1, ballDown2;

document.addEventListener("keydown", event => {

    if (event.code === "KeyZ" && press1) { 
        press1=false;
      console.log("The 'z' key is down"); 
      let down = 160;
      ball1.style.animationPlayState = "paused";
    //   ball1.classList.replace("ball", "every");
    ballDown1 = setInterval(function(){
        ball1.style.top = down.toString()+"px"; 
        down +=10;

        // console.log(window.getComputedStyle(bucket1).getPropertyValue("left"));
        // console.log(window.getComputedStyle(ball1).getPropertyValue("left"));
        if(down >= 650){
            console.log(down);
            let str1 = window.getComputedStyle(ball1).getPropertyValue("left");
            let str2 = window.getComputedStyle(bucket1).getPropertyValue("left");
            let ballThing = parseInt(window.getComputedStyle(ball1).getPropertyValue("left").substring(0, str1.length - 2));
            let bucketThing = parseInt(window.getComputedStyle(bucket1).getPropertyValue("left").substring(0, str2.length - 2));
            // console.log(bucketThing);
            if(ballThing - bucketThing > -30 && ballThing-bucketThing <=90){
                console.log("wuuuuuuu")
                clearInterval(ballDown1);
                ball1.style.top = "160px"; 
                randomizeBall1();
                ball1.style.animationPlayState = "running";
                ball1score++;
                document.querySelector(".score").innerHTML = `<strong>Score: ${ball1score}</strong>`;
                press1= true;
            }
            else{
                console.log("losssss2");
                clearInterval(ballDown1);
                ball1.style.top = "160px"; 
                randomizeBall1();
                ball1.style.animationPlayState = "running";
                // setInterval(ballDown);
                press1= true;
            }
        }
      }, 11);
    }
});



document.addEventListener("keydown", event => { 
    if (event.code === "KeyM" && press2) {
        press2=false; 
      console.log("The 'a' key is down"); 
      let down = 160;
      ball2.style.animationPlayState = "paused";
    //   ball1.classList.replace("ball", "every");
    ballDown2 = setInterval(function(){
        ball2.style.top = down.toString()+"px"; 
        down +=10;

        // console.log(window.getComputedStyle(bucket2).getPropertyValue("left"));
        // console.log(window.getComputedStyle(ball2).getPropertyValue("left"));
        if(down >= 650){
            console.log(down);
            let str1 = window.getComputedStyle(ball2).getPropertyValue("left");
            let str2 = window.getComputedStyle(bucket2).getPropertyValue("left");
            let ballThing = parseInt(window.getComputedStyle(ball2).getPropertyValue("left").substring(0, str1.length - 2));
            let bucketThing = parseInt(window.getComputedStyle(bucket2).getPropertyValue("left").substring(0, str2.length - 2));
            // console.log(bucketThing);
            if( ballThing - bucketThing > -30 && ballThing-bucketThing <=90){
                console.log("wuuuuuuu")
                clearInterval(ballDown2);
                ball2.style.top = "160px"; 
                randomizeBall2();
                ball2.style.animationPlayState = "running";
                ball2score++;
                document.querySelector(".score2").innerHTML = `<strong>Score: ${ball2score}</strong>`;
                press2= true;
            }
            else{
                console.log("losssss1");
                clearInterval(ballDown2);
                ball2.style.top = "160px"; 
                randomizeBall2();
                ball2.style.animationPlayState = "running";
                // setInterval(ballDown);
                press2= true;
            }

            // if(!press1){
            //     ballDown2 = ;
            // }

        }
      }, 11);

    //   if(event.code === "KeyM" && press2==false){
    //     setTimeout(function(){
    //         press2=true;
    //         ball2.style.animationPlayState = "running";
    //         down=75;
    //     }, 1200);
    //   }

    }
});

function randomizeBall1(){
    ball1.style.animationDuration = (Math.random()*2 + 1).toString() + "s";
    bucket1.style.animationDuration = (Math.random()*1.3 + 1).toString() + "s";
    
}

function randomizeBall2(){
    ball2.style.animationDuration = (Math.random()*2 + 1).toString() + "s";
    bucket2.style.animationDuration = (Math.random()*1.3 + 1).toString() + "s";
    if(ball1score >=10){
        document.querySelector(".win").innerHTML = "PLAYER 1 WON!";
    }else if(ball2score >=10){
        document.querySelector(".win").innerHTML = "PLAYER 2 WON!";
    }
}


