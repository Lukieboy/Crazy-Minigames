const gameArea = document.getElementById("gameArea"),
ctx = canvas.getContext("2d");

let x = 50;
let y = 50;
let vxleft = 0;
let vxright = 0;
let vyup = 0;
let vydown = 0;
let v = 7;
let targetx = 1000;
let targety = 1000;
let maxTime = 15;
let timeLeft = maxTime;
let timer
let i = 0;
let h = 0;
let w = 0;
let obx = 0;
let oby = 0;
let holdright = 0;
let holdleft = 0;
let holdup = 0;
let holddown = 0;
let score = 0;
let direction = 0;
let wrange = 1450 - 50;
let hrange = 785 - 50;
let bannerh = 100;
let wlmax = 150;
let wrmin = 1450 - 50 - 150;
let htmax = 300;
let hbmin = 785 - 50 - 150;
let isPlaying = false;

openmenu();

function initTimer() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if (score == 5){
        document.getElementById("timer").style.color = "#00B4D8"
    }else if (score == 15){
        document.getElementById("timer").style.color = "#F4BC1C"
    }else if (score == 25){
        document.getElementById("timer").style.color = "red"
    }
}

function update(){
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if (score == 4){
        maxTime = 10;
    }else if(score == 14){
        maxTime = 5
    }else if(score == 24){
        maxTime = 4
    }
    if (timeLeft > 0 ){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (x >= canvas.width-27){
            vxright = 0;
        }if (x <= 28){
            vxleft = 0;
        }if (y <= 29){
            vyup = 0;
        }if (y >= canvas.height-28){
            vydown = 0;
        }

        if (targetx - 20 < x && x < targetx + 75 && targety - 20 < y && y < targety + 75){
            score++;
            random();
        }if (x + 20 <= obx + w + 20 && x - 20 >= obx - 30){
            if (y + 25 >= oby && y < oby-10){
                vydown = 0;
            }if (y - 28 <= oby + h && y > oby){
                vyup = 0;
            }
        }else if(holddown == 1 && y < canvas.height-28){
            vydown = v;
        }else if (holdup == 1 && y > 29){
            vyup = -v;
        }
        if (y - 20 <= oby + h && y + 20 >= oby){
            if (x - 25 <= obx + w && x > obx){
                vxleft = 0;
            }if (x + 25 >= obx && x < obx){
                vxright = 0;
            }
        }else if(holdleft == 1 && x > 28){
            vxleft = -v;
        }else if (holdright == 1 && x < canvas.width-27){
            vxright = v;
        }
        x += vxright;
        x += vxleft;
        y += vyup;
        y += vydown;
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, 2 * Math.PI);
        ctx.fillStyle = "#6563ff";
        ctx.fill();
        requestAnimationFrame(update);
    }else{
        isPlaying = false;
        document.getElementById("reset").style.visibility = "visible";
        popup.classList.add("open-popup");
        timeLeft = maxTime = 15;
        score = 0;
        document.getElementById("timer").style.color = "black"
        return clearInterval(timer);
    }
}

function random(){
    timeLeft = maxTime;
    document.getElementById("timer").innerHTML = timeLeft;
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    document.getElementById("score").innerHTML = score;
    holdright = 0;
    holdleft = 0;
    holdup = 0;
    holddown = 0;
    document.getElementById("target").style.visibility = "visible";
    document.getElementById("obstical").style.visibility = "visible";
    target = document.querySelector('.target');
    obstical = document.querySelector('.obstical');
    h = randomInt(100, 350);
    w = randomInt(100, 500);
    direction = randomInt(0, 3);
    if (direction <= 1){ //Horizontal
        obx = randomInt(wlmax+w, wrmin-w);
        oby = randomInt(bannerh, hrange-h);
        targety = randomInt(bannerh, hrange);
        y = randomInt(bannerh, hrange);
        if (direction == 0){ //Left to Right
            targetx = randomInt(wrmin, wrange);
            x = randomInt(50, wlmax);
        }else if (direction == 1){ //Right to Left
            targetx = randomInt(50, wlmax);
            x = randomInt(wrmin, wrange);
        }
    }else if (direction >= 2){  //Vertical
        obx = randomInt(0, wrange-2*w);
        oby = randomInt(htmax+100, hbmin-h-150);
        targetx = randomInt(50, wrange);
        x = randomInt(50, wrange);
        if (direction == 2){ //Top to Bottom
            targety = randomInt(hbmin, hrange);
            y = randomInt(bannerh, htmax-50);
        }else if (direction == 3){ //Bottom to Top
            targety = randomInt(bannerh, htmax-50);
            y = randomInt(hbmin+50, hrange);
        }
    }
    // console.log("direction:"+direction);
    // console.log("obx:"+obx);
    // console.log("oby:"+oby);
    // console.log("x:"+x);
    // console.log("y:"+y);
    // console.log("targetx:"+targetx);
    // console.log("targety:"+targety);
    // console.log("h:"+h);
    // console.log("w:"+w);
    target.style.left = `${targetx}px`;
    target.style.top = `${targety}px`;
    obstical.style.left = `${obx}px`;
    obstical.style.top = `${oby}px`;
    obstical.style.width = `${w}px`;
    obstical.style.height = `${h}px`;
}

function openmenu(){
    document.getElementById("play").style.visibility = "visible";
    menu.classList.add("open-menu");
}
function closemenu(){
    document.getElementById("play").style.visibility = "hidden";
    menu.classList.remove("open-menu");
    play.classList.add("transition-hide")
}

function closepopup(){
    document.getElementById("reset").style.visibility = "hidden";
    popup.classList.remove("open-popup");
    play.classList.add("transition-hide");
}

addEventListener("keydown", function(event){
    if (event.code == 'ArrowRight'){
        vxright = v;
        holdright = 1;
    }if (event.code == 'ArrowLeft'){
        vxleft = -v;
        holdleft = 1;
    }if (event.code == 'KeyW'){
        vyup = -v;
        holdup = 1;
    }if (event.code == 'KeyS'){
        vydown = v;
        holddown = 1;
    }
});
addEventListener("keyup", function(event){
    if (event.code == 'ArrowRight'){   
        vxright = 0;
        holdright = 0;
    }if (event.code == 'ArrowLeft'){
        vxleft = 0;
        holdleft = 0;
    }if (event.code == 'KeyW'){
        vyup = 0;
        holdup = 0;
    }if (event.code == 'KeyS'){
        vydown = 0;
        holddown = 0;
    }
});