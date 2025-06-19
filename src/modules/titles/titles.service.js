// lib/openai.js
const OpenAI = require("openai");
const DB = require("./titles.db");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateSubTopics(topic) {
  const res = await openai.chat.completions.create({
    model: "gpt-4.1-nano",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `the topic is: ${topic}`,
          },
        ],
      },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "narrow_down_topic",
          description:
            'Given a broad topic (e.g. "wars"), return exactly four more specific subtopic strings. For example, if "war" topic is given: ["strategic-outline","soldier-journey","leader-perspective","homefront-impact"]',
          strict: false,
          parameters: {
            type: "object",
            additionalProperties: false,
            properties: {
              subtopics: {
                type: "array",
                description:
                  "An array of exactly four more specific story-angle strings.",
                minItems: 4,
                maxItems: 4,
                items: {
                  type: "string",
                },
              },
            },
            required: [],
          },
        },
      },
    ],
  });
  if (
    res.choices[0].message.tool_calls &&
    res.choices[0].message.tool_calls.length > 0
  ) {
    const toolCall = res.choices[0].message.tool_calls[0];
    return JSON.parse(toolCall.function.arguments).subtopics;
  }
  throw new Error("No tool calls found");
}

async function getTitlesByTopic(topicId) {
  const titles = await DB.getTitlesByTopic(topicId);
  return titles;
}

module.exports = { generateSubTopics, getTitlesByTopic };
