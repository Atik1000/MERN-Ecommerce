require("dotenv").config();

const app = require("./app");
const { serverPort } = require("./secret");

app.listen(serverPort, () => {
  console.log(`server listening on at http://localhost:${serverPort}`);
});
