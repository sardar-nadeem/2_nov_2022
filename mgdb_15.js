const { ObjectID, ObjectId } = require('bson');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err
    var dbo = db.db('MymangoDb');
    console.log('conneted successfully');
    // var delObjQuery = {_id:ObjectId('635f5cf95e0cf6c25f09ead6')}
    // var delObjQuery = {name: 'asee'}
    var delObjQuery = {name:/^F/}

    dbo.collection('blogTable').deleteMany(delObjQuery,(err, obj)=>{
        if (err) throw err 
        console.log('one record deleted');
        db.close();
    })
})

