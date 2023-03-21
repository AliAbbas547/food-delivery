const mongoose= require("mongoose")


const foodSchema= new mongoose.Schema({

    CategoryName:{
    type:String,
    required:true,
    trim:true
},
name:{
    type:String,
    required:true,
    trim:true
},

img:{
  type:String,
  required:true
 },
 options:[Object],
 description:{
    type:String,
    required:true,
    trim:true
 }

},{timestamps:true})

module.exports= mongoose.model("food",foodSchema)