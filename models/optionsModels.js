const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://xcoifhfdhovwqc:99e7c2254039c80310cedc3bcc8bd4b04b8f819671bcd0949cd357d26decdfcd@ec2-52-23-14-156.compute-1.amazonaws.com:5432/d5055h7ookutr3?ssl=true";

const pool = new Pool({connectionString: connectionString});


function getOptionFromDb(id, callback) {

    const sql = "SELECT id, option FROM options WHERE id = $1::int";

    const params = [id];

    pool.query(sql, params, function(err, result) {
            if (err) {
                console.log("Error in query: ")
                    console.log(err);
                callback(err, null);
            }

            console.log("Found result: " + JSON.stringify(result.rows));

            callback(null, result.rows);

        });

}

function getResultFromDb(id, callback) {

   
    const sql = "SELECT results.result AS result, results.id AS rID, results.resultfinal AS resultfinal FROM results INNER JOIN optionsresults on results.id = optionsresults.resultid WHERE optionsresults.optionid = $1::int";

    const params = [id];

    pool.query(sql, params, function(err, result) {
            if (err) {
                console.log("Error in query: ")
                    console.log(err);
                callback(err, null);
            }

            console.log("Found result: " + JSON.stringify(result.rows));

            callback(null, result.rows);

        });

}

function getNextOptionsFromDb(id, callback) {

    const sql = "Select options.option, options.id as oid FROM options INNER JOIN resultsoptions on options.id = resultsoptions.optionid WHERE resultsoptions.resultid = $1::int";

    const params = [id];

    pool.query(sql, params, function(err, result) {
            if (err) {
                console.log("Error in query: ")
                    console.log(err);
                callback(err, null);
            }

            console.log("Found result: " + JSON.stringify(result.rows));

            callback(null, result.rows);

        });

}


module.exports = {
    getOptionFromDb: getOptionFromDb,
    getResultFromDb: getResultFromDb,
    getNextOptionsFromDb: getNextOptionsFromDb
}