// console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
cardOne = cards[0];
cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

console.log(cardsInPlay.length);
// alert("You found a match!");