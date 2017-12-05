const mongoose = require('mongoose')
//const passwords = require('../passwords')
mongoose.set('debug', true)


mongoose.connect('mongodb://johann:123bloemfontein@ds129796.mlab.com:29796/js-questions-api')
// mongoose.connect('mongodb://localhost/questions-api')

mongoose.Promise = Promise 

module.exports.Question = require('./question')