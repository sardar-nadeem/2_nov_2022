var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err 
    console.log("DB conected")
    var dbo = db.db("MymangoDb");
    var Obj =[
        {   _id:122,
            title:"wjfjjevb",
            body:"alkshfiuhvnd,mv,,v,",
        },
        {   _id:122,
            title:"wjfjakje099",
            body:"alkshfiugrkjvkfkkkkkkfkv,,v,",
        },
        {   _id:22,
            title:"wsalam hi hello ",
            body:"alkshfiu", 
        },
        {   _id:2,
            title:"wjfjakje98989008vb",
            body:"alkshfiuhgfhdxjskjk77mv,,v,",
        },
        {   _id:192,
            title:"wjfjakj09898898989989889evb",
            body:"alksh0987798c,mdsvn,vnd,mv,,v,",
        },
        {   _id:12,
            title:"wjfjakjevb0000000000000000",
            body:"alkshfiuhgfd,mv,,v,",
        },

    {
        name:"asee",
        lname:"nasrati",
       
          },
        {    
            _id:123,
            name:"hamza",
            lname:"nasrati",
            job:"teacher",
            hobbies:['football','gaming','swiminng'],
            friends:[
                {name:'sardar',lastname:'nadeem',phone:8348737523,age:19},
                {name:'haseeb',lastname:'urrahmn',phone:8348737523,age:19},
                {name:'asee',lastname:'nasrati',phone:8348737523,age:24},
                ],
                mobile:{
                    name:"iphone",
                    model:"iphonexcmax",
                    price:"450$",
                    pc:"macbook",
                }
            }
        ]
    dbo.collection("blogTable").insertMany(Obj,(err, res)=>{
        if (err) throw err
        console.log('table is create!');
        db.close()
    })
    
})