const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    answers: [],
    correctAnswer: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    level: {
        type: String
    }
    
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question


// title
// questions answers
// correct answer
// date 