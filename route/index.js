const express = require("express");
const _ = express.Router();
const apiRoutes = require("./api");

const api = process.env.BASE_URL;
_.use(api, apiRoutes);
_.use(api, (req, res) => {
  res.send("No api routes found");
});

module.exports = _;
