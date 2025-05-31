const express = require("express");
const app = express();
const subtopicsRouter = require("./src/modules/sub-topics/sub-topics.route");

app.use("/sub-topics", subtopicsRouter);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
