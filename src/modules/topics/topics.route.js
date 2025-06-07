const express = require("express");
const router = express.Router();
const Service = require("./topics.service");

router.get("/", async (req, res, next) => {
  try {
    const topics = await Service.getTopics();
    res.render("index", {  topics });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
