const MongoClient = require('mongodb').MongoClient;


function ConnecMongo() {
    
    const uri = "mongodb://ltapia:support70@192.168.1.130:27017/prp";

    let mongoOptions = {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }

    mongo = new MongoClient(uri, mongoOptions);
    try {
        let db = mongo.connect()
        return mongo
    } catch (error) {
        console.log(error)
    }

}


module.exports = ConnecMongo;





