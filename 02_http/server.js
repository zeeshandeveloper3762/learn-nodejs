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
