var en = require("./translations.en.json");
var nl = require("./translations.nl.json");

const i18n = {
  translations: {
    en,
    nl,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;