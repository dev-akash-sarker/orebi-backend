const express = require("express");
const register = require("../../controllers/registrationControllers");
const router = express.Router();

router.post("/registration", register);

module.exports = router;
