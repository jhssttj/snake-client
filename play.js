
const {connect, handleUserInput} = require("./client");
// establishes a connection with the game server


// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


console.log("Connecting ...");
connect();
//handleUserInput();
setupInput();