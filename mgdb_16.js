var MongoClient = require('mongodb').MongoClient;
var express = require('express')
var url = "mongodb://localhost:27017/"

var app = express();
var port = 3000;





MongoClient.connect(url, function(err, db){
    if (err) throw err
    var dbo = db.db('MymangoDb')
    console.log('db connected');
    dbo.collection('blog').drop((err, delOk)=>{
        if (err) throw err
        if(delOk){
            console.log('collict deleted');
        }
        db.close()
    })


})