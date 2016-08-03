var Product = (function () {
    function Product() {
    }
    Product.prototype.calculateTax = function () {
        return this.price * .08;
    };
    return Product;
}());
var product1 = new Product();
product1.name = "Eggs";
product1.price = 2.33;
console.log(product1.name + " " + product1.calculateTax());
