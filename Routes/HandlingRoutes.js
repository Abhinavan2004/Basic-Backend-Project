const express = require('express');
const expressRouter = express.Router();
const person = require("./../Models/person.js");
const mongoose = require("mongoose");



expressRouter.post("/" , async function(req , res){       // creating a post request for the creation of endpoint and putting data in the collection 
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
console.log("Recieved Data" , data);
const nayaperson = new person(data);
try{
const save_the_Data =  await nayaperson.save();
console.log("Person Data Saved Succesfully");
res.status(200).json(save_the_Data);
}catch(err){
console.log("Error in Saving person Details" , err);
res.status(500).json();
}
})


expressRouter.get("/" , async(req,res) =>{
    // console.log(username , password);
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



expressRouter.put("/:id" , async(req,res) =>{
    try{
        const req_data = req.params.id;   // id na db mein ek varaibale hai joh mongo hi assign krta hai and it assigns unique values so ye isiliye
                                          // liya that it helps in fetching that particular entry to update 
        const updateddata = req.body ;    // updated data fetching ke liye

        if (!mongoose.Types.ObjectId.isValid(req_data)) {
            return res.status(400).json({ error: "Invalid MongoDB ID format" });
        }

        const response = await person.findByIdAndUpdate(req_data , updateddata, {
            new : true,                   // Return the updated document
            runValidators : true         // for Mongoose Validation 
        })

        if(!response){
            res.status(404).json({error:"Person data not found"});
        }

        console.log("Person data successfully updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log("Person data not updated!!!!" , err);
        res.status(500).json({error:"Nhi ho paya update acchese!!!!"});
    }
})


expressRouter.delete("/:id", async (req, res) => {
    try {
        const fetch_data_to_delete = req.params.id;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(fetch_data_to_delete)) {
            return res.status(400).json({ error: "Invalid MongoDB ID format" });
        }

        const resp = await person.findByIdAndDelete(fetch_data_to_delete);

        if (!resp) {
            return res.status(404).json({ error: "Person data not found" });
        }

        console.log("Person data successfully deleted");
        res.status(200).json({ message: "Person data successfully deleted", deletedData: resp });
    } catch (err) {
        console.error("Person data not deleted!!!!", err);
        res.status(500).json({ error: "Nhi ho paya delete acchese!!!!", details: err.message });
    }
});


module.exports = expressRouter ;


