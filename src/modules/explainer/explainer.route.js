const express = require("express");
const router = express.Router();
const Service = require("./explainer.service");

router.get("/topic", async (req, res, next) => {
    try {
      const acceptLanguage = req.headers['accept-language'] || 'en';
      const { topic } = req.query;
      if (!topic) {
        return res
          .status(400)
          .json({ error: "Topic query parameter is required" });
      }
      const description = await Service.getTopicDescription(topic);
      res.send({ data: description });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;