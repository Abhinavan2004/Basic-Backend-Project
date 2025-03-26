var express = require('express');
var app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const person = require('./Models/person.js');
const Mobile = require("./Models/Mobiles.js");


app.get("/" , function(req,res){
res.send("HEllo this is home page");
})

app.get("/ecommerce" , function(req,res){
    res.send("Welcome to ecommerce website");
})

app.get("/electro" , function(req,res){
    res.send("which mobile brand do you prefer ????");
})

const personRoutes = require("./Routes/HandlingRoutes.js");
app.use("/person", personRoutes);

const mobileroutes = require("./Routes/MobileHandling.js");
app.use("/Mobile_Section" , mobileroutes);




app.listen(3270);