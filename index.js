const express = require('express'),
          app = express(),
          port = process.env.PORT || 'localhost:3000'
          



app.get('/', function(req, res){
    res.send("EXPRESS APP")
})

app.listen(port, function(){
    console.log("LISTENING ON PORT " + port)
})