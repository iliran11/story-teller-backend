const DB = require("./api.db");

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

  module.exports = { getTopicDescription };