// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, phone, destination, travelers, date, notes } = req.body;

//     if (!name || !email || !phone || !destination || !travelers || !date) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//       // Configure transporter
//       const transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com", // agar Gmail use karni hai
//         port: 465,
//         secure: true,
//         auth: {
//           user: process.env.EMAIL_USER, // tumhara email
//           pass: process.env.EMAIL_PASS, // app password (Gmail ke liye)
//         },
//       });

//       // Email content
//       const mailOptions = {
//         from: `"Travel Agency" <${process.env.EMAIL_USER}>`,
//         to: process.env.EMAIL_TO, // jahan data chahiye
//         subject: `New Booking from ${name}`,
//         html: `
//           <h2>New Booking Details</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Destination:</strong> ${destination}</p>
//           <p><strong>Travelers:</strong> ${travelers}</p>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Notes:</strong> ${notes || "None"}</p>
//         `,
//       };

//       await transporter.sendMail(mailOptions);

//       return res.status(200).json({ message: "Email sent successfully" });
//     } catch (err) {
//       console.error("❌ Error sending email:", err);
//       return res.status(500).json({ message: "Error sending email", error: err.message });
//     }
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
