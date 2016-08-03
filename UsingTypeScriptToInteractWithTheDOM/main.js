var myForm = document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var inputField = document.getElementById("firstName");
    var firstName = inputField.value;
    console.log(firstName);
});
