const _ = require("lodash");
const Openai = require("../../lib/openai/openai");

const getTopicDescription = async (topic) => {
  const prompt = `Write a 1-2 line description of '${topic}', but do not start with the word itself or repeat the topic. Just describe it directly, as if continuing a paragraph. No intro, no formatting, no quotation marks`;
  const response = await Openai.getResponse({ prompt });
  const description = _.get(response, "choices[0].message.content");
  if (!description) {
    throw new Error("Malformed response from OpenAI");
  }
  return description;
};

module.exports = { getTopicDescription };