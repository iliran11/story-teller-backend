const express = require("express");
const app = express();
const subtopicsRouter = require("./src/modules/sub-topics/sub-topics.route");
const topicsRouter = require("./src/modules/topics/topics.route");
const explainerRouter = require("./src/modules/explainer/explainer.route");
const cors = require("cors");

app.use(cors());
app.use("/", (req, res) => {
  res.send("Hello World");
});
app.use("/sub-topics", subtopicsRouter);
app.use("/topics", topicsRouter);
app.use("/explainer", explainerRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message,
  });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
