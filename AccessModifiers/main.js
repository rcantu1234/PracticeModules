var Product = (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.calculateTax = function () {
        return this.price * 0.08;
    };
    Product.prototype.calculateTotal = function () {
        return this.price + this.calculateTax();
    };
    return Product;
}());
var product1 = new Product("Milk", 2.33);
console.log(product1.name + " " + product1.calculateTotal());
