const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const { auth } = require("../middleware/auth.middleware"); // ✅ move this up
require("dotenv").config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// ✅ Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email or username" });
    }

    if (!username || username.trim() === "") {
      return res.status(400).json({ message: "Username cannot be empty" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hash });
    await user.save();

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

// ✅ Profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("username email");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch profile", error: err.message });
  }
});

module.exports = router;
