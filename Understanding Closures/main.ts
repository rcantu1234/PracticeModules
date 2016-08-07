function generateTemplateEmail(customerName) {
  return function (productName) {
    console.log(`Dear ${customerName}, thank you for your positive review of our ${productName} product.`);
  }
}

let email = generateTemplateEmail("Roel");
email("Coffee Maker");
email("Toaster");

// function addClickCounter(button: HTMLButtonElement) {
//   let clicks = 0;
//
//   button.addEventListener("click", function(e) {
//     e.preventDefault();
//
//     clicks++;
//     button.innerHTML = `${clicks} clicks`;
//   });
// }
//
// let buttons = document.getElementsByTagName("button");
//
// for (let i = 0; i < buttons.length; i++) {
//   addClickCounter(buttons[i]);
// }

// // let a = 1;
// // let b = 2;
// //
// // function doSomething() {
// //   let a = 3;
// //   console.log(a + b);
// // }
// //
// // doSomething();
//
//

// let a = 5;
// function createFunction() {
//     let a = 1;
//     return function () {
//         a++;
//         console.log(a);
//     }
// }
//
//
// let doSomething = createFunction();
// doSomething();
// console.log(a);
