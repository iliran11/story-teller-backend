const BASE_URL = process.env.BACKEND_URL;

const backend = {
  topics: {
    description: (topicId) =>
      new URL(`/api/topic/description/${topicId}`, BASE_URL).toString(),
  },
};

const pages = {
  subTopics: (topicId) =>
    new URL(`/titles/${topicId}`, BASE_URL).toString(),
};

const UrlBuilder = { backend, pages };

module.exports = { UrlBuilder };
