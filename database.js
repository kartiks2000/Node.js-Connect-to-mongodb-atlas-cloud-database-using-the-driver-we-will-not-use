const mongodb = require('mongodb');

const mongoclient = mongodb.MongoClient;

const mongoconnect = (callback) => {
    mongoclient.connect('mongodb+srv://kartik:kartiksaxena@cluster0.nervh.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then((client)=>{
        console.log("Connected!!!");
        callback(client);
    })
    .catch((err)=>{
        console.log("Sorry, can't connect!!",err);
    });
};

module.exports = mongoconnect;  

// Add it as second parameter
// {useNewUrlParser: true, useUnifiedTopology: true}