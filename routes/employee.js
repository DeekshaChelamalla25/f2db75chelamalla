var express = require('express');
const employee_controlers= require('../controllers/employee'); 
var router = express.Router();


router.get('/', employee_controlers.employee_view_all_Page ); 
router.get('/detail', employee_controlers.employee_view_one_Page); 
/* GET create employee page */ 
router.get('/create', employee_controlers.employee_create_Page); 
 


module.exports = router;