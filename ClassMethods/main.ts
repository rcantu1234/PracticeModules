class Bear {
  makeSound() {
    console.log("Grrr!");
  }
}

class Mouse {
  makeSound() {
    console.log("Squeak!");
  }
}

let yogi = new Bear();
yogi.makeSound();

let mickey = new Mouse();
mickey.makeSound();
