function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i - 0] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
var result1 = addNumbers();
var result2 = addNumbers(3);
var result3 = addNumbers(3, 1, 18);
var result4 = addNumbers(3, 1, 18, 20);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
