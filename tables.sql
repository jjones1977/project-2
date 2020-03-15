CREATE TABLE user
(
	id SERIAL PRIMARY KEY NOT NULL,
	first VARCHAR(100) NOT NULL,
	last VARCHAR(100),
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	points INT,
	lastQuestion INT REFERENCES questions(id),
	lastOption1 INT REFERENCES options(id),
        lastOption2 INT REFERENCES options(id),
	lastOption3 INT REFERENCES options(id)

);

INSERT INTO user (first, last, username) VALUES ('Jenni', 'Jones', 'Jennibug');

CREATE TABLE options
(
	id SERIAL PRIMARY KEY NOT NULL,
	option VARCHAR(250) NOT NULL
);

Initial scenario: You have been planning to embark on the journey of a lifetime to create a new home in the West. You've been accumulating supplies and acquired a sturdy wagon and a healthy team of oxen. You are not quite ready to leave, though. You haven't said goodbye to all your friends and family, you haven't fully inspected your wagon, and you haven't closed the sale on your current farm. You need a little more time before you leave. However, you've recently heard that your neighbor's oxen have taken ill. Plus, someone in town just contracted small pox. Reason would dictate you should leave sooner rather than later. Do you...

INSERT INTO options (option) VALUES ('Leave in the morning?');
INSERT INTO options (option) VALUES ('Leave the next week?');
INSERT INTO options (option) VALUES ('Leave immediately?');
INSERT INTO options (option) VALUES ('Push till the next town where you can find shelter in an Inn?');
INSERT INTO options (option) VALUES ('Find shelter under that ledge you see over there?');
INSERT INTO options (option) VALUES ('Stop where you are, waterproof you supplies as best you can, and take shelter under your wagon?');
INSERT INTO options (option) VALUES ('Walk to town to seek help?');
INSERT INTO options (option) VALUES ('Try to fix it on your own?');
INSERT INTO options (option) VALUES ('Wait for another wagon to come by? Maybe they can help.');

CREATE TABLE results
(
	id SERIAL PRIMARY KEY NOT NULL,
        result VARCHAR(250) NOT NULL,
	resultFinal BOOLEAN,
);  

INSERT INTO results (result) VALUES ('You start to feel ill. Do you...');
INSERT INTO results (result) VALUES ('The axle on your wagon breaks and you are stranded. Do you ...');
INSERT INTO results (result) VALUES ('You make it to town and find a nice Inn where you can wait out the storm.');
INSERT INTO results (result) VALUES ('You wait out the storm successfully, but then you develop small pox and die.');
INSERT INTO results (result) VALUES ('You lose have your supplies, including all your food. You do not have enough to survive, and you die.');
INSERT INTO results (result) VALUES ('You wait out the storm successfully, but then you develop small pox and die.');
INSERT INTO results (result) VALUES ('Your immune system plummets out of sheer exhaustion. You develop small pox, and you die.');
INSERT INTO results (result) VALUES ('You get hurt while trying to fix it. You develop an awful infection. You die.');
INSERT INTO results (result) VALUES ('Another wagon never comes by. You run out of food. You die.'); 

CREATE TABLE resultsOptions
(
	id SERIAL PRIMARY KEY NOT NULL,
        resultID INT REFERENCES results(id),
	optionID INT REFERENCES options(id)
);  

CREATE TABLE optionsResults
(
        id SERIAL PRIMARY KEY NOT NULL,
	optionID INT REFERENCES options(id),
	resultID INT REFERENCES results(id)
);