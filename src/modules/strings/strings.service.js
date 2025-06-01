const strings = require("./strings.json");

const getStrings = (lang) => {
  try {
    return Object.assign({}, strings.en, strings[lang]);
  } catch (error) {
    throw new Error(`Failed to get strings: ${error.message}`);
  }
};

module.exports = {
  getStrings,
};
