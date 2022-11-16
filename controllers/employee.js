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
    try { 
        result = await Costume.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Costume.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.age) toUpdate.age = req.body.age; 
       // if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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