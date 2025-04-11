const express = require("express");
const Task = require("../models/Task.model");
const { auth } = require("../middleware/auth.middleware");
const router = express.Router();

// Get Tasks with optional filters
router.get("/", auth, async (req, res) => {
  const { priority, status, dueBefore, dueAfter, sortBy } = req.query;

  let query = { user: req.userId };

  if (priority) query.priority = priority;
  if (status) query.status = status;
  if (dueBefore) {
    query.dueDate = { ...query.dueDate, $lt: new Date(dueBefore) };
  }
  if (dueAfter) {
    query.dueDate = { ...query.dueDate, $gt: new Date(dueAfter) };
  }

  let sort = {};

  if (sortBy === "priority") {
    sort.priority = -1; // high to low
  } else if (sortBy === "dueDate") {
    sort.dueDate = 1; // earliest deadline first
  }

  try {
    const tasks = await Task.find(query).sort(sort);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create Task
router.post("/create", auth, async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.userId });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
