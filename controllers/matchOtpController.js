const User = require("../models/userModels");

async function matchOtp(req, res) {
  const { randomOTP, email } = req.body;
  const existingMail = await User.find({ email });
  console.log(existingMail);
  if (existingMail[0].randomOTP === randomOTP) {
    const removeOTP = await User.findOneAndUpdate(
      { email },
      { $unset: { randomOTP: "" } },
      { new: true }
    );
    return res.send({
      message: "OTP Matched",
    });
  } else {
    return res.send({
      message: "OTP Not Matched",
    });
  }
}

module.exports = matchOtp;
