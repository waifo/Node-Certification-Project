var express=require('express');
var path = require('path');
var app=express();



app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
 })


