var {MongoClient} = require("mongodb");
let dbConnection;
module.exports = {
    connectToDB: (cb)=>{
        MongoClient.connect('mongodb://localhost/27017/MymangoDb')
        .then((client)=>{
            var dbConnection = client.db();
            return cb()
        })
        .catch((err)=>{
            console.log(err);
            return cb(err)
        })
    },
    getDB:()=>{
        dbConnection
    }
}