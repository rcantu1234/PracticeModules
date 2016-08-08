var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(50, 25, 700, 70);
context.fillRect(50, 150, 700, 70);
context.fillRect(50, 275, 700, 70);
context.fillRect(50, 400, 700, 70);
var mo11 = 50 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo11, 95, 40, 55);
console.log(mo11);
var mo12 = 283 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo12, 95, 40, 55);
console.log(mo12);
var mo13 = 516 + (Math.floor(Math.random() * 195));
context.fillStyle = "white";
context.fillRect(mo13, 95, 40, 55);
console.log(mo13);
var mo21 = 50 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo21, 220, 40, 55);
var mo22 = 283 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo22, 220, 40, 55);
var mo23 = 516 + (Math.floor(Math.random() * 195));
context.fillStyle = "white";
context.fillRect(mo23, 220, 40, 55);
var mo31 = 50 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo31, 345, 40, 55);
var mo32 = 283 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo32, 345, 40, 55);
var mo33 = 516 + Math.floor(Math.random() * 195);
context.fillStyle = "white";
context.fillRect(mo33, 345, 40, 55);
context.font = "25px TimesNewRoman";
context.fillStyle = "red";
context.fillText("EXIT", 680, 445);
var img1 = new Image();
img1.src = "avatar.png";
var pos1x = 50;
var pos1y = 25;
var img2 = new Image();
img2.src = "zombie.png";
var pos2x = 50 + (Math.floor(Math.random() * 650));
var pos2y = 140;
var img3 = new Image();
img3.src = "zombie.png";
var pos3x = 50 + (Math.floor(Math.random() * 650));
var pos3y = 265;
var img4 = new Image();
img4.src = "zombie.png";
var pos4x = 50 + (Math.floor(Math.random() * 650));
var pos4y = 390;
window.addEventListener('load', function () {
    context.drawImage(img1, pos1x, pos1y);
    context.drawImage(img2, pos2x, pos2y);
    context.drawImage(img3, pos3x, pos3y);
    context.drawImage(img4, pos4x, pos4y);
});
document.addEventListener("keydown", function (e) {
    e.preventDefault();
    var keycode = e.keyCode;
    console.log(keycode);
    if (keycode === 39) {
        if (pos1x + 5 >= 722) {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 0, 0);
        }
        else {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 28, 70);
            pos1x += 5;
            context.drawImage(img1, pos1x, pos1y);
            pos1x++;
        }
    }
    if (keycode === 37) {
        if (pos1x + 5 <= 57) {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 0, 0);
        }
        else {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 28, 70);
            pos1x += -5;
            context.drawImage(img1, pos1x, pos1y);
        }
    }
    if (keycode === 40) {
        if (pos1y + 5 > 400) {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 0, 0);
        }
        else {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 28, 70);
            pos1y += 5;
            context.drawImage(img1, pos1x, pos1y);
        }
    }
    if (keycode === 38) {
        img1.src = "avatar.png";
        if (pos1y + 5 < 35) {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 0, 0);
        }
        else {
            img1.src = "avatar.png";
            context.fillStyle = "white";
            context.fillRect(pos1x, pos1y, 28, 70);
            pos1y -= 5;
            context.drawImage(img1, pos1x, pos1y);
        }
    }
});
