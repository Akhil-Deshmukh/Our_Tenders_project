import "../models/connection.js";
import url from "url";
import path from 'path';
import rs from "randomstring";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link model
import CategorySchemaModel from "../models/category.model.js";

export const save = async (req, res) => {
  try {
      if (!req.files || !req.files.caticon) {
          return res.status(400).json({ status: false, message: "File not uploaded" });
      }

      let caticon = req.files.caticon;
      let caticonnm = rs.generate() + "-" + Date.now() + "-" + caticon.name;
      let filepath = path.join(__dirname, "../../UI/public/assets/uploads/caticons", caticonnm);

      var cList = await CategorySchemaModel.find();
      var _id = cList.length === 0 ? 1 : cList[cList.length - 1]._id + 1;

      const cDetails = { ...req.body, "_id": _id, "caticonnm": caticonnm };

      await CategorySchemaModel.create(cDetails);
      await caticon.mv(filepath); // Move the uploaded file

      res.status(201).json({ status: true, message: "Category added successfully" });
  } catch (error) {
      console.error("Error in save function:", error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

   
export const fetch=async(req,res)=>{
  var condition_obj=url.parse(req.url,true).query.condition_obj;
  if(condition_obj!=undefined)
   condition_obj=JSON.parse(condition_obj); 
  else
   condition_obj={};  
  
  var cList=await CategorySchemaModel.find(condition_obj);
  if(cList.length!=0)
    res.status(200).json(cList);
  else
    res.status(404).json({"status":"Resource not found"});    
 };

export var deleteUser=async(req,res)=>{
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(cDetails){
      let category=await CategorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));   
      if(category)
        res.status(200).json({"status":"OK"});
      else
        res.status(500).json({"status": "Server Error"});
  }
  else
    res.status(404).json({"status":"Requested resource not available"});
  };



export var update=async(req,res)=>{
    let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(cDetails){
        let category=await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
        if(category)
          res.status(200).json({"msg":"OK"});
        else
          res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});       
 };