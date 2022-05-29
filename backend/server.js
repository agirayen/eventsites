const http =require("http");
const fs =require ("fs");
const path = require ("path");
const server = http.createServer((req,res)=>{
//request handling here
res.writeHead(200,{"content-Type": "text/html"});
res.write("Welcome to our services\n");
res.end
});
// when we are going to use listen mentod then it use 9001 port number
server.listen(9001,()=>{
    console.log("Server running on port 9001");
});