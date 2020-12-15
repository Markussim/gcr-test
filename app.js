const express = require("express");
const app = express();
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

let requests = 0;

app.get("/", (req, res) => {
  requests++;
  res.send(
    "Hello World! This instance has been called " + requests + " time(s)"
  );
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);