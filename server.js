const http = require("http");
const fs = require("fs");
const _ = require('lodash');


const server = http.createServer((req, res)=>{
     //console.log(req.url, req.method);

	 // loadsh
	 const num = _.random(0,20);
	 console.log(num);

	 const greet =_.once(()=>{
		console.log("hello");
	 });

	 greet();
	 greet();

// set header content type
res.setHeader("content-type", "text/html");

let path ="./views/";
switch(req.url){
	case'/':
	    path += "index.html";
		res.statusCode = 200;
	    break
	case '/about':
		path += 'about.html';
		res.statusCode = 200;
		break
	case '/aboutme':
		res.statusCode = 301;
		res.setHeader('Location','/about');
		res.end();
		break
	default:
		path  += "404.html";
		res.statusCode = 404;
		break;

}
// res.write("hello harsha");
//  write here any html tag <p> are <h1> and sytlesheet link any thing.
// res.end()

// read html file
//fs.readFile("./views/index.html",(err, data)=>{
	fs.readFile(path,(err, data)=>{
	if(err){
		console.log(err);
		res.end();
	}else{
		res.write(data);		
		res.end();
	}
})
});

server.listen(3000,"localhost",()=>{
	console.log("listening for requests on port numbers 3000")

})

// LocalHost = Localhost is like a domain name on the web.
// localhost >>>>>>>> 127.0.0.1 >>>>>> Own Computer.

// Poet number = Port number are like doors into a computer.
// nodejs port number is 3000, (localhost:3000)

// Status Codes = Describe the type of response sent to the browser
// 200 = Ok
//301 = Resource moved
// 404 = not found
// 500 = Internal server error

//100 range = information response
// 200 range = success codes
// 300 range = codes for redirects
// 400 range = user or clint error codes
// 500 range = server error codes