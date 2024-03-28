const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
matchedTag = document.querySelector(".matchedCard b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 80;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0){
        document.getElementById("endmsg").innerHTML = "You Ran Out Of Time";
        document.getElementById("play").style.visibility = "visible";
        popup.classList.add("open-popup");
        return clearInterval(timer);
    }if (timeLeft <= 11){
        t.style.color = "red"
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        matchedTag.innerText = matchedCard;
        if(matchedCard == 12 && timeLeft > 0) {
            document.getElementById("endmsg").innerHTML = "You Win!";
            document.getElementById("play").style.visibility = "visible";
            popup.classList.add("open-popup");
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    t.style.color = "black"
    matchedCard = 0;
    matchedTag.innerText = matchedCard;
    timeLeft = maxTime;
    flips = 0;
    cardOne = "";
    cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
    popup.classList.remove("transition-hide");
    menu.classList.remove("transition-hide");
}

function openmenu(){
    document.getElementById("next").style.visibility = "visible";
    menu.classList.add("open-menu");
}

function closemenu(){
    document.getElementById("next").style.visibility = "hidden";
    menu.classList.remove("open-menu");
    next.classList.add("transition-hide");
}

function closepopup(){
    document.getElementById("play").style.visibility = "hidden";
    popup.classList.remove("open-popup");
    play.classList.add("transition-hide");
}

openmenu();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});