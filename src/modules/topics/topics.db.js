const { supabase } = require("../../lib/supabase/supabase");

const getTopics = async () => {
  const { data, error } = await supabase.from("topics").select("*");
  if (error) {
    throw error;
  }
  return data;
};

const getTopicDescription = async (topicId) => {
  const { data, error } = await supabase
    .from("topic_descriptions")
    .select("*")
    .eq("topic_id", topicId)
    .limit(1);
  if (error) {
    throw error;
  }
  return data;
};

module.exports = { getTopics, getTopicDescription };
