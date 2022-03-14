// Required dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Initialize express app
const app = express();

// Initialize a PORT variable
const PORT = process.env.PORT || 3000;

// Set up express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(--dirname));

// Routes file
require("./routes/routes")(app);

// Set up listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});