const express = require('express');
const index = require('./router/index.js')
const greetMiddleware = require('./router/greet.js');
const port = 3000;
const app = express();
app.get('/',index.doSomething);
app.use('/api/ver1',greetMiddleware({greeting:"Hello"}));
app.listen(port,(req,res,next)=>{
    console.log("server listening on port: "+ port);
});