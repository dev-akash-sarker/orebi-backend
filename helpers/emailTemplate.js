const nodemailer = require("nodemailer");

async function emailTemplate(email, verify, template) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "akashsarker210@gmail.com",
      pass: "idmzlsbbkwriabyx",
    },
  });
  const info = await transporter.sendMail({
    from: "akashsarker210@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Verification OTP", // Subject line
    // text: "Hello world?", // plain text body
    html: template(verify), // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = emailTemplate;
