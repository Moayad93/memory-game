// console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

console.log(cardsInPlay.length);

// First you'll create a function that will store all steps related to selecting, or flipping over, a card. When the user flips a card over, you'll want to add that card to the array of cards that are in play.If the user has flipped over two cards, you'll want to check for a match.

function flipCard (cardId) {

    console.log("User flipped " + cards[cardId]);

    cardsInPlay.push(cards[cardId]);

    // cardOne = cards[0];
    // cardsInPlay.push(cardOne);
    // console.log("User flipped queen");
    // cardTwo = cards[2];
    // cardsInPlay.push(cardTwo);
    // console.log("User flipped king");

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

flipCard(0);
flipCard(2);

console.log(cardsInPlay.length);

// Second, you'll create a function to group together the logic to check to see if the two cards that the user has flipped over match each other. You'll provide feedback to the user letting them know if the two cards match, or if they should try again.

// alert("You found a match!");