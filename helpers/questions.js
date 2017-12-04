const db = require('../models')

exports.getQuestions = function(req, res){
    db.Question.find()
    .then(function(questions){
        res.status(201).json(questions)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.createQuestion = function(req, res){
    db.Question.create(req.body)
    .then(function(question){
        res.json(question)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.getQuestion = function(req, res){
    db.Question.findById(req.params.questionId)
    .then(function(foundQuestion){
        res.json(foundQuestion)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.updateQuestion = function(req, res){
    db.Question.findOneAndUpdate({_id: req.params.questionId}, req.body, {new: true})
    .then(function(question){
        res.json(question)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.deleteQuestion = function(req, res){
    db.Question.remove({ _id: req.params.questionId })
    .then(function(){
        res.json({message: "THE QUESTION HAS BEEN DELETED"})
    })
    .catch(function(err){
        res.send(err)
    })
}



module.exports = exports