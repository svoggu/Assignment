let coinFlip = Math.round(Math.random()) + 1;
// let  coinFlip = prompt("Heads or Tails?");

// let coinFlip = let choice;

// var choice = Math.random();
let choice = prompt("Heads or Tails");

if (coinFlip == 1) {
    let flipResult = "heads";
} else {
   let flipResult = "tails";
}

if (flipResult == choice) {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose tails...you lose!");
    } else {
        alert("The flip was tails and you chose heads...you lose!");
    }
}



