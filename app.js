const express = require("express");
const app = express();
const morgan = require('morgan')
const titlesRouter = require("./src/modules/titles/titles.js");
const topicsRouter = require("./src/modules/topics/topics.route");
const apiRouter = require("./src/modules/api/api.route");
const cors = require("cors");

app.set('view engine', 'ejs');
app.set('views', './src/frontend');
app.use(morgan('dev'))
app.use(cors());

app.use("/api", apiRouter);
app.use("/titles", titlesRouter);
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
