function otpTemplate(otp) {
  return `<body
  style="margin: 0 !important; padding: 0 !important; background-color: black"
  >
  <div style="width: 800px; margin: 0 auto">
    <header>
      <h5
        style="
          background-color: rgb(0, 110, 255);
          font-family: Arial, Helvetica, sans-serif;
          color: white;
          padding: 40px;
          margin: 0;
          text-transform: uppercase;
          text-align: center;
        "
      >
        thanks for signing up
      </h5>
      <h1
        style="
          background-color: rgb(183, 44, 44);
          color: white;
          font-family: sans-serif;
          padding: 60px 20px;
          margin-top: 0;
          text-align: center;
        "
      >
        Here is your OTP
      </h1>
    </header>
    <section
      style="
        background-color: black;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 0;
      "
    >
      <p style="margin-top: 0">Hi,</p>
      <p style="margin-top: 0">
        Here is your code
        <span
          style="font-family: Arial, Helvetica, sans-serif; font-weight: 700"
          >${otp}</span
        >
      </p>
    </section>
  </div>
  </body>`;
}

module.exports = otpTemplate;
