function getOptionsInitial() {

    var idValue = 1;
    $.get("/getOption", {idValue:idValue}, function(data) {

        var optionString = JSON.stringify(data);
	var optionParse = JSON.parse(optionString);
        var option1 = optionParse[0].option;
        var id1 = optionParse[0].id;
        
        $("#option1").append("<label class='options' id='labelOption1'><input type='checkbox' id='option1Chk' onclick='getResultsNewOptions1()'> " + option1 + "</label>");
        document.getElementById("option1Chk").value = id1;
    })

     var idValue = 2;
    $.get("/getOption", {idValue:idValue},  function(data) {

	 var optionString = JSON.stringify(data);
	 var optionParse = JSON.parse(optionString);
	 var option2 = optionParse[0].option;
         var id2 = optionParse[0].id;

	 $("#option2").append("<label class='options' id='labelOption2'><input type='checkbox' id='option2Chk' onclick='getResultsNewOptions2()'> " + option2 + "</label>");
         document.getElementById("option2Chk").value = id2;
     })

        var idValue = 3;
	$.get("/getOption", {idValue:idValue}, function(data) {

	  var optionString = JSON.stringify(data);
	  var optionParse = JSON.parse(optionString);
	  var option3 = optionParse[0].option;
          var id3 = optionParse[0].id;

	  $("#option3").append("<label class='options' id='labelOption3'><input type='checkbox' id='option3Chk' onclick='getResultsNewOptions3()'> " + option3 + "</label>");
	  document.getElementById("option3Chk").value = id3;
     
      })
}

function getGameInitial() {
    deleteOptions();
    initialScenarioSet();
    getOptionsInitial();
}

function playAgain() {
    deleteOptions();
    initialScenarioSet();
    getOptionsInitial();
}

function getResultsNewOptions1() {
    
    var resultValue = document.getElementById("option1Chk").value;
    
    getResultOptions(resultValue);      
     
}

function getResultsNewOptions2() {

    var resultValue = document.getElementById("option2Chk").value;

    getResultOptions(resultValue);

}

function getResultsNewOptions3() {

    var resultValue = document.getElementById("option3Chk").value;

    getResultOptions(resultValue);

}

function getNewOptions(rID) {
    
    var idValue = rID;

    $.get("/getNextOptions", {idValue:idValue}, function(data) {

       var optionString = JSON.stringify(data);
       var optionParse = JSON.parse(optionString);

       var option1 = optionParse[0].option;
       var option1ID = optionParse[0].oid;

       document.getElementById("labelOption1").innerHTML = "<label class='options' id='labelOption1'><input type='checkbox' id='option1Chk' onclick='getResultsNewOptions1()'> " + option1 + "</label>";
       document.getElementById("option1Chk").value = option1ID;
       
       var option2 = optionParse[1].option;
       var option2ID = optionParse[1].oid;

       document.getElementById("labelOption2").innerHTML = "<label class='options' id='labelOption2'><input type='checkbox' id='option2Chk' onclick='getResultsNewOptions1()'> " + option2 + "</label>";
       document.getElementById("option2Chk").value = option2ID;

       var option3 = optionParse[2].option;
       var option3ID = optionParse[2].oid;

       document.getElementById("labelOption3").innerHTML = "<label class='options' id='labelOption3'><input type='checkbox' id='option3Chk' onclick='getResultsNewOptions3()'> " + option3 + "</label>";
       document.getElementById("option3Chk").value = option3ID;

    
    })
}

function getResultOptions(resultValue) {

    $.get("/getResult", {resultValue:resultValue}, function(data) {

            var resultString = JSON.stringify(data);
            var resultParse = JSON.parse(resultString);
            var resultParseLength = resultParse.length;
            var randomNum = Math.floor(Math.random() * resultParseLength);
            var resultDisplay = resultParse[randomNum].result;
            var rID = resultParse[randomNum].rid;
            var resultFinal = resultParse[randomNum].resultfinal;
            var resultWin = resultParse[randomNum].resultwin;

            document.getElementById("initialScenario").innerHTML = "<h2>" + resultDisplay + "</h2>";

            if (resultFinal) {
		deleteOptions();
                if(resultWin) {
		   gameOverVisibleWin();		    
                } 
                else {
		    gameOverVisible();
                }
                playAgainButtonVisible();
            }
            else {
		getNewOptions(rID);
            }
	})

}

function deleteOptions() {
    $("#option1").empty();
    $("#option2").empty();
    $("#option3").empty();
}

function initialInvisible() {
    playAgainButtonInvisible();
}

function playAgainButtonVisible() {
    document.getElementById("option2").innerHTML = "<div class='div2'><button type='button' class='button1' id='playAgainButton' onclick='playAgain()'>Play Again</button></div>"
}

function initialScenarioInvisible() {
    document.getElementById("initialScenario").style.visibility = "collapse";
}

function initialScenarioVisible() {
    document.getElementById("initialScenario").style.visibility = "visible";
}

function initialScenarioSet() {
    document.getElementById("initialScenario").innerHTML = "<p class='p1'>You have been planning to embark on the journey of a lifetime to create a new home in the West. You've been accumulating supplies and acquired a sturdy wagon and a healthy team of oxen. You are not quite ready to leave, though. You haven't said goodbye to all your friends and family, you haven't fully inspected your wagon, and you haven't closed the sale on your current farm. You need a little more time before you leave. However, you've recently heard that your neighbor's oxen have taken ill. Plus, someone in town just contracted small pox. Reason would dictate you should leave sooner rather than later. Do you...</p>";

}

function gameOverVisible() {
    document.getElementById("option1").innerHTML = "<h1>Game Over</h1>";    
}

function gameOverVisibleWin() {
    document.getElementById("option1").innerHTML = "<h1>You Win!</h1>";
}