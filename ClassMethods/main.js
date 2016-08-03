var Bear = (function () {
    function Bear() {
    }
    Bear.prototype.makeSound = function () {
        console.log("Grrr!");
    };
    return Bear;
}());
var Mouse = (function () {
    function Mouse() {
    }
    Mouse.prototype.makeSound = function () {
        console.log("Squeak!");
    };
    return Mouse;
}());
var yogi = new Bear();
yogi.makeSound();
var mickey = new Mouse();
mickey.makeSound();
