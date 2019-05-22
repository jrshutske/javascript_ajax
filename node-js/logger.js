const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message){
    console.log(message);
    this.emit("messageLogged", {"message": message})
  }
}
class LoggerWithHi {
  log(message){
    console.log("Hi"+message);
  }
}
// const log = message => {
//   console.log(message)
// }
// module.exports = log
module.exports = { Logger, LoggerWithHi }
