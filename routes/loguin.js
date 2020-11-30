const express = require('express');
const routes = express.Router();


routes.get('/',(req,resp)=>{
    resp.render('formLoguin',{layout:'loguin'});
});




module.exports=routes;