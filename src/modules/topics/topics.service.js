const Openai = require("../../lib/openai/openai");
const _ = require("lodash");

const getTopics = async () => {
  const topics = [
    {
      icon: "⚖️",
      title: "Philosophy",
      description: "skeleton",
    },
    {
      icon: "🌍",
      title: "Travel",
      description: "skeleton",
    },
    {
      icon: "📜",
      title: "History",
      description: "skeleton",
    },
    {
      icon: "🧙‍♂️",
      title: "Fantasy Lore",
      description: "skeleton",
    },
    {
      icon: "🤖",
      title: "Technology",
      description: "skeleton",
    },
    {
      icon: "🏛️",
      title: "Civilizations",
      description: "skeleton",
    },
    {
      icon: "🌐",
      title: "Geopolitics",
      description: "skeleton",
    },
  ];

  return topics;
};

module.exports = { getTopics };
