const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
//Message after connecting server
  conn.on("connect", () => {
    console.log("Sucessfully connected to server");
    conn.write("Name: Kev");
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};


module.exports = {
  connect,
}