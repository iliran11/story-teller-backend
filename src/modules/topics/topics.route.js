const express = require("express");
const router = express.Router();
const Service = require("./topics.service");

router.get("/", async (req, res, next) => {
  try {
    const topics = await Service.getTopics();
    res.render("views/index", { topics });
  } catch (error) {
    next(error);
  }
});

router.get("/:topicId", async (req, res, next) => {
  try {
    const topicId = req.params.topicId;
    const description = await Service.getTopicDescription(topicId);
    res.render("partials/text", { text: description });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
