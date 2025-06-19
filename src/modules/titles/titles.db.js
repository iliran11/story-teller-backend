const { supabase } = require("../../lib/supabase/supabase");

const getTitlesByTopic = async (topicId) => {
  const { data, error } = await supabase
    .from("titles")
    .select("*")
    .eq("topic_id", topicId);
  if (error) {
    throw error;
  }
  return data;
};

module.exports = { getTitlesByTopic };
