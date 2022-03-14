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
app.use(express.static("public"));

// Routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Set up listener
app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
});