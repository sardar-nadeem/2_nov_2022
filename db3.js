var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbo = db.db("MymangoDb");
    var myobj = {
        title: 'this is first title',
        bod: 'this is first post'
        
    }
    dbo.collection("blogTable").insertOne(myobj, (err, res)=>{
        if (err) throw err
        console.log('record inserted');
        db.close()
    })
})