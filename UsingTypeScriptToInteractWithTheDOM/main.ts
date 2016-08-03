let myForm = document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let inputField = <HTMLInputElement>document.getElementById("firstName");
  let firstName = inputField.value;

  console.log(firstName);
});
