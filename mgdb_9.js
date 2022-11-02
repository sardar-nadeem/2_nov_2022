var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    console.log("connected")
    var dbo = db.db("MymangoDb")

    var myQuery = {name:"hamza"}

    dbo.collection("blogTable").find(myQuery).toArray((err,res)=>{
        if(err) throw err
        console.log(res)
    })
})

