const Openai = require("../../lib/openai/openai");
const DB = require("./topics.db");
const _ = require("lodash");
const { UrlBuilder } = require("../../lib/url-builder/urlBuilder");

const getTopics = async () => {
  const topics = await DB.getTopics();
  topics.forEach((topic) => {
    topic.urls = {};
    topic.urls.getUrlDescription = UrlBuilder.backend.topics.description(
      topic.id
    );
    topic.urls.navigationLink = UrlBuilder.pages.subTopics(topic.id);
  });
  return topics;
};

module.exports = { getTopics };
