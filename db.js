const mongoose = require('mongoose');   ///to import mongoose 
require('dotenv').config();
// const mongodb_url =process.env.URL_MONGO_OFFLINE  // ye ek url rhega joh connect krme mein maddat krega with (Replace mydatabse with your databse name when reqd.) // yaha pr mujhe connection estb hone ke baad hotels wala db chaiye toh woh ban jayega
const mongodb_url=process.env.URL_MONGO_ONLINE
mongoose.connect(mongodb_url , {//ye help krta hai connection mein & joh parameters pass kiyre hai woh isiliye bcoz dhekh  mongodb bht updates krta hai toh woh ye bata rhe hai ki ye new version ke saath setup kr rha hai bass & if tu nhi deta toh kuch errors ayenga infact kbhi kbhi connection estb mein issue ayega 
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection ; // moongoose kya krta hai ki ek default object le leta hai jisse woh represent krta hai as a moomgose connection // yehi rheta hai joh handle krta connectin ko with db 

db.on('connected' , () =>{
    console.log("Connected to MongoDB Database");
})
db.on('error' , (err) =>{
    console.log("MongoDB connection error");
})
db.on('disconnected' , () =>{
    console.log("MongoDB Database is Disconnected");
})

// ye tino help krte hai in defining the connectivity of database (Event Handlers)

module.exports = db ;  // thujhe export krna pdega for usage