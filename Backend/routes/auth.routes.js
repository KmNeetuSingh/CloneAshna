const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "Neetu@123";// fallback just in case

// ✅ Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists with the same email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email or username" });
    }

    // Check if the username is valid (not empty or null)
    if (!username || username.trim() === "") {
      return res.status(400).json({ message: "Username cannot be empty" });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({ username, email, password: hash });
    await user.save();

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "6h" });

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// ✅ Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "6h" });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

module.exports = router;
