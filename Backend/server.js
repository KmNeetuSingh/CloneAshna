const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const connection = require("./config/db");
const teamRoutes = require("./routes/team.routes");

// ✅ Load .env
dotenv.config();

// console.log("✅ Loaded JWT_SECRET in server.js:", process.env.JWT_SECRET);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/teams", teamRoutes);

app.get("/health", (req, res) => {
   res.status(200).send("Server running! Health Check Done");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connection();
    console.log("✅ MongoDB connected");
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (err) {
    console.log("❌ DB connection failed:", err.message);
  }
});
