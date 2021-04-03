const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;


const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b1268d78969033",
	password: "148688e6",
	database: "heroku_73d50abc125269e",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "password",
	database: "restaurant_review",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		