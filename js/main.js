var correctAnswer = "hippo";
correctAnswer = correctAnswer.toUpperCase();
var guessCount = 1;

function submitGuess() {
    var inputFrame = document.getElementById("guessInput");
    var guess = "";
    for (var i = 0; i < inputFrame.length; i++) {
        if (inputFrame.elements[i].length = 5){
            guess += inputFrame.elements[i].value;
        }
    }
    if (guess != "") {
        guess = guess.toUpperCase();
        for (var i = 0; i < guess.length; i++) {
            if (guess.charAt(i) == correctAnswer.charAt(i)) {
                document.getElementById(guessCount + "-" + i).classList.add("correct");
                document.getElementById(guessCount + "-" + i).classList.remove("default");
            }
            else {
                for (var j = 0; j < guess.length; j++) {
                    if (guess.charAt(i) == correctAnswer.charAt(j)) {
                        document.getElementById(guessCount + "-" + i).classList.add("somewhereElse");
                        document.getElementById(guessCount + "-" + i).classList.remove("default");
                    }
                }
            }
        }
    }
    guessCount++;
    console.log(guess);
    console.log(correctAnswer);
}