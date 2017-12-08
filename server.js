var express=require('express');
var path = require('path');
var app=express();



var server=app.listen(process.env.port||4000,function(req,res){
    console.log("Server started",process.env.port||4000)
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
 })


