$(document).ready(function() {

    var computerNumber = "";
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    var value1;
    var value2;
    var value2;
    var value4;

    $("#button-start").on("click", function() {

        computerNumber = Math.floor(Math.random()*200) + 1;
        totalScore = 0;
        $("#target-score").html("Target Score: " + computerNumber); 
        $("#your-score").html("Your Score: " + totalScore); 
        $("#wins").html("Wins: " + wins); 
        $("#losses").html("Losses: " + losses); 
        value1 = Math.floor(Math.random()*20) + 1;
        value2 = Math.floor(Math.random()*20) + 1;
        value3 = Math.floor(Math.random()*20) + 1;
        value4 = Math.floor(Math.random()*20) + 1;

    })

}