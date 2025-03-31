const mongoose = require("mongoose");    // schema banane ke liye thujhe mongoose lgega hii 

const personSchema = new mongoose.Schema({       // isse tu ek new Schema bana rha hai 
    name :{                                // schema attribute name
        type:String,                       // type of the attribute
        required: true                     // ye iska mtlb ye thujhe required hi hai mtlb lgega hi input dena hi pdgea filling ke waqt nhi toh error dega       
    },
    age :{
        type:Number,
    },
    email :{
        type:String,
        required:true,
        unique:true                        // ye mtlb it should be unique // it should not match with another values  , if it matches with another value then it will give the error as 
    },
    address :{
        type:String,
        enum:  ["nagpur", "jabalpur", "indore", "gondia"]   // isse mtlb woh attribute me sirf ye itne values mese hi koi values hogi aur koi values if enter krega user then error throw hoga 
    },
    salary:{
        type:Number,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:String
    }
})

const person = mongoose.model('person' , personSchema);  //now using this you have converted schema into model 
//  and ye krna isliye imp tha bcoz schema se tu define krta hai db mein konse konse attributes hai unka data type kya hai req hai ki nhi baki sab 
//  but model helps in performing operation on that like deleteing inserting updating etc etc 
//  Schema -->> design krta hai db ko 
//  Model  -->>  usspr operations krne mein madaatt krta hai 
module.exports=person ;