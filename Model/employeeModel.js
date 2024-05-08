const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   phone:{
    type:Number,
    required:true
   },
   address:{
    type:String,
    required:true
   }
})

const employee = mongoose.model("Employee", employeeSchema);
module.exports = employee;
