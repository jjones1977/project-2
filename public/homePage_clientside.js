function getOptionsInitial() {
    buttonInvisible();
    initialScenarioVisible();

    $.get("/getOption1", function(data) {

        var optionString = JSON.stringify(data);
	var optionParse = JSON.parse(optionString);
        var option1 = optionParse[0].option;
        var id1 = optionParse[0].id;
        
        $("#option1").append("<label class='options'><input type='checkbox' id='option1' onclick='getResultsNewOptions1()'> " + option1 + "</label>");
        document.getElementById("option1").value = id1;
    })

     $.get("/getOption2", function(data) {

	 var optionString = JSON.stringify(data);
	 var optionParse = JSON.parse(optionString);
	 var option2 = optionParse[0].option;
         var id2 = optionParse[0].id;

	 $("#option2").append("<label class='options'><input type='checkbox' id='option2' onclick='getResultsNewOptions2()'> " + option2 + "</label>");
         document.getElementById("option2").value = id2;
     })

     $.get("/getOption3", function(data) {

	  var optionString = JSON.stringify(data);
	  var optionParse = JSON.parse(optionString);
	  var option3 = optionParse[0].option;
          var id3 = optionParse[0].id;

	  $("#option3").append("<input type='checkbox' id='option3' onclick='getResultsNewOptions3()'><label class='options'> " + option3 + "</label>");
          document.getElementById("option3").value = id3;
     
      })
}

function getResultsNewOptions1() {

    var resultValue = document.getElementById("option1").value;

    removeOptions();

    $.get("/getResult", {resultValue:resultValue}, function(data) {

            var resultString = JSON.stringify(data);
            var resultParse = JSON.parse(resultString);
            var resultDisplay = resultParse[0].result;

            document.getElementById("initialScenario").innerHTML = resultDisplay;
    })
}

function getResultsNewOptions2() {

    var resultValue = document.getElementById("option2").value;

    removeOptions();

    $.get("/getResult", {resultValue:resultValue}, function(data) {

            var resultString = JSON.stringify(data);
            var resultParse = JSON.parse(resultString);
            var resultDisplay = resultParse[0].result;

            document.getElementById("initialScenario").innerHTML = resultDisplay;
    })
}

function getResultsNewOptions3() {
 
    var resultValue = document.getElementById("option3").value;

    removeOptions();

    $.get("/getResult", {resultValue:resultValue}, function(data) {

	    var resultString = JSON.stringify(data);
	    var resultParse = JSON.parse(resultString);
	    var resultDisplay = resultParse[0].result;

	    document.getElementById("initialScenario").innerHTML = resultDisplay;
	})
}

function removeOptions() {
    $("#option1").remove();
    $("#option2").remove();
    $("#option3").remove();
}

function initialInvisible() {
    initialScenarioInvisible();
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