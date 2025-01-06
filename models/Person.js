const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
})
const Person = mongoose.model('Person',PersonSchema);
module.exports =Person;