// // const nodemailer = require("nodemailer");
// const nodemailer = require("nodemailer");
// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: "587",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const options = {
//     from: sent_from,
//     to: send_to,
//     replyTo: reply_to,
//     subject: subject,
//     html: message,
//   };

//   // Send Email
//   transporter.sendMail(options, function (err, info) {
//     if (err) {
//         console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };

// // module.exports = sendEmail;
// module.exports = sendEmail;


// sendEmail.js
const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: "587",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
