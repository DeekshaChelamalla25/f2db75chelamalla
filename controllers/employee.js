var employee = require('../models/employee'); 
 

// List of all Costumes 
exports.employee_list = async function(req, res) { 
    try{ 
        theEmployees = await employee.find(); 
        res.send(theEmployees); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific employee. 
exports.employee_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id); 
}; 
 
// Handle employee create on POST. 
exports.employee_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Employee create POST'); 
}; 
 
// Handle employee delete form on DELETE. 
exports.employee_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: employee delete DELETE ' + req.params.id); 
}; 
 
// Handle employee update form on PUT. 
exports.employee_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: employee update PUT' + req.params.id); 
}; 