const { ObjectID } = require('bson');
var express = require('express');
// const { MongoClient } = require('mongodb');
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017" //if u dont see the port of database wirte tow fowerdslash //

var app = express();

app.listen(3000, function(){
    console.log('3000 running');
})

app.get('/', (req, res)=>{
    res.send('we are at home')
})
// ====================update===================== a doc=====
app.patch('/blog/:id',(req,res)=>{
    
    MongoClient.connect(url, function(err, db){
    if (err) throw err
    var dbo = db.db("MyMongoDB")
    const newVal ={
           title:"this is update doc"
        
        }
    dbo.collection('Blog').updateOne({_id:ObjectID(req.params.id)},{$set:newVal},(err,result)=>{
        if(err) throw err
        res.json(result)
        console.log("doc deleted")
        db.close()
    })
   })
})

// ===========del ====================
app.delete('/blog/:id',(req,res)=>{
    
    MongoClient.connect(url, function(err, db){
    if (err) throw err
    var dbo = db.db("MyMongoDB")
    const myObjDel ={_id:ObjectID(req.params.id)}
    dbo.collection('Blog').deleteOne(myObjDel,(err,result)=>{
        if(err) throw err
        res.json(result)
        console.log("doc deleted")
        db.close()
    })
   })
})
// =====================insert doc=======================
app.post('/blogs', (req, res)=>{
    
    MongoClient.connect(url, function(err, db){
        if (err) throw err
        var dbo = db.db('MyMongoDB')
        const myObjQuery ={
            title:"hi how are u",
            body:"this is the body of postMAn"
        };

        dbo.collection('Blog').insertOne(myObjQuery,(err, result)=>{
            if (err) throw err
            res.json(result)
            db.close()
        })
    })

})

app.get('/blog', (req, res)=>{
    res.send('this blog')
})

app.get('/blogs', (req, res)=>{
    
    MongoClient.connect(url, function(err, db){
        if (err) throw err
        var dbo = db.db('MyMongoDB')
        dbo.collection('Blog').find().toArray((err, result)=>{
            if (err) throw err
            res.json(result)
            db.close()
        })
    })

})
app.get('/bblog', function(req,res){
    MongoClient.connect(url, function(err, db){
        if (err) throw err
        var dbo = db.db('MyMongoDB')
        var posts = []

        const page = req.query.p || 0
        const postPerPage = 2;

        dbo.collection('Blog')
        .find()
        .sort({title: -1})
        .skip(page*postPerPage)
        .limit(postPerPage)
        .forEach((post)=>{
            posts.push(post)
        })
        .then(()=>{
            res.status(200).json(posts)
        })
    })
})