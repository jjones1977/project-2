const express = require('express');
const path = require("path");
const app = express();

const optionsController = require("./Controllers/getOptions.js");

const { Pool } = require("pg");
const port = process.env.PORT || 5000;

const connectionString = process.env.DATABASE_URL || "postgres://xcoifhfdhovwqc:99e7c2254039c80310cedc3bcc8bd4b04b8f819671bcd0949cd357d26decdfcd@ec2-52-23-14-156.compute-1.amazonaws.com:5432/d5055h7ookutr3?ssl=true";

const pool = new Pool({connectionString: connectionString});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(port, function() {
	console.log('Node is running on port', app.get('port'));
});

app.get('/getOption', optionsController.getOption);
app.get('/getResult', optionsController.getResult);
app.get('/getNextOptions', optionsController.getNextOptions);