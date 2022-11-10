var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var employee_controller = require('../controllers/employee'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a employee.  
router.post('/employee', employee_controller.employee_create_post); 
 
// DELETE request to delete employee. 
router.delete('/employee/:id', employee_controller.employee_delete); 
 
// PUT request to update employee. 
router.put('/employee/:id', employee_controller.employee_update_put); 
 
// GET request for one employee. 
router.get('/employee/:id', employee_controller.employee_detail); 
 
// GET request for list of all employee items. 
router.get('/employee', employee_controller.employee_list); 
 
module.exports = router; 