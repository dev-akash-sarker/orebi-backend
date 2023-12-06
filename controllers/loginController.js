const emailValidation = require("../helpers/emailValidation");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");
async function loginController(req, res) {
  const { email, password } = req.body;

  if (!emailValidation(email)) {
    return res.status(400).send({
      error: "Please enter a valid email address",
    });
  }

  let existingMail = await User.find({ email });
  if (existingMail.length > 0) {
    bcrypt.compare(password, existingMail[0].password, function (err, result) {
      if (result) {
        return res.json({
          message: "Login Successfully",
          firstname: existingMail[0].firstname,
          lastname: existingMail[0].lastname,
        });
      } else {
        return res.status(400).send({
          error: "Password Not Matched",
        });
      }
    });
  } else {
    return res.status(400).send({
      error: "Email Not Matched ",
    });
  }
}

module.exports = loginController;
