const Openai = require("../../lib/openai/openai");
const _ = require("lodash");

const getTopics = async () => {
  const topics = [
    "Ancient Civilizations",
    "Scientific Discoveries",
    "Artistic Movements",
    "Technological Evolution",
    "Natural Phenomena",
    "Economic Systems",
    "Philosophical Schools",
    "Digital Revolution",
    "Global Trade",
    "Ethical Dilemmas",
  ];
  return topics;
};

module.exports = { getTopics };
