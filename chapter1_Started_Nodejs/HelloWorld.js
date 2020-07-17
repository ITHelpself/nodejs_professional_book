const http = require('http');
const port = 1337;
var routers = {
    '/': (request,response) => {
        response.writeHead(200);
        response.end('Hello, World!');
    },
    '/foo': (request,response)=>{
        response.writeHead(200);
        response.end('You are now viewing "foo"');
    }
}
const app = http.createServer((request,response)=>{
    if(request.url in routers){
        return routers[request.url](request,response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});
app.listen(port,()=>{
    console.log("server was listen at "+ port);
});