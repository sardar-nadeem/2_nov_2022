var MongoClient = require('mongodb').MongoClient;
var express = require('express');
const db1 = require('./db1');
var url = "mongodb://localhost:27017/"
const {json} = require('express')
const {connectToDB, getDB} = require('./db1');
var {ObjectId} = require('mangodb')
var app = express();
var port = 3000;

app.get('/', (req, res)=>{
    res.send('this is home page')
})

let db
connectToDB((err)=>{
    if(!err){
        app.listen(port, ()=>{
            console.log('app listing');
        });
        db = getDB();
    }
})
app.get('/contact', (req, res)=>{
    res.send('this is contact page')
})

app.get('/blog', (req, res)=>{
    var posts = []
    db.collection('blog').find().sort({title:1})
    .forEach((post)=>blogs.push(post))
    .then(()=>{
        res.status(200).json(posts)
    })
    .catch(()=>{
        res.status(500).json({err: 'somthing is wrong'})
    })
})

// app.listen(port, function(){
//     console.log('server is running');
// })