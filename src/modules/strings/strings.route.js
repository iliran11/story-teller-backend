const express = require("express");
const { getStrings } = require("./strings.service");
const router = express.Router();

router.get("/", (req, res) => {
  const { lang } = req.query;

  if (!lang) {
    return res.status(400).json({
      error: "Missing required parameter",
      message: "lang parameter is required",
    });
  }

  const strings = getStrings(lang);
  res.json({ data: strings });
});

module.exports = router;
