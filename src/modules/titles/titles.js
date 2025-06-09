// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getSubTopics } = require("./titles.service");

router.get("/:topicId", async (req, res, next) => {
  try {
    const topicId = req.params.topicId;
    const subtopics = await getSubTopics(topicId);

    // Hardcoded card object for the card2 partial
    const cards = [
      {
        title: "Fantasy Adventure Stories",
        tags: ["Fantasy", "Adventure", "Magic", "Heroes", "Dragons"],
      },
      {
        title: "Mystery Detective Tales",
        tags: ["Mystery", "Detective", "Crime", "Suspense", "Clues"],
      },
      {
        title: "Science Fiction Journeys",
        tags: ["Sci-Fi", "Space", "Technology", "Future", "Aliens"],
      }
    ];

    const renderData = {
      title: "Fantasy Adventure Stories",
      subtitle: "Choose a topic you are curious about to begin a story",
      cards: [{}, {}, {}, {}],
    };
    res.render("views/titles", renderData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
