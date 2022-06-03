import fs from "fs";
import { path as nodePath } from "path";
import http from "http"; 
import request from "./request";
import response from "./response";
import { checkMiddlewareInputs } from "./lib/helpers";

export default function Minimal() {
  let middlewares = [];

  function use(...args) {
    
    const  { path1, handler } = checkMiddlewareInputs(args);
    
    middlewares.push({
      path1,
      handler,
    });

  }
  function listen(port, callback) {
    return http
      .createServer((req, res) => {
        // turn node's req/res objects into express versions
        request(req);
        response(res);
        // process middleware
        fs.readFile(
          nodePath.resolve(__dirname, "..", "..",  "public", "index.html"),
          (err, data) => {
            res.setHeader("Context-Type", "text/html");
            if (err) {
              console.log(err);  
              res.writeHead(500);
              return res.end("some error accured");
            }
            res.writeHead(200);
            return res.end(data);
        
        
          });
      })
      // This is not our Minimal.listen()
      // this listen function comes from http.createServer
      .listen({port}, () => {
        if (callback) {
          if (typeof callback === "function") {
            return callback();
          }  
          throw new Error("Listen callback is not a function");
        }
      });

  }
  return {
    use,
    listen,
  };
}


 