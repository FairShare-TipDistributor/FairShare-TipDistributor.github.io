const pg = require("pg");
let pool;

// When our app is deployed to the internet
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg:
//  DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) { // HEROKU URL
	try {
		pool = new pg.Pool({
			connectionString: process.env.DATABASE_URL,
			ssl: {
				rejectUnauthorized: false,
			},
		});

		console.log('connected to remote database');
		// console.log('connected via DATABASE_URL: ', process.env.DATABASE_URL);
	} catch (error) {
		console.log('ERROR in pg pool. Cannot connect to remote database. Error:', error);
	}
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is
// also running on our computer (localhost)
else {
	try {
		pool = new pg.Pool({
			host: "localhost",
			port: 5432,
			database: "FairShare",
		});
		console.log('connected to localhost');
	} catch (error) {
		console.log('ERROR in pg pool. Cannot connect to localhost. Error:', error);
	}
}

module.exports = pool;
