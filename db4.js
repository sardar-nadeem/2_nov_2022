var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    var dbo = db.db("MymangoDb");
    var myobj = [
        {title: 'this is first title',
        bod: 'this is first post' },
        {title: 'this is first title',
        bod: 'this is first post' },
        {title: 'this is first title',
        bod: 'this is first post' },
        {title: 'this is first title',
        bod: 'this is first post' },
        {title: 'this is first title',
        bod: 'this is first post' },
        {title: 'this is first title',
        bod: 'this is first post' }
          
]
    
    dbo.collection("blog").insertMany(myobj, (err, res)=>{ // many record should insert
        if (err) throw err
        console.log('record inserted');
        db.close()
    })
})