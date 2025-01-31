const express = require('express');
const db = require('./db'); // Importing the database connection
const app = express();
const Person = require('./models/Person');
const routes = require('./routes/personRoutes');
require('dotenv').config();    

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial'); // Sending a response
});

app.use('/person', routes); 
const PORT=process.env.PORT || 3000;

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});







