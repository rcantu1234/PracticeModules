var Product = (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var product1 = new Product("Eggs", 2.33);
console.log(product1.name + " " + product1.price);
