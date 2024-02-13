import { readFile, writeFile, readFileSync, writeFileSync } from 'fs';
// import { Translate } from '@google-cloud/translate';
import axios from 'axios';
const path = 'src/Locales/en.json';
const apiKey = process.env.GOOGLE_API_KEY;

const translateText = async (text, targetLang, apiKey) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      {},
      {
        params: {
          q: text,
          target: targetLang,
          key: apiKey,
        },
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error: ', error);
    return '';
  }
};

const readJsonFile = filePath => {
  const data = readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const writeJsonFile = (filePath, data) => {
  const jsonData = JSON.stringify(data, null, 2);
  writeFileSync(filePath, jsonData, 'utf-8');
};

const translateJson = async (sourceFile, targetFile, targetLanguage, apiKey) => {
  const jsonData = readJsonFile(sourceFile);
  const destJsonData = readJsonFile(targetFile);
  const translatedJsonData = {};

  for (const [key, value] of Object.entries(jsonData)) {
    if (!(key in destJsonData) || destJsonData[key] === '') {
      translatedJsonData[key] = await translateText(value, targetLanguage, apiKey);
    } else {
      translatedJsonData[key] = destJsonData[key];
    }
  }

  writeJsonFile(targetFile, translatedJsonData);
};

(async function main() {
  // Reading the content of the file
  readFile(path, (err, data) => {
    if (err) console.log(err);

    // Parsing the data into JSON
    let json = JSON.parse(data);

    Object.keys(json).forEach(key => {
      if (json[key] === '') json[key] = key;
    });

    // Convert back to string and write to the original file
    writeFile(path, JSON.stringify(json, null, 2), err => {
      if (err) console.log(err);
      console.log('Successfully written to en.json file');
    });
  });
  await translateJson(path, 'src/Locales/ko.json', 'ko', apiKey)
    .then(() => console.log('translated to Korean !'))
    .catch(console.error);

  await translateJson(path, 'src/Locales/ja.json', 'ja', apiKey)
    .then(() => console.log('translated to Japanese !'))
    .catch(console.error);
  process.exit();
})();
// use the function
