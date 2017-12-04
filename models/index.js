const mongoose = require('mongoose')
const passwords = require('../passwords')
mongoose.set('debug', true)


mongoose.connect(passwords.DATABASE)
// mongoose.connect('mongodb://localhost/questions-api')

mongoose.Promise = Promise 

module.exports.Question = require('./question')