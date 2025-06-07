const express = require("express");
const router = express.Router();
const Service = require("./api.service");

router.get("/topic/description/:topicId", async (req, res, next) => {
    try {
      const topicId = req.params.topicId;
      const description = await Service.getTopicDescription(topicId);
      res.render("partials/text", { text: description });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;