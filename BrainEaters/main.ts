// create canvas
let canvas = <HTMLCanvasElement>document.getElementById('canvas');
let context = canvas.getContext("2d");

// CREATE MAZE
context.fillStyle = "white";
context.fillRect(50, 25, 700, 70);
context.fillRect(50, 150, 700, 70);
context.fillRect(50, 275, 700, 70);
context.fillRect(50, 400, 700, 70);


// MAZE OPENINGS
// in between level one and two
//maze opening level1 first
let mo11 = 50 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo11, 95, 40, 55);
console.log(mo11);
//maze opening level1 second
let mo12 = 283 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo12, 95, 40, 55);
console.log(mo12);
//maze opening level1 third
let mo13 = 516 + (Math.floor(Math.random() * 195));
context.fillStyle = "white";
context.fillRect(mo13, 95, 40, 55);
console.log(mo13);

//maze opening level2 second
let mo21 = 50 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo21, 220, 40, 55);
//maze opening level1 second
let mo22 = 283 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo22, 220, 40, 55);
//maze opening level1 third
let mo23 = 516 + (Math.floor(Math.random() * 195));
context.fillStyle = "white";
context.fillRect(mo23, 220, 40, 55);

//maze opening level3 first
let mo31 = 50 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo31, 345, 40, 55);
//maze opening level1 second
let mo32 = 283 + (Math.floor(Math.random() * 194));
context.fillStyle = "white";
context.fillRect(mo32, 345, 40, 55);
//maze opening level1 third
let mo33 = 516 + Math.floor(Math.random() * 195);
context.fillStyle = "white";
context.fillRect(mo33, 345, 40, 55);

// EXIT FORMAT
context.font = "25px TimesNewRoman";
context.fillStyle = "red";
context.fillText("EXIT", 680, 445);

// get avatar
let img1 = new Image();
img1.src = "avatar.png";
let pos1x = 50;
let pos1y = 25;

// get zombie image
let img2 = new Image();
img2.src = "zombie.png";
let pos2x = 50 + (Math.floor(Math.random() * 650));
let pos2y = 140;

// get zombie image
let img3 = new Image();
img3.src = "zombie.png";
let pos3x = 50 + (Math.floor(Math.random() * 650));
let pos3y = 265;

// get zombie image
let img4 = new Image();
img4.src = "zombie.png";
let pos4x = 50 + (Math.floor(Math.random() * 650));
let pos4y = 390;

// when all images loaded, start drawing
window.addEventListener('load', () => {
    context.drawImage(img1, pos1x, pos1y);
    context.drawImage(img2, pos2x, pos2y);
    context.drawImage(img3, pos3x, pos3y);
    context.drawImage(img4, pos4x, pos4y);

    // var interval = setInterval(function() {
    //
    //   let img2 = new Image();
    //   img2.src = "zombie.png";
    //   var x = 50 + (Math.floor(Math.random() * 650));
    //   var y = 140;
    //
    //     if (x+5>=722) {
    //       img2.src = "zombie.png";
    //       context.fillStyle = "white";
    //       context.fillRect(x, y, 0, 0);
    //     } else {
    //       img2.src = "zombie.png";
    //       context.fillStyle = "white";
    //       context.fillRect(x, y, 40, 70);
    //       x += 5;
    //       context.drawImage(img2, x, y);
    //       x++;
    //     }
    //
    //
    //   return function () {
    //     //context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //     context.drawImage(img2, x, y);
    //
    //     x += 1;
    //     if (x > context.canvas.width) {
    //       x = 0;
    //     }
    //   };
    // }(), 1000/20);
  // }), false, false;

});
// LISTENING FOR KEY PRESS
document.addEventListener("keydown", function(e) {
  e.preventDefault();

  let keycode = e.keyCode;

  console.log(keycode);

  // MOVE RIGHT
  if (keycode === 39) {
    if (pos1x+5>=722) {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 0, 0);
    } else {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 28, 70);
      pos1x += 5;
      context.drawImage(img1, pos1x, pos1y);
      pos1x++;
    }

    if (pos2x+5>=722) {
      img2.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos2x, pos2y, 0, 0);
    } else {
      img2.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos2x, pos2y, 28, 70);
      pos2x += 5;
      context.drawImage(img2, pos2x, pos2y);
      pos2x++;
    }

    if (pos3x+5>=722) {
      img3.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos3x, pos3y, 0, 0);
    } else {
      img3.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos3x, pos3y, 28, 70);
      pos3x += 5;
      context.drawImage(img3, pos3x, pos3y);
      pos3x++;
    }

    if (pos4x+5>=722) {
      img4.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos4x, pos4y, 0, 0);
    } else {
      img4.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos4x, pos4y, 28, 70);
      pos4x += 5;
      context.drawImage(img4, pos4x, pos4y);
      pos4x++;
    }
  }

  // MOVE LEFT
  if (keycode === 37) {
    if (pos1x+5 <= 57) {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 0, 0);
    } else {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 28, 70);
      pos1x += -5;
      context.drawImage(img1, pos1x, pos1y);
    }

    if (pos2x+5<=57) {
      img2.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos2x, pos2y, 0, 0);
    } else {
      img2.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos2x, pos2y, 28, 70);
      pos2x += -5;
      context.drawImage(img2, pos2x, pos2y);
      pos2x++;
    }

    if (pos3x+5<=57) {
      img3.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos3x, pos3y, 0, 0);
    } else {
      img3.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos3x, pos3y, 28, 70);
      pos3x += -5;
      context.drawImage(img3, pos3x, pos3y);
      pos3x++;
    }

    if (pos4x+5<=57) {
      img4.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos4x, pos4y, 0, 0);
    } else {
      img4.src = "zombie.png";
      context.fillStyle = "white";
      context.fillRect(pos4x, pos4y, 28, 70);
      pos4x += -5;
      context.drawImage(img4, pos4x, pos4y);
      pos4x++;
    }
  }

  // MOVE DOWN
  if (keycode === 40) {
    if (pos1y+5 > 400)  {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 0, 0);
    } else {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 28, 70);
      pos1y += 5;
      context.drawImage(img1, pos1x, pos1y);
    }
   }

   // MOVE UP
  if (keycode === 38) {
    img1.src = "avatar.png";
    if (pos1y + 5 < 35) {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 0, 0);
    } else {
      img1.src = "avatar.png";
      context.fillStyle = "white";
      context.fillRect(pos1x, pos1y, 28, 70);
      pos1y -= 5;
      context.drawImage(img1, pos1x, pos1y);
    }
  }
})
