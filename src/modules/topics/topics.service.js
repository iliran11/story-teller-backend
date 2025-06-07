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

const getTopicDescription = async (topicId) => {
  const topic = await DB.getTopicDescription(topicId);
  if (topic.length === 0) {
    throw new Error("Topic not exists");
  }
  if (topic[0].description === null) {
    throw new Error("Topic description not exists");
  }
  return topic[0].description;
};

module.exports = { getTopics, getTopicDescription };
