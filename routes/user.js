const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.send("Hello Akash Sarkers");
});
router.get("/product", (req, res) => {
  res.send("Mango are good");
});

module.exports = router;
