var product = {
    name: "milk",
    price: 2.33,
    calculateTax: function () {
        return this.price * 0.08;
    }
};
var tax = product.calculateTax();
console.log(tax);
function calculateTax(product) {
    return product.price * .08;
}
var product = {
    name: "Milk",
    price: 2.33
};
var tax = calculateTax(product);
console.log(tax);
