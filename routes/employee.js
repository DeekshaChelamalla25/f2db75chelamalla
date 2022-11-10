var express = require('express');
const employee_controlers= require('../controllers/employee'); 
var router = express.Router();


router.get('/', employee_controlers.employee_view_all_Page ); 


module.exports = router;