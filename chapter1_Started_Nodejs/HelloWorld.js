const http = require('http');
const port = 1337;
const app = http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    response.write("Hello world");
    response.end();
});
app.listen(port,()=>{
    console.log("server was listen at "+ port);
});