const { supabase } = require("../../lib/supabase/supabase");

const getTopics = async () => {
  const { data, error } = await supabase.from("topics").select("*");
  if (error) {
    throw error;
  }
  return data;
};

module.exports = { getTopics };
