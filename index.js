var MangoClient = require('mangodb').MangoClient;
var url = "mangodb://localhost:27017/MymangoDb";
MangoClient.connect(url, function(err, db){
    if (err) throw err
    console.log('db is created successfully!');
    db.close();
})

