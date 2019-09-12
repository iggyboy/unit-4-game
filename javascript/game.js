//creating global variables
var randomNum = 0;
var score = 0;
var wins = 0;
var losses = 0;

//creating variables to store crystal values
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;



//resets values on new round
function reset() {
    score = 0;
    assignValues();
    printer();
}

//generates a random number between min and max values
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//asigns random values to the target score and each crystal
function assignValues() {
    randomNum = getRandom(19, 120);
    crystal1 = getRandom(1, 12);
    crystal2 = getRandom(1, 12);
    crystal3 = getRandom(1, 12);
    crystal4 = getRandom(1, 12);
}

//adds value of clicked crystal to score, and checks if player won, lost, or neither. Also plays a certified banger 👌
function getClick(num) {
    $("#banger")[0].play();
    score += num;
    if (score === randomNum) {
        wins++;
        $("#message").text("You win!")
        score = 0;
        reset();
    }
    else if (score > randomNum) {
        losses++;
        $("#message").text("You lose!")
        score = 0;
        reset();
    }
}

//prints all relevant values to their respective positions on the page
function printer() {
    $("#target-score").text("Target: " + randomNum);
    $("#wincounter").text("Wins: " + wins + " Losses: " + losses);
    $("#score-counter").text(score);
}

//click handler functions
$("#crystal1").on("click", function () {
    getClick(crystal1);
    printer();
});
$("#crystal2").on("click", function () {
    getClick(crystal2);
    printer();
});
$("#crystal3").on("click", function () {
    getClick(crystal3);
    printer();
});
$("#crystal4").on("click", function () {
    getClick(crystal4);
    printer();
});



//runs when page loads
reset();