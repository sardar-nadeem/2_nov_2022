var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    console.log("connected")
    var dbo = db.db("MymangoDb")

    var myQuery = {title:1}
   
    dbo.collection("blogTable").find().sort(myQuery).toArray((err,res)=>{
        if(err) throw err
        console.log(res)
    })
})

