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

        computerNumber = Math.floor(Math.random()*100) + 20;
        totalScore = 0;
        $("#target-score").html("Target Score: " + computerNumber); 
        $("#your-score").html("Your Score: " + totalScore); 
        $("#wins").html("Wins: " + wins); 
        $("#losses").html("Losses: " + losses); 
        value1 = Math.floor(Math.random()*11) + 2;
        value2 = Math.floor(Math.random()*11) + 2;
        value3 = Math.floor(Math.random()*11) + 2;
        value4 = Math.floor(Math.random()*11) + 2;

    })

    $("#button-1").on("click", function() {

        totalScore = totalScore + value1;

        if (totalScore < computerNumber) {
            totalScore = totalScore;
            $("#your-score").html("Your Score: " + totalScore);       
        };

        if (totalScore > computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);
            losses++
            $("losses").html("Losses: " + losses);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
            value1 = 0;
        }

        if (totalScore === computerNumber) {
            $("#total-score").html("Your Score: " + totalScore);
            wins++
            $("#wins").html("Wins: " + wins);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

    })

    $("#button-2").on("click", function() {

        totalScore = totalScore + value2;
    
        if (totalScore < computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);             
        };

        if (totalScore > computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);
            losses++
             $("losses").html("Losses: " + losses);
             alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

        if (totalScore === computerNumber) {
            $("#total-score").html("Your Score: " + totalScore);
            wins++
            $("#wins").html("Wins: " + wins);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

    })

    $("#button-3").on("click", function() {

        totalScore = totalScore + value3;
    
        if (totalScore < computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);             
        };

        if (totalScore > computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);
            losses++
            $("losses").html("Losses: " + losses);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

        if (totalScore === computerNumber) {
            $("#total-score").html("Your Score: " + totalScore);
            wins++
            $("#wins").html("Wins: " + wins);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

    })

    $("#button-4").on("click", function() {

        totalScore = totalScore + value4;
    
        if (totalScore < computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);             
        };

        if (totalScore > computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);
            losses++
            $("losses").html("Losses: " + losses);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

        if (totalScore === computerNumber) {
            $("#your-score").html("Your Score: " + totalScore);
            wins++
            $("#wins").html("Wins: " + wins);
            alert("Press start to play again!")
            computerNumber = "";
            totalScore = 0;
        }

    })

});