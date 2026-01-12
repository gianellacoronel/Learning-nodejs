const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// on - listen for an event
// emit - emit an event
customEmitter.on("response", () => {
  //event named "response"
  console.log("data received");
});
customEmitter.on("response", () => {
  //event named "response"
  console.log("some other logic here");
});

//The order is important, because it will be emit the events above
customEmitter.emit("response");
