const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getResponseWithTools = async ({ prompt, tools }) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1-nano",
    messages: [{ role: "user", content: prompt }],
    tools,
  });
  return response;
};

const getResponse = async ({ prompt }) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1-nano",
    messages: [{ role: "user", content: prompt }],
  });
  return response;
};

module.exports = { getResponse, getResponseWithTools };
