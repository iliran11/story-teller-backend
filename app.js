const express = require("express");
const app = express();
const subtopicsRouter = require("./src/modules/sub-topics/sub-topics.route");
const topicsRouter = require("./src/modules/topics/topics.route");

app.use("/sub-topics", subtopicsRouter);
app.use("/topics", topicsRouter);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
