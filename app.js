const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World from node js server!!");
});

const server = app.listen(process.env.PORT, () => {
  const address = server.address();
  console.log("listening on port", address.port);
});
