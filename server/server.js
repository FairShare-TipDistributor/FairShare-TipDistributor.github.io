const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Route includes
const tipsRouter = require('./routes/tips.router');
const employeesRouter = require('./routes/employees.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/tips', tipsRouter);
app.use('/employees', employeesRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
