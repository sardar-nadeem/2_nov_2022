var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var dbo = db.db("MymangoDb")

    console.log("connect")
    var oldDataObj ={name:"asee"}
    var newDataObj = {$set:{name:"Fayaz"}}
    
    dbo.collection("blogTable").updateOne(oldDataObj,newDataObj,(err,res)=>{
        if(err) throw err
        console.log("one document Updated!" + res )
        db.close()
    })
})