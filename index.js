const fs = require('fs');

const tts = require('./tts');

inputFile = process.argv.slice(2)[0];


if(inputFile !== undefined) {
  console.log('reading ssml text from '+inputFile);
  let ssml = fs.readFileSync(inputFile);
  tts(ssml, 'audio.mp3');
}
else {
  console.log('invalid input file');
}

