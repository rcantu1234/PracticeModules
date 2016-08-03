// WHY YOU NEED NAMESPACES -- GIVES ERROR!!!!
// function doSomething() {
//   console.log("I was declared first!")
// }
// doSomething();
// function doSomething() {
//   console.log("I was declared second!")
// }
// doSomething();

// REVEALING MODULE PATTERN
// (function () {
//
//   function doSomething() {
//     console.log("I was declared first!");
//   }
//   doSomething();
// })();
//
// (function () {
//
//   function doSomething() {
//     console.log("I was declared second!");
//   }
//   doSomething();
// })();

// NAMESPACES
namespace FirstNameSpace {
  function doSomething() {
    console.log("I was declared first.");
  }
  doSomething();
}

namespace SecondNameSpace {
  function doSomething() {
    console.log("I was declared second.");
  }
  doSomething();
}
