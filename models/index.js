const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/questions-api')

mongoose.Promise = Promise 

module.exports.Question = require('./question')