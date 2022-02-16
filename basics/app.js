//Importing http library
const http = require("http");
const fs = require("fs");
const { Console } = require("console");

//Creating a server using the library
const server = http.createServer((req, res) => {
  console.log(req);
  console.log("--------------------------------------");
  //Printing specific parts from request object which is sent to server
  console.log(req.headers, req.method);
  //process.exit();
  //Parsing URL and method data from req object
  const url = req.url;
  const method = req.method;
  //Routing
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Messenger</title></head>");
    res.write(
      '<body><form action = "/message" method = "POST"><input type = "text" name = "message"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  //Dealing with request
  if (url === "/message" && method === "POST") {
    const body = [];
    //Getting data from url to interact with listener
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    //Listener interaction of data
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
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
