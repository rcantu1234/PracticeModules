var products = [
    { name: "Cheese", price: 7.00 },
    { name: "Milk", price: 3.00 },
    { name: "Wine", price: 97.30 },
    { name: "Grapes", price: 4.00 },
];
var expensiveProducts = products.filter(function (product) { return product.price > 5.00; });
console.log(expensiveProducts);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter(function (number) { return number % 2 == 0; });
console.log(evenNumbers);
var total = products.reduce(function (number, currentValue) { return number + currentValue.price; }, 0);
console.log(total);
var budgetItems = shoppingCart.filter(function (shopping) { return shopping.price < 4; });
var prices = shoppingCart.map(function (shopping) { return shopping.price * 5; });
