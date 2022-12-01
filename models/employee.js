const mongoose = require("mongoose") 
const employeeSchema = mongoose.Schema({ 
    name:{
        type: String,
        minLength:3
         }, 
 age: Number,
 salary:{
    type: String,
    maxLength:10
 }
}) 
 
module.exports = mongoose.model("employee", 
employeeSchema) 