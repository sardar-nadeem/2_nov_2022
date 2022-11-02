var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var dbo = db.db("MymangoDb")

    console.log("connect")
    var myquery = {_id:123}
    
    dbo.collection("blogTable").deleteOne(myquery,(err,res)=>{
        if(err) throw err
        console.log("one document Updated!" + res )
        db.close()
    })
})