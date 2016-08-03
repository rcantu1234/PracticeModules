let products = [
  {name: "Cheese", price: 7.00},
  {name: "Milk", price: 3.00},
  {name: "Wine", price: 97.30},
  {name: "Grapes", price: 4.00},
]

// FILTER() METHOD
let expensiveProducts = products.filter(product => product.price > 5.00);
console.log(expensiveProducts);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// FAT ARROW + FILTER
let evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers);

// USING THE REDUCE() METHOD  NUMBER IS THE INITIAL VALUE SET TO = 0 & CURRENTVALUE IS THE CURRENT ARRAY ITEM.
let total = products.reduce((number, currentValue) => number + currentValue.price, 0);
console.log(total);

// FILTER() METHOD
let budgetItems = shoppingCart.filter(shopping => shopping.price < 4);

// ANOTHER FILTER() METHOD
let prices = shoppingCart.map(shopping => shopping.price * 5);
