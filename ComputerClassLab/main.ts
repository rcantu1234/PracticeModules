class Computer {
  public model: string;
  public mouse: boolean;
  public serialNo: string;
  public price: number;
  public RAM: number;

  public print() {
    console.log(this.model + "\n" + this.mouse + "\n" + this.serialNo + "\n" + this.cost(this.price) + "\n" + this.RAM );
  }

  private cost() {
    return this.price + (this.price * 0.08);
  }

  constructor(model: string, mouse: boolean, serialNo: string, price: number, RAM: number) {
    this.model = model;
    this.mouse = mouse;
    this.serialNo = serialNo;
    this.price = price;
    this.RAM = RAM;
  }
}

let computer1 = new Computer("Mac Air", true, "09871482GF", 1500, 8);
computer1.print();

let computer2 = new Computer("MabBook Pro", true, "EF01220090", 1700, 16);
computer2.print();
