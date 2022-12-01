var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('employee', { title: 'Search Results employee' });
});


var express = require('express'); 
const employee_controlers= require('../controllers/employee'); 
var     router = express.Router(); 
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET queen */ 
router.get('/create',secured, employee_controlers.employee_create_Page); 
router.get('/update',secured, employee_controlers.employee_update_Page); 
router.get('/delete',secured,employee_controlers.employee_delete); 
router.get('/detail', employee_controlers.employee_view_one_Page); 
router.get('/', employee_controlers.employee_view_all_Page ); 
module.exports = router; 
