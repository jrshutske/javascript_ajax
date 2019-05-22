const http = require("http");
const {Logger, LoggerWithHi} = require("./logger");
const fs = require("fs")

http.createServer((req, res) => {
  let filename = "index.html";
  let content = "hello world";
  fs.readFile(filename, (err, data) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data.toString());
    res.end();
  })
}).listen(3030)
console.log("listening on 3030");


// let logger = new Logger();
// let loggerWithHi = new LoggerWithHi();
// logger.on("messageLogged", e => {
//   console.log("messageLogged event triggered")
//   console.log("_________________________________")
//   console.log(e)
//   console.log("_________________________________")
// })
// logger.log("hello world");
// loggerWithHi.log("jack");
// logger.log(http)
// logger.log(__dirname)
// logger.log(__filename)

