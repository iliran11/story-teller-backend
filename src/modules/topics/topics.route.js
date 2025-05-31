const express = require("express");
const router = express.Router();
const { getTopics } = require("./topics.service");

router.get("/", async (req, res) => {
  const topics = await getTopics();
  res.send({ data: topics });
});

module.exports = router;
