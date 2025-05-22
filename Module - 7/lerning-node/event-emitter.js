const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("birthday", () => {
  console.log("Happy Birthday To You");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will send a gift that is: ${gift}`);
});

myEmitter.emit("birthday", "Watch");
