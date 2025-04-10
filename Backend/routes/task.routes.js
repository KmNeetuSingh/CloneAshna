const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// Get Tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
});

// Create Task
router.post("/", auth, async (req, res) => {
  const task = new Task({ ...req.body, user: req.userId });
  await task.save();
  res.json(task);
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
