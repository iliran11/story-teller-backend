const Openai = require("../../lib/openai/openai");
const DB = require("./topics.db");
const _ = require("lodash");

const getTopics = async () => {
  const topics = await DB.getTopics();
  return topics;
};

module.exports = { getTopics };
