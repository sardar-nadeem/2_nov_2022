var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Mymongodb";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err 
    var dbo = db.db('Mymongodb');
    dbo.createCollection('blogTable',(err, res)=>{
        if (err) throw err
        console.log('table is create!');
        db.close()
    })
    
})