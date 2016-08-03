var Computer = (function () {
    function Computer(model, mouse, serialNo, price, RAM) {
        this.model = model;
        this.mouse = mouse;
        this.serialNo = serialNo;
        this.price = price;
        this.RAM = RAM;
    }
    Computer.prototype.print = function () {
        console.log(this.model + "\n" + this.mouse + "\n" + this.serialNo + "\n" + this.cost(this.price) + "\n" + this.RAM);
    };
    Computer.prototype.cost = function () {
        return this.price + (this.price * 0.08);
    };
    return Computer;
}());
var computer1 = new Computer("Mac Air", true, "09871482GF", 1500, 8);
computer1.print();
var computer2 = new Computer("MabBook Pro", true, "EF01220090", 1700, 16);
computer2.print();
