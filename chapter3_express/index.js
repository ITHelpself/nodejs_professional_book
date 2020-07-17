const store = require('./router/store.js');
const index = require('./router/index.js')
const express = require('express');
const app = express();
const port = 3000;
app.get('/',index.doSomething);
app.get('/store',store.doSomething);
app.use('*',(req,res,next)=>{
    res.send("not found page");
});
app.listen(port,()=>{
    console.log('server listening on port:'+ port);
});
