var express = require('express');
var app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const person = require('./Models/person.js');
const Mobile = require("./Models/Mobiles.js");


const middleware = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next();
};


// app.get("/" , middleware , function(req,res){               // middleware func ko run krne ke liye thujhe ya toh aise harr                                                            
// res.send("HEllo this is home page");                            route mein middleware likhna pdega toh run middleware function
// })

// OR ---> direct bass likh de app.use(middleware);   then woh saare route mein work krne lgega

app.use(middleware);
app.get("/" , function(req,res){
    res.send("HEllo this is home page");
    })



// -------------------------------------------------------------------------------------------------------------------------------------------------
//Authentication ka code ------------>>>>>>>
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local' , {session:false});

passport.use(new LocalStrategy (async (USERNAME , password ,done) => {
    try{
        console.log("Recieved Credentials : " , USERNAME , password);
        const login_person = await person.findOne({username:USERNAME});
        if(!login_person){
            return done(null ,false , {message:'User not Found'}); 
        }
        const login_person_password = (login_person.password == password ? true : false);
        if(login_person_password){
            console.log("USer credentials matched & Logged in!!!")
            return done(null , login_person);  
        }
        else{
            console.log("Incorrect Password");
            return done(null , false ,{message : "Incorrect Password"});
        }
    }
    
    catch(err){
       return done(err);
    }
    
}));

app.get("/ecommerce", function(req,res){
    res.send("Welcome to ecommerce website");
})

app.get("/electro", function(req,res){
    res.send("which mobile brand do you prefer ????");
})

const personRoutes = require("./Routes/HandlingRoutes.js");
app.use("/person",localAuthMiddleware, personRoutes);

const mobileroutes = require("./Routes/MobileHandling.js");
app.use("/Mobile_Section" , mobileroutes);


app.listen(3270);