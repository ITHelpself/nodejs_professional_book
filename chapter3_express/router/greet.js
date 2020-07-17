const express = require('express');
module.exports = function(option = {}){
    const router = express.Router();
    router.get('/greet',(req,res,next)=>{
        res.end(option.greeting);
    });
    return router;
}