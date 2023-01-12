// http: HTTP is a node module that allows Node.js to transfer data over Hyper Text Transfer Protocol. You can use the create server method to create a HTTP server.

const http = require("http"); // this is where we set which global we want to use inside the () can use different words inside the () to use different globals

const hostname = "127.0.0.1"; // sets the host name
const port = 3000; // sets the port to listen too
const server = http.createServer((req, res) => {
  // user thre create server method to create the http server

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain"); // sets the text type that is returnd to the page

  res.end("Hello Peter!"); // this is the text that will be displayed to the webpage
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // this message is displayed to the console to give us a sense that the server is running (The server should be running without this but this is just nice to have )
});
