require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.CONNECTION_KEY;
//connecting to atlas mongo database
const connectDB = async () => {                // mongoose need to async
   await mongoose.connect(URI,
       {useNewUrlParser: true,        //both to remove warning
           useUnifiedTopology: true
       }).catch();
    console.log("db connected ...");
}
module.exports = connectDB;