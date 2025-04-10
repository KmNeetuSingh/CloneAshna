const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  status: { type: String, default: "todo" }, // todo, in-progress, done
  dueDate: Date,
  priority: { type: String, default: "low" },
});

module.exports = mongoose.model("Task", taskSchema);
