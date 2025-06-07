// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getSubTopics } = require("./sub-topics.service");

router.get("/:topicId", async (req, res, next) => {
  try {
    const topicId = req.params.topicId;
    const subtopics = await getSubTopics(topicId);
    res.send({ data: subtopics });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
