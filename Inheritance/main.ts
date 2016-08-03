abstract class Vehicle {

  public report() {
    console.log(`Year : ${this.year}`);
    console.log(`Make : ${this.make}`);
    console.log(`Model : ${this.model}`);
  }

  constructor(public year: number, public make: string, public model: string) {}
}

class Car extends Vehicle {
  constructor(year: number, make: string, model: string){
    super(year, make, model);
  }
}

class Truck extends Vehicle {

  public report() {
    super.report();
    console.log(`Towing Capacity : ${this.towingCapacity}`);
  }
  constructor(year: number, make: string, model: string, towingCapacity: number) {
    super(year, make, model);
  }
}

let myCar = new Car(2015, "Toyota", "Camry");
myCar.report();

let myTruck = new Truck(2016, "Dodge", "Ram", 5000);
myTruck.report();
