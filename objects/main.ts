// OBJECT METHODS

let product = {
  name: "milk";
  price: 2.33,
  calculateTax() {
    return this.price * 0.08;
  }
}

let tax = product.calculateTax();
console.log(tax);

// METHODS VERSUS FUNCTIONS

function calculateTax(product) {
  return product.price * .08;
}

let product = {
  name: "Milk";
  price: 2.33
}

let tax = calculateTax(product);
console.log(tax);
