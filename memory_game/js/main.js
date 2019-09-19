var score = 0;
console.log("Current score is " + score);

var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

cardsInPlay = [];

function checkForMatch() {
    var drawScore = document.getElementById("score");
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            score++;
            // alert("You found a match! Your total score = " + score + ".");
            drawScore.innerHTML = "You found a match!<br />Your total score = <span class=\"name\">" + score + "</span>.";
        } else {
            // alert("Sorry, try again. Your total score = " + score + ".");
            drawScore.innerHTML = "Sorry, try again.<br />Your total score = <span class=\"name\">" + score + "</span>.";
        }
    }
}

function flipCard() {
    var cardId = this.getAttribute("data-id");
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute("src", cards[cardId].cardImage);
    checkForMatch();
}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        console.log(cardElement); //////////////////////
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
    var resetButton = document.getElementById("button");
    resetButton.addEventListener("click", resetCards);
}

function resetCards() {
    cardsInPlay = [];
    var resetCardsInPlay = document.getElementById('game-board').children;
    console.log(resetCardsInPlay);
    for (var i = 0; i < resetCardsInPlay.length; i++) {
        if (resetCardsInPlay[i].tagName === "IMG") {
            resetCardsInPlay[i].setAttribute("src", "images/back.png");
        }
    }
}

createBoard();