function generateTemplateEmail(customerName) {
    return function (productName) {
        console.log("Dear " + customerName + ", thank you for your positive review of our " + productName + " product.");
    };
}
var email = generateTemplateEmail("Roel");
email("Coffee Maker");
email("Toaster");
