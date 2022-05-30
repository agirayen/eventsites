const http =require("http");
const fs =require ("fs");
const path = require ("path");
import express from "express";
import cors from "cors";
import "dotenv/config";
 
app.use(cors());

// change the whole work into express libraries
const app = express();

// here we are creating our own database to make further checking for the registered users
let eventdatabase = {
    users: [1,2,3,4,5],
};

// we are checking for the regiestered user otherwise we are sending errors
app.get("/users/:userid", (req, res)=>{
    let id= req.params.userid;
    console.log(id);

    const userFound = eventdatabase.users(id);
    if (userFound) {
        res.status(200).send("user is registered");
    }else
    {
        res.status(404).send("user is not registered");
    }

});

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