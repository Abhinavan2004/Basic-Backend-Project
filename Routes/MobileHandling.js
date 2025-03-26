const express = require('express');
const expressRouter2 = express.Router();
const Mobiledb = require("./../Models/Mobiles.js");


expressRouter2.get("/" , async(req,res) =>{
    try{
        const Fetch_mobile = await Mobiledb.find();
        console.log("Mobile Data Fetched Successfully");
        res.status(200).json(Fetch_mobile);
    }
    catch(err){
        console.log("Error in Fetching");
        res.status(500).json({error:'error aaya bhai!!!!!'});
    }
})



expressRouter2.post("/" , async (req,res) =>{
    const data = req.body;
    const abhi_data = new Mobiledb(data);
    try{
      const save = await abhi_data.save();
      console.log("Mobile Data Saved Successfully");
      res.status(200).json({ message: "Mobile Data added successfully" });
  }
    catch(err){
      console.log("Mobile Data not added successfully");
      res.status(500).json({err:"Internel server error"});
    }
  
  })


  expressRouter2.put("/:id" , async(req,res) =>{
    try{
    const req_id = req.params.id ;
    const updatedatato = req.body ;

    const response = await Mobiledb.findByIdAndUpdate(req_id , updatedatato, {
      new : true,                   // Return the updated document
      runValidators : true         // for Mongoose Validation 
  })

  if(!response){
    res.status(404).json({error:"Mobile data not found"});
}

console.log("Mobile data successfully updated");
res.status(200).json(response);
}
catch(err){
console.log("Mobile data not updated!!!!" , err);
res.status(500).json({error:"Nhi ho paya update acchese!!!!"});
}
  })



  expressRouter2.delete("/:id" , async(req,res) =>{
    try{
    const togetid = req.params.id ;

    const response = await Mobiledb.findByIdAndDelete(togetid);
    if(!response){
      res.status(404).json({error:"Mobile data not found"});
  }
  
  console.log("Mobile data successfully deleted");
  res.status(200).json(response);
  }
  catch(err){
  console.log("Mobile data not deleted!!!!" , err);
  res.status(500).json({error:"Nhi ho paya delete acchese!!!!"});
  }
  })



  module.exports = expressRouter2;

