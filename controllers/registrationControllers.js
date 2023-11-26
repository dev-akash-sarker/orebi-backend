const nameValidation = require("../helpers/nameValidation");
const emailValidation = require("../helpers/emailValidation");
const bcrypt = require("bcrypt");
const numberGenerator = require("number-generator");
const User = require("../models/userModels");
const emailTemplate = require("../helpers/emailTemplate");
const otpTemplate = require("../helpers/otpTemplate");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
async function register(req, res) {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      telephone,
      address,
      city,
      postCode,
      country,
      state,
    } = req.body;

    if (!nameValidation(firstname)) {
      return res.status(400).send({
        error: "First name is not valid",
      });
    }
    if (!nameValidation(lastname)) {
      return res.status(400).send({
        error: "Last name is not valid",
      });
    }
    if (!emailValidation(email)) {
      return res.status(400).send({
        error: "Please enter a valid email address",
      });
    }

    let existingMail = await User.find({ email });

    if (existingMail.length > 0) {
      return res.status(400).send({
        error: "Email Already Exists",
      });
    }

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      let userData = new User({
        firstname,
        lastname,
        email,
        password: hash,
        telephone,
        address,
        city,
        postCode,
        country,
        state,
      });
      userData.save();
      const generator = aleaRNGFactory(Date.now());
      const randomOTP = generator.uInt32().toString().substring(0, 4);
      let randomOTPstore = await User.findOneAndUpdate(
        { email },
        { $set: { randomOTP: randomOTP } },
        { new: true }
      );

      emailTemplate(email, randomOTPstore.randomOTP, otpTemplate);
      res.json({
        success: "Registration Successfull Please Verify Your Email",
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
      });
    });

    // let existingMail = await User.find({ email });
    // console.log(existingMail);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = register;
