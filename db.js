var mongoose = require('mongoose')

var db = mongoose.connection

mongoose.connect("mongodb://localhost:27017/furni")

db.once('open',(err) =>{
    if(err){ 
        console.log(err)
    }
    else{
        console.log("connected to database")
    }
})