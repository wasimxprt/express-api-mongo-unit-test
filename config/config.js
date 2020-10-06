const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   client.close();
// });

// MongoClient.connect()

MongoClient.connect(uri, (error, client) => {
    if (error) {
        console.log(error)
        return;
    }
    const db = client.db('test')

    db.collection('users').findOne({ name: "Wasim" })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    // db.collection('users').insertOne({
    //     name:"Wasim",
    //     age:"32"
    // })
    // .then(res=>{
    //     console.log(res.ops)
    // })
    // .catch(error=>{
    //     console.log(error)
    // })
})