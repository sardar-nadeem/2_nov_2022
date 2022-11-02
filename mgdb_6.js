var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var dbo =db.db("MymangoDb")
    dbo.collection("blogTable").findOne({},(err,res)=>{
        if(err) throw err 
        // console.log('created successfuly')
        console.log(res.name)
        db.close()
    }) 

})