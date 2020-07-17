const http = require('http');
const port = 1337;
function index(request, response) {
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });
    response.write("Hello world");
    response.end();
}
const app = http.createServer((request,response)=>{
    if(request.url === '/'){
        return index(request,response);
    }
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});
app.listen(port,()=>{
    console.log("server was listen at "+ port);
});