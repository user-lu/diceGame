let firstNumber; 

let secondNumber;

function firstRoll() {
    firstNumber = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage = "dice" + firstNumber + ".png";
    let randomImageSource = "images/" + randomDiceImage;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);
}

function secondRoll() {
    secondNumber = Math.floor(Math.random() * 6) + 1;
    let randomImageSource2 = "images/dice" + secondNumber + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
}

function rollDice() {
    firstRoll();
    secondRoll();

    if (firstNumber > secondNumber) {
        document.getElementById("winner").innerHTML = "Player 1 Wins!";
    }
    else if (firstNumber < secondNumber) {
        document.getElementById("winner").innerHTML = "Player 2 Wins!";
    }
    else if (firstNumber === secondNumber) {
        document.getElementById("winner").innerHTML = "It's a Draw!";
    }
}

document.getElementById("winner").innerHTML = "Roll the Dice to see who wins!";

document.getElementById("diceBtn").onclick = rollDice;
