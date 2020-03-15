const express = require('express');
const app = express();
const { Pool } = require("pg"); 
const port = process.env.PORT || 5000;

const connectionString = process.env.DATABASE_URL || "postgres://xcoifhfdhovwqc:99e7c2254039c80310cedc3bcc8bd4b04b8f819671bcd0949cd357d26decdfcd@ec2-52-23-14-156.compute-1.amazonaws.com:5432/d5055h7ookutr3?ssl=true";

const pool = new Pool({connectionString: connectionString});


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(port, function() {
	console.log('Node is running on port', app.get('port'));
});

app.get('/getGame', getGame);

function getGame(request, response) {
    
    const id = 1;

    getOptionFromDb(id, function(error, result) {
	    
	    if (error || result == null || result.length != 1) {
		response.status(500).json({success: false, data: error});
	    } else {
		const option = result[0];
		response.status(200).json(option);
	    }
     });

    
}

function getOptionFromDb(id, callback) {
    console.log("Getting person from DB with id: " + id);

    const sql = "SELECT id, option FROM options WHERE id = $1::int";

    const params = [id];

    pool.query(sql, params, function(err, result) {
	    if (err) {
		console.log("Error in query: ")
		    console.log(err);
		callback(err, null);
	    }

	    console.log("Found result: " + JSON.stringify(result.rows));
	    var optionString = JSON.stringify(result.rows);
	    var optionParse = JSON.parse(optionString);
	    var option1 = optionParse[0].option;
	    console.log(option1);

	    callback(null, result.rows);              

    });

   
}




app.get('/getGame1', function(req, res) {
        var option1 = "test";
        
	var params = {option1: option1};

	res.render("pages/gamePlay", params);   
});

