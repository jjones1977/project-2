const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgres://xcoifhfdhovwqc:99e7c2254039c80310cedc3bcc8bd4b04b8f819671bcd0949cd357d26decdfcd@ec2-52-23-14-156.compute-1.amazonaws.com:5432/d5055h7ookutr3?ssl=true";

const pool = new Pool({connectionString: connectionString});

const optionModels = require("../models/optionsModels.js");


function getOption1(request, response) {

    id = 1;

    optionModels.getOptionFromDb(id, function(error, result) {

            if (error || result == null || result.length != 1) {
                response.status(500).json({success: false, data: error});
            } else {
                const option = result[0];
                response.status(200).json(result);
            }

	});
}

function getOption2(request, response) {

    id = 2;

    optionModels.getOptionFromDb(id, function(error, result) {

            if (error || result == null || result.length != 1) {
                response.status(500).json({success: false, data: error});
            } else {
                const option = result[0];
                response.status(200).json(result);
            }

        });
}

function getOption3(request, response) {

    id = 3;

    optionModels.getOptionFromDb(id, function(error, result) {

            if (error || result == null || result.length != 1) {
                response.status(500).json({success: false, data: error});
            } else {
                const option = result[0];
                response.status(200).json(result);
            }

        });
}

function getResult(request, response) {

    id = request.query.resultValue;

    optionModels.getResultFromDb(id, function(error, result) {

            if (error || result == null || result.length != 1) {
                response.status(500).json({success: false, data: error});
            } else {
                const option = result[0];
                response.status(200).json(result);
            }

    });
}

module.exports = {
    getOption1: getOption1,
    getOption2: getOption2,
    getOption3: getOption3,
    getResult: getResult,
};
