const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
  res.send("Mango are good");
});

module.exports = router;
 