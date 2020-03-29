function getOptionsInitial() {
    buttonInvisible();
    initialScenarioVisible();

    var idValue = 1;
    $.get("/getOption", {idValue:idValue}, function(data) {

        var optionString = JSON.stringify(data);
	var optionParse = JSON.parse(optionString);
        var option1 = optionParse[0].option;
        var id1 = optionParse[0].id;
        
        $("#option1").append("<label class='options' id='labelOption1'><input type='checkbox' id='option1' onclick='getResultsNewOptions1()'> " + option1 + "</label>");
        document.getElementById("option1").value = id1;
    })

     var idValue = 2;
    $.get("/getOption", {idValue:idValue},  function(data) {

	 var optionString = JSON.stringify(data);
	 var optionParse = JSON.parse(optionString);
	 var option2 = optionParse[0].option;
         var id2 = optionParse[0].id;

	 $("#option2").append("<label class='options' id='labelOption2'><input type='checkbox' id='option2' onclick='getResultsNewOptions2()'> " + option2 + "</label>");
         document.getElementById("option2").value = id2;
     })

        var idValue = 3;
	$.get("/getOption", {idValue:idValue}, function(data) {

	  var optionString = JSON.stringify(data);
	  var optionParse = JSON.parse(optionString);
	  var option3 = optionParse[0].option;
          var id3 = optionParse[0].id;

	  $("#option3").append("<label class='options' id='labelOption3'><input type='checkbox' id='option3' onclick='getResultsNewOptions3()'> " + option3 + "</label>");
	  document.getElementById("option3").value = id3;
     
      })
}

function getResultsNewOptions1() {
    
    var resultValue = document.getElementById("option1").value;
    
    getResultOptions(resultValue);      
     
}

function getResultsNewOptions2() {

    var resultValue = document.getElementById("option2").value;

    getResultOptions(resultValue);

}

function getResultsNewOptions3() {

    var resultValue = document.getElementById("option3").value;

    getResultOptions(resultValue);

}

function getNewOptions(rID) {
    
    var idValue = rID;

    $.get("/getNextOptions", {idValue:idValue}, function(data) {

       var optionString = JSON.stringify(data);
       var optionParse = JSON.parse(optionString);

       var option1 = optionParse[0].option;
       var option1ID = optionParse[0].oid;

       document.getElementById("labelOption1").innerHTML = "<label class='options' id='labelOption1'><input type='checkbox' id='option1' onclick='getResultsNewOptions1()'> " + option1 + "</label>";
       document.getElementById("option1").value = option1ID;
       
       var option2 = optionParse[1].option;
       var option2ID = optionParse[1].oid;

       document.getElementById("labelOption2").innerHTML = "<label class='options' id='labelOption2'><input type='checkbox' id='option2' onclick='getResultsNewOptions1()'> " + option2 + "</label>";
       document.getElementById("option2").value = option2ID;

       var option3 = optionParse[2].option;
       var option3ID = optionParse[2].oid;

       document.getElementById("labelOption3").innerHTML = "<label class='options' id='labelOption3'><input type='checkbox' id='option3' onclick='getResultsNewOptions3()'> " + option3 + "</label>";
       document.getElementById("option3").value = option3ID;

    
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

            document.getElementById("initialScenario").innerHTML = resultDisplay;
            document.getElementById("initialScenario").className = "h2";

            if (resultFinal) {
		gameOverVisible();
		deleteOptions();
            }
            else {
		getNewOptions(rID);
            }
	})

}

function deleteOptions() {
    $("#option1").remove();
    $("#option2").remove();
    $("#option3").remove();
}

function initialInvisible() {
    initialScenarioInvisible();
    gameOverInvisible();
}

function buttonInvisible() {
    document.getElementById("getGameButton").style.visibility = "collapse";
}

function initialScenarioInvisible() {
    document.getElementById("initialScenario").style.visibility = "collapse";
}

function initialScenarioVisible() {
    document.getElementById("initialScenario").style.visibility = "visible";
}

function gameOverInvisible() {
    document.getElementById("gameOver").style.visibility = "collapse";
}

function gameOverVisible() {
    document.getElementById("gameOver").style.visibility = "visible";
}