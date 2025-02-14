const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { sendReferralEmail } = require("../services/emailService");

const createReferral = async (req, res) => {
  const { name, email, phone, course } = req.body;
  try {
    // Validate Input
    if (!name || !email || !phone || !course) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to Database
    const referral = await prisma.referral.create({
      data: {
        name,
        email,
        phone,
        course,
      },
    });

    // Send Email Notification
    await sendReferralEmail(name, email, course);

    res.status(201).json({ message: "Referral submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReferral,
};
