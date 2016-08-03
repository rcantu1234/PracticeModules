var FirstNameSpace;
(function (FirstNameSpace) {
    function doSomething() {
        console.log("I was declared first.");
    }
    doSomething();
})(FirstNameSpace || (FirstNameSpace = {}));
var SecondNameSpace;
(function (SecondNameSpace) {
    function doSomething() {
        console.log("I was declared second.");
    }
    doSomething();
})(SecondNameSpace || (SecondNameSpace = {}));
