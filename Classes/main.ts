class Product {
  name: string;
  price: number;
  calculateTax() {
    return this.price * .08;
  }
}

let product1 = new Product();
product1.name = "Eggs";
product1.price = 2.33;
console.log(product1.name + " " + product1.calculateTax());
