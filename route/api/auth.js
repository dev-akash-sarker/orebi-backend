const express = require("express");
const register = require("../../controllers/registrationControllers");
const matchOtp = require("../../controllers/matchOtpController");
const resendOtpController = require("../../controllers/resendOtpController");
const loginController = require("../../controllers/loginController");
const router = express.Router();

router.post("/registration", register);
router.post("/matchOTP", matchOtp);
router.post("/resendOTP", resendOtpController);
router.post("/login", loginController);

module.exports = router;
