var express = require('express');
var app = express();
const db = require('./db');
require('dotenv').config();

//npm i body-parser ke lena okkay 
const bodyParser = require('body-parser');
app.use(bodyParser.json());                     // ye tera req.json hai 

const person = require('./Models/person.js');
const Mobile = require("./Models/Mobiles.js");
const { Mongoose } = require('mongoose');

app.get("/" , function(req,res){
res.send("HEllo this is home page");
})

app.get("/ecommerce" , function(req,res){
    res.send("Welcome to ecommerce website");
})

app.get("/electro" , function(req,res){
    res.send("which mobile brand do you prefer ????");
})

//POST route to add data 
app.post("/person" , async function(req , res){       // creating a post request for the creation of endpoint and putting data in the collection 
    const data = req.body ;                     // ye woh tera data jisme ayega http requests ke through oh bodyparser se convert hone ke baad ka 
  
//   now there are two forms for storing 
//   {1} ya toh tu ek empty document banakr aise harr field ko bhar 

// ---- code starts here
// const nayaperson = new person();            // creating a new mongodb document (empty) wala to store the info.
// nayaperson.name = data.name;
// nayaperson.age = data.age ;
// nayaperson.salary = data.salary ;
// nayaperson.email = data.salary ;
// ---- code ends here

//   {2} nhi toh direct banate waqt hi end krde toh woh kr lega save
const nayaperson = new person(data);
   
try{
const save_the_Data = nayaperson.save();
console.log("Person Data Saved");
res.status(200).json(save_the_Data);
}catch(err){
console.log(err);
res.status(500).json();
}
})

app.get("/person" , async(req,res) =>{
    try{
        const to_fetch_data = await person.find();
        console.log("Person Data fetched successfully");
        res.status(200).json(to_fetch_data);
    }
    catch(err){
        console.log("Person Data cannot be fetched");
        res.status(500).json({error: 'Internel error'});
        }
});


// =======================================================================================================================================
//post and get method of Mobils.js Schema or Model

app.post("/Mobile_Section" , async (req,res) =>{
  const data = req.body;
  const abhi_data = new Mobile(data);
  try{
    const save = abhi_data.save();
    console.log("Data Saved");
    res.status(200).json("Mobile Data added successfully");
  }
  catch(err){
    console.log("Data not added successfully");
    res.status(500).json({err:"Internel server error"});
  }
})


app.get("/Mobile_section" , async(req,res) =>{
    try{
        const Fetch_mobile = await Mobile.find();
        console.log("Mobile Data Fetched Successfully");
        res.status(200).json(Fetch_mobile);
    }
    catch(err){
        console.log("Error in Fetching");
        res.status(500).json({error:'error aaya bhai!!!!!'});
    }
})

//============================================================================================================================
// Parametrized API Calls ke GET & POST Route 

app.get("/Mobile_Section/:name", async (req, res) => {
    try {
        const data = req.params.name;
        if (["Iqoo", "Redmi", "Samsung", "Oneplus"].includes(data)) {
            const fetching_Data = await Mobile.find({ name:data }); // Ensure 'brand' is the correct field
            console.log("Data fetched Successfully!!!");
            res.status(200).json(fetching_Data);
        } else {
            res.status(404).json({ error: "Brand not found!" });
        }
    } catch (err) {
        console.log("Parameterized data cannot be fetched!!!!", err);
        res.status(500).json({ error: "Nhi mil paya re data!!!" });
    }
});


app.listen(3270);
