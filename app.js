const express = require("express");
const app = express();
const topicsRouter = require("./src/modules/topics/topics.route");

app.use("/topics", topicsRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
