class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

let product1 = new Product("Eggs", 2.33);
console.log(product1.name + " " + product1.price);
