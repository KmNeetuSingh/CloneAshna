const express = require("express");
const Team = require("../models/Team.model");
const { auth } = require("../middleware/auth.middleware");
const router = express.Router();

// Create a team
router.post("/", auth, async (req, res) => {
  const { name } = req.body;
  try {
    const team = new Team({
      name,
      members: [req.user.id],
      createdBy: req.user.id
    });
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ message: "Team creation failed", error: err.message });
  }
});

// Add user to team
router.post("/:teamId/add-member", auth, async (req, res) => {
  const { userId } = req.body;
  try {
    const team = await Team.findById(req.params.teamId);
    if (!team.members.includes(userId)) {
      team.members.push(userId);
      await team.save();
    }
    res.status(200).json({ message: "User added to team", team });
  } catch (err) {
    res.status(500).json({ message: "Failed to add user", error: err.message });
  }
});

module.exports = router;
