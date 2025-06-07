const express = require("express");
const app = express();
const morgan = require('morgan')
const subtopicsRouter = require("./src/modules/sub-topics/sub-topics.route");
const topicsRouter = require("./src/modules/topics/topics.route");
const apiRouter = require("./src/modules/api/api.route");
const cors = require("cors");

app.use(morgan('dev'))
app.set('view engine', 'ejs');
app.set('views', './src/frontend');
app.use(cors());
app.use("/api", apiRouter);
app.use("/sub-topics", subtopicsRouter);
app.use("/", topicsRouter);

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
