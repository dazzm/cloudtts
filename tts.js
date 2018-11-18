const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

async function synthesizeSsml(ssml, outputFile) {

    const client = new textToSpeech.TextToSpeechClient();
  
    const request = {
      input: {ssml: ssml},
      voice: {languageCode: 'en-US', ssmlGender: 'MALE'},
      audioConfig: {audioEncoding: 'MP3'},
    };
  
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(outputFile, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${outputFile}`);
  }

  module.exports = synthesizeSsml;