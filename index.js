const express = require('express'),
          app = express(),
          port = process.env.PORT || 'localhost:3000',
          bodyParser = require('body-parser')
          
const questionRoutes = require('./routes/questions')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.sendFile('index.html')
})


app.use('/api/questions', questionRoutes)

app.listen(port, function(){
    console.log("LISTENING ON PORT " + port)
})