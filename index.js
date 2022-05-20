/*
const sr = require('string-reversal-example')

let x = 'Hello';
let y = sr.reverseString(x);

console.log(y);

console.log(sr);

const express = require("express");

const server= express();
server.get( "/", (req, res)=> {
  console.log(req);

res.send("this is the webserver")
}
); 
web.listen(3000, () =>
{
  console.log("express service...");
});
*/


/*

let {readFile} = require("fs");

readFile('file.txt', 'utf-8',(error, text)=> {
  if (error) {
  throw error;
  }

console.log('file contains: ' + text)

})

let {reverse} = require ('./reverse');

let x = reverse ("your name");

console.log(x);



const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('Database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
	console.log('Server is running');
}); 
*/
/*
var my_http = require("http"),
  path = require("path"),
  url = require("url"),
  filesys = require("fs");
my_http.createServer(function(request,response) { 
  var my_path = url.parse(request.url).pathname; 
  console.log(my_path);
  if (my_path !== '/') {
    var full_path = path.join(process.cwd(),my_path); 
    filesys.exists(full_path, function(exists) { 
      if(!exists) { 
        response.writeHeader(404, {"Content-Type": "text/plain"});  
        response.write("404 Not Found\n");  
        response.end(); 
      } else { 
        filesys.readFile(full_path, "binary", function(err, file) {  
          if(err) {  
            response.writeHeader(500, {"Content-Type": "text/plain"});  
            response.write(err + "\n");  
            response.end();   
          } else { 
            response.writeHeader(200);  
            response.write(file, "binary");  
            response.end(); 
          }  
        }); 
      } 
    });
  } else {
      // send default for / index requests
      response.writeHeader(200, {"Content-Type": "text/plain"});  
      response.write("Server Page, welcome!\n");  
      response.end(); 
  }
}).listen(8080);
console.log("Server Running on 8080");
*/

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('Database.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
	console.log('JSON Server is running');
});
