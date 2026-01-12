const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// on - listen for an event
// emit - emit an event
customEmitter.on("response", (name, id) => {
  //event named "response"
  console.log(`data received user ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  //event named "response"
  console.log("some other logic here");
});

//The order is important, because it will be emit the events above
//We can add arguments
customEmitter.emit("response", "Bruce", 7);
