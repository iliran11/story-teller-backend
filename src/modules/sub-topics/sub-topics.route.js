// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getSubTopics } = require("./sub-topics.service");

router.get("/", async (req, res) => {
  if (!req.query.topic) {
    return res.status(400).json({ error: "Topic query parameter is required" });
  }
  const subtopics = await getSubTopics(req.query.topic);
  res.send({ data: subtopics });
});

module.exports = router;
