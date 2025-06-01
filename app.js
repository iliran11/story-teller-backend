const express = require("express");
const app = express();
const morgan = require('morgan')
const subtopicsRouter = require("./src/modules/sub-topics/sub-topics.route");
const topicsRouter = require("./src/modules/topics/topics.route");
const explainerRouter = require("./src/modules/explainer/explainer.route");
const stringsRouter = require("./src/modules/strings/strings.route");
const cors = require("cors");

app.use(morgan('dev'))

app.use(cors());
app.use("/sub-topics", subtopicsRouter);
app.use("/topics", topicsRouter);
app.use("/explainer", explainerRouter);
app.use("/strings", stringsRouter);
app.use("/", (req, res) => {
  res.send("Hello World");
});

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
