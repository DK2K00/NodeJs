//Importing modules
const http = require("http");
const routes = require("./routes");

//Creating a server using the library and routes.js
const server = http.createServer(routes.handler);

//Creating a server port
server.listen(3000);
