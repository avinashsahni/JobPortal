const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://avinashsahni:kingisback12@cluster0.3lslu30.mongodb.net/');

const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of Naukri")
})

module.exports = db;
