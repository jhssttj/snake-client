const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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

//Taking user inputs
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  connect,
  handleUserInput,
}