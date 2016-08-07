var cards = ["2", "Q", "3", "5", "9", "10"];
var NUMBER_OF_CARD = 4;
var CARD_VALUE = 25;
var cardNumber = 1;
var grade = 0;
function getNextCard() {
    if (cardNumber > NUMBER_OF_CARD) {
        return false;
    }
    else {
        var randNumber = Math.floor(Math.random() * cards.length);
        var card = cards.splice(randNumber, 1);
    }
    return card;
}
var currentCard = getNextCard();
console.log(currentCard);
console.log(cards);
grade += CARD_VALUE;
cardNumber++;
var currentCard = getNextCard();
console.log(currentCard);
console.log(cards);
grade += CARD_VALUE;
cardNumber++;
var currentCard = getNextCard();
console.log(currentCard);
console.log(cards);
grade += CARD_VALUE;
cardNumber++;
var currentCard = getNextCard();
console.log(currentCard);
console.log(cards);
grade += CARD_VALUE;
cardNumber++;
grade++;
if (currentCard == false) {
    console.log("GAME OVER");
    console.log("Your score is " + grade);
}
else {
    var currentCard_1 = getNextCard();
    console.log(currentCard_1);
    console.log(cards);
}
