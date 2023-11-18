require("dotenv").config();
const express = require("express");
const { readdirSync } = require("fs");
const cors = require("cors");
const dbConnection = require("./config/dbConfig");
// const _ = require("./route");
const app = express();

// conection to database
dbConnection();

//middleware
app.use(cors());
app.use(express.json());

//routes
// way one
readdirSync("./routes").map((x) => app.use("/api", require(`./routes/${x}`)));
// way two
// app.use(_);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
