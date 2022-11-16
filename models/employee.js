const mongoose = require("mongoose") 
const employeeSchema = mongoose.Schema({ 
 name: String, 
 age: Number,
 salary: Number
}) 
 
module.exports = mongoose.model("employee", 
employeeSchema) 