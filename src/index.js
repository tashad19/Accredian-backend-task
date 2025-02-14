require("dotenv").config();
const express = require("express");
const app = express();
const referralRoutes = require("./routes/referralRoutes");
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173", 
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));


app.use(express.json());
app.use("/api/referrals", referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
