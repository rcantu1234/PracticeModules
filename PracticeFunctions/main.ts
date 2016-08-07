let cards = ["2", "Q", "3", "5", "9", "10"];

const NUMBER_OF_CARD = 4;
const CARD_VALUE = 25;

let cardNumber = 1;
let grade = 0;

function getNextCard() {
  if (cardNumber > NUMBER_OF_CARD) {
    return false;
  } else {
    let randNumber = Math.floor(Math.random() * cards.length;
    let card = cards.splice(randNumber, 1);
  }

  return card;
}


// Simulate starting the test.
let currentCard = getNextCard();
console.log(currentCard);
console.log(cards);

grade += CARD_VALUE;
cardNumber++;

let currentCard = getNextCard();
console.log(currentCard);
console.log(cards);

grade += CARD_VALUE;
cardNumber++;

let currentCard = getNextCard();
console.log(currentCard);
console.log(cards);

grade += CARD_VALUE;
cardNumber++;

let currentCard = getNextCard();
console.log(currentCard);
console.log(cards);

grade += CARD_VALUE;
cardNumber++;
grade++;
if (currentCard == false) {
  console.log("GAME OVER");
  console.log("Your score is " + grade);
} else {
  let currentCard = getNextCard();
  console.log(currentCard);
  console.log(cards);
}
