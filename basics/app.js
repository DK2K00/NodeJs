//Importing http library
const http = require("http");

//Creating a server using the library
const server = http.createServer((req, res) => {
  console.log(req);
  console.log("--------------------------------------");
  //Printing specific parts from request object which is sent to server
  console.log(req.headers, req.method);
  //process.exit();

  //Creating a response with a header
  res.setHeader("Content-Type", "text/html");
  //Creating a custom html page
  res.write("<html>");
  res.write("<head><title>Random Page</title></head>");
  res.write("<body><h1>Wassup!</h1></body>");
  res.write("</html>");
  //Sending response
  res.end();
});

//Creating a server port
server.listen(3000);
