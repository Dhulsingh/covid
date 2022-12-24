const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("helo world!");
});
app.listen(3000);
