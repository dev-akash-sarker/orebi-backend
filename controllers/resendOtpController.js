const User = require("../models/userModels");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const { generateToken } = require("../helpers/token");
async function resendOtpController(req, res) {
  const { email } = req.body;
  const existingMail = await User.find({ email });
  const generator = aleaRNGFactory(Date.now());
  const randomOTP = generator.uInt32().toString().substring(0, 4);

  if (existingMail[0].email === email) {
    let randomOTPstore = await User.findOneAndUpdate(
      { email },
      { $set: { randomOTP: randomOTP } },
      { new: true }
    )
      .then(() => {
        setTimeout(() => {
          const removeOTP = User.findOneAndUpdate(
            { email },
            { $unset: { randomOTP: "" } },
            { new: true }
          );
        }, 30000);
      })
      .catch((err) => {
        console.log(err, "err");
      });

    res.send({
      message: "OTP resend",
    });
  } else {
    res.send({
      message: "OTP not send!",
    });
  }
}

module.exports = resendOtpController;
