require("dotenv").config();
const express = require("express");
const app = express();
const referralRoutes = require("./routes/referralRoutes");
const cors = require("cors");

const allowedOrigins = [
  'http://localhost:5173',  // Local development
  'https://accredian-frontend-task-coral-nu.vercel.app'  // Deployed Vercel frontend
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(express.json());
app.use("/api/referrals", referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
