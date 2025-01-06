// const mongoose = require('mongoose');

// const uri = 'mongodb://127.0.0.1:27017/'; // Use 127.0.0.1 instead of localhost to avoid IPv6 (::1) issues

// mongoose.connect(uri, {
//     useNewUrlParser: true, // Optional if using Mongoose < 6
//     useUnifiedTopology: true // Optional if using Mongoose < 6
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('MongoDB connection error:', err);
//     });

// db.js
const mongoose = require('mongoose');

// MongoDB URL
const mongoURL = 'mongodb://127.0.0.1:27017/vedant'; // MongoDB URL

// Connect to MongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('error', () => {
    console.log('MongoDB connection error');
});

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
});

// Export the database connection for use in other files
module.exports = db;
