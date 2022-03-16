// Required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize express app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Set up listener
app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});