module.exports = {
  contextSeparator: '_',
  // the separator used to separate context from key
  createOldCatalogs: false,
  indentation: 2,
  keepRemoved: true,
  // keep removed keys in the \_old files
  keySeparator: false,
  namespaceSeparator: false,
  // the separator used in your translation keys
  lineEnding: 'auto',
  // control the line ending. See options at https://github.com/ryanirl/i18next-parser#cli-options
  locales: ['en'],
  // array of your supported locales
  output: 'src/Locales/en.json',
  // where to write the locale files relative to process.cwd()
  useKeysAsDefaultValue: true,
  // set the keys as the value to not have to provide a
  // separate translation.json file
  verbose: false,
  // show more debug output
  lexers: {
    tsx: [{ lexer: 'JsxLexer', attr: 'i18nKey', optionAttr: 'i18n', functions: ['t'] }],
    default: ['JavascriptLexer'],
  },
};
