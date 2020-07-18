const express = require('express');
module.exports = function(option = {}){
    const router = express.Router();
    const {service} = option;
    router.get('/greet',(req,res,next)=>{
        res.end(option.greeting);
    });
    router.get('/greet1',(req,res,next)=>{
        res.end(service.createGreeting(req.query.name||'Phi thai'));
    });
    return router;
}