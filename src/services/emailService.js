const nodemailer = require("nodemailer");

const sendReferralEmail = async (name, email, course) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Referral received!",
    text: `Hello ${name},\n\nA friend has sent you a referral for the ${course} course!`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendReferralEmail,
};
