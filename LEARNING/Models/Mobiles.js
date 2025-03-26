const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        enum:["Iqoo" , "Oneplus" ,"Samsung" , "Redmi"]
    },
    processor:{
        type:String,
        required:true
    },
    price:{
        type: Number,
    }
})

const Mobile_ka_Db = mongoose.model('Mobile_ka_Db' , mobileSchema);

module.exports  = Mobile_ka_Db ;