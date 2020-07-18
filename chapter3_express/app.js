const express = require('express');
const index = require('./router/index.js')
const greetMiddleware = require('./router/greet.js');
const greetingService = require('./model/greetingService.js');
const port = 3000;
const app = express();
// routing
app.get('/',index.doSomething);
app.use('/api/ver1',greetMiddleware({greeting:"Hello"}));
app.use('/api/ver2/service1',greetMiddleware({
    service: new greetingService('Hello')
}));
app.use('/api/ver2/service2',greetMiddleware({
    service: new greetingService('Hi')
}));
app.listen(port,(req,res,next)=>{
    console.log("server listening on port: "+ port);
});