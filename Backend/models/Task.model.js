const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  title: { type: String, required: true },

  description: { type: String },

  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo"
  },

  dueDate: { type: Date },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low"
  }
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model("Task", taskSchema);
