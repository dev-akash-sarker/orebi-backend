const express = require("express");
const register = require("../../controllers/registrationControllers");
const matchOtp = require("../../controllers/matchOtpController");
const resendOtpController = require("../../controllers/resendOtpController");
const router = express.Router();

router.post("/registration", register);
router.post("/matchOTP", matchOtp);
router.post("/resendOTP", resendOtpController);

module.exports = router;
