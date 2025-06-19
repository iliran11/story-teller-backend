// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getTitlesByTopic } = require("./titles.service");

router.get("/:topicId", async (req, res, next) => {
  try {
    const topicId = req.params.topicId;
    const titles = await getTitlesByTopic(topicId);

    res.render("views/titles", {
      title: "Story Titles",
      subtitle: "Pick a story to continue",
      cards: titles,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
