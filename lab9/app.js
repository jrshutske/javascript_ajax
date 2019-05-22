const http = require("http");
const fs = require("fs")

http.createServer((req, res) => {
  let filename = "index.html";
  let content = "hello world";
  fs.readFile(filename, (err, data) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data.toString());
    res.end();
  })
}).listen(3333)
console.log("listening on 3333");