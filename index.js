require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
