// generate your random here
// dice 1
var randomNumber1 = (Math.random() * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

// dice 2
var randomNumber2 = (Math.random() * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

// dice1 - construct the image name
var img1Name = "images/" + "dice" + randomNumber1 + ".png";
// dice2 - construct the image name
var img2Name = "images/" + "dice" + randomNumber2 + ".png";

// change the image based on the image name above
document.querySelector(".img1").setAttribute("src", img1Name);
document.querySelector(".img2").setAttribute("src", img2Name);

// add logic to announce results...
if (randomNumber1 < randomNumber2) {
    console.log("Player 2 wins!");
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else if (randomNumber1 === randomNumber2) {
    console.log("Draw!");
    document.querySelector("h1").innerHTML = "Draw!"
}
else {
    console.log ("Player 1 wins!");
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
