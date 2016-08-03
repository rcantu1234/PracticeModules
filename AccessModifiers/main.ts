class Product {
  public name: string;
  public price: number;

  private calculateTax() {
    return this.price * 0.08;
  }

  public calculateTotal() {
    return this.price + this.calculateTax();
  }

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

let product1 = new Product("Milk", 2.33);
console.log(product1.name + " " + product1.calculateTotal());
