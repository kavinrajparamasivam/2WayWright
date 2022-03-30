const express = require('express');
const app = express();
const connectDatabse = require('./config/database');

app.use(express.json());

// Initialize the database
connectDatabse();

// Import all the routers
const product = require('./routers/product');

app.use('/api/v1', product);

module.exports = app;