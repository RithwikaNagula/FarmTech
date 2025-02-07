// const express = require("express");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const morgan = require("morgan");

// const connectDB = require("./config/db");


// dotenv.config();


// connectDB();


// const app = express();


// app.use(express.json());
// const cors = require('cors');
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

// app.use(morgan("dev"));


// app.use("/api/v1/test", require("./routes/testRoutes"));
// app.use("/api/v1/auth", require("./routes/authRoutes"));
// app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
// app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
// app.use("/api/v1/admin", require("./routes/adminRoutes"));
// const sendEmail = require("./utils/sendEmail");



// const PORT = process.env.PORT || 8000;


// app.listen(PORT, () => {
//   console.log(
//     `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
//       .bgBlue.white
//   );
// });



// app.post("/api/v1/contactus/sendemail", async (req, res) => {
//   const { email} = req.body;

//   try {
//     const send_to = email;
//     const sent_from = process.env.EMAIL_USER;
//     const reply_to = email;
//     const emailSubject = "Thank You for Reaching Out to FarmTech Innovations";
//     const emailMessage = `
//         <h3>Hello,</h3>
//         <p>Thank you for contacting RedReserve!</p>
//         <p>We have received your message and our team is reviewing your request. We will get back to you as soon as possible with the information or assistance you need.</p>
//         <p>If you have any additional questions or need immediate assistance, please do not hesitate to reply to this email.</p>
//         <p>Best Regards,<br/>The RedReserve Team</p>
//     `;
//     console.log(email);
//     await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
//     res.status(200).json({ success: true, message: "Email Sent" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/api/v1/payment/sendemail", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const send_to = email;
//     const sent_from = process.env.EMAIL_USER;
//     const reply_to = email;
//     const emailSubject = "Thank You for Your Interest in Supporting FarmTech Innovations";
// const emailMessage = `
//     <h3>Hello,</h3>
//     <p>Thank you for expressing your interest in supporting FarmTech Innovations!</p>
//     <p>We truly appreciate your enthusiasm and commitment to advancing sustainable agricultural practices and technology for farmers. Our team is currently reviewing your application and will reach out to you soon with details about how you can contribute to our mission.</p>
//     <p>In the meantime, if you have any questions or need further information, please do not hesitate to reply to this email.</p>
//     <p>Thank you once again for your dedication to making a positive impact in the farming community.</p>
//     <p>Best Regards,<br/>The FarmTech Innovations Team</p>
// `;

//     console.log(email);
//     await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
//     res.status(200).json({ success: true, message: "Email Sent" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }); 



// server.js
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");
const sendEmail = require("./utils/sendEmail");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Node Server Running on Port ${PORT}`.bgBlue.white);
});

app.post("/api/v1/payment/sendemail", async (req, res) => {
  const { email, supplies } = req.body;

  try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const emailSubject = "Thank You for Supporting FarmTech Innovations";

    let suppliesTable = supplies.map(s => `
      <tr>
        <td>${s.supply}</td>
        <td>${s.quantity}</td>
        <td>${s.price}</td>
      </tr>
    `).join('');

    const emailMessage = `
      <h3>Hello,</h3>
      <p>Thank you for expressing interest in FarmTech Innovations!</p>
      <p>Here are the supplies you wish to provide:</p>
      <table border="1">
        <tr>
          <th>Supply Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        ${suppliesTable}
      </table>
      <p>We appreciate your support for sustainable agricultural practices.</p>
      <p>Best Regards,<br/>The FarmTech Innovations Team</p>
    `;

    await sendEmail(emailSubject, emailMessage, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
