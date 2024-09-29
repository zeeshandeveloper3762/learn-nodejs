const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()} : New Req Rev`;
  fs.appendFile("log.txt", log, (error, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        res.end("about page");
        break;
      default:
        res.end("default Page");
    }
  });
});

// const server = http.createServer((req, res) => {
// //   console.log("New Req Rev");
// console.log(req)
//   res.end("Hello from server");
// });
const port = 8000;
server.listen(port, () => {
  console.log(`server listen on port ${port}`);
});

// http method:
// GET : When you want to get some data from the server . browser hamesha get request karta he.
// POST : When you want to send and mutate (data change karna || data add karna) some data in server
// PUT: Used to update an existing resource or create a new resource if it doesn't exist.
// PATCH : Similar to PUT, but used to apply partial updates to a resource rather than completely replacing it.
// DELETE : Used to delete a resource from the server. It signals the server to remove the specified resource.
