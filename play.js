const {connect} = require("./client");
const {setupInput} = require("./input");
// establishes a connection with the game server

const conn = connect();

console.log("Connecting ...");

setupInput(conn);