// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
img_width = 300;
img_height = 100;

var img_image;
var img_imgTag;

img_x = 100;
img_y = 100;

function add() {
    img_imgTag = new Image(); //defining a variable with a new image
    img_imgTag.onload = uploadimg; // setting a function, onloading this variable
    img_imgTag.src = img_image; // load image
}

function uploadimg() {

    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown);
//Write a code to grab the key-pressed event

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((keyPressed >= 106 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
        aplhabetkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED AN ALPHABET KEY";
        console.log("ALPHABET KEY");
    }
    //write a code to check the type of key pressed
    else if ((keyPressed >= 48 && keyPressed <= 57) || (keyPressed >= 97 && keyPressed <= 106)) {
        numberkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED A NUMBER KEY";
        console.log("NUMBER KEY");
    }
    //d
    else if ((keyPressed >= 37 && keyPressed <= 40)) {
        arrowkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED AN ARROW KEY";
        console.log("ARROW KEY");
    }
    //d
    else if ((keyPressed == 17 || 18 || 27)) {
        specialkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED A SPECIAL KEY";
        console.log("SPECIAL KEY");
    }
    //D
    else {
        otherkey();
        document.getElementById("d1").innerHTML = "YOU PRESSED SOME OTHER KEY";
        console.log("OTHER KEY");
    }
}

function aplhabetkey() {
    img_image = "Alpkey.png";
    add();
}

function numberkey() {
    img_image = "numkey.png";
    add();
}

function arrowkey() {
    img_image = "arrkey.png";
    add();
}

function specialkey() {
    img_image = "spkey.png";
    add();
}

function otherkey() {
    img_image = "otherkey.png";
    add();
}