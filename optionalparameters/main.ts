
// function addNumbers(number1, number2) {
//   return number1 + number2;
// }
//
// let result = addNumbers(5, 5);
// console.log(result);
//

// OPTIONAL PARAMETERS
// function printError(errorMessage?: string) {
//   if (errorMessage) {
//     console.log("Error Message : " + errorMessage);
//   } else {
//     console.log("Error Message : Something went wrong!");
//   }
// }
//
// printError();
// printError("bad, bad, code");

// DEFAULT PARAMETER VALUES
// function printError(errorMessage: string = "Something went wrong!"){
//   console.error('error: ' + errorMessage);
// }
//
// printError();
// printError("bad, bad, code");

// REST PARAMETERS
function addNumbers(...numbers: number[]) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

let result1 = addNumbers();
let result2 = addNumbers(3);
let result3 = addNumbers(3, 1, 18);
let result4 = addNumbers(3, 1, 18, 20);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
