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
exports.employee_detail = async function(req, res) { 
    console.log("detail" + req.params.id)
}; 
 
// Handle employee create on POST. 
exports.employee_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new employee(); 
    document.name = req.body.name; 
    document.age = req.body.age; 
   // document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle employee delete form on DELETE. 
exports.employee_delete = async function(req, res) { 
    console.log("delete " + req.params.id)
}; 
 
// Handle employee update form on PUT. 
exports.employee_update_put = async function(req, res) { 
    console.log("update " + req.params.id)
}; 
// VIEWS 
// Handle a show all view 
exports.employee_view_all_Page = async function(req, res) { 
    try{ 
        theEmployees = await employee.find(); 
        res.render('employee', { title: 'Employee Search Results', res: theEmployees }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 