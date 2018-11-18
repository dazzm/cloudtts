#!/usr/bin/env node

const fs = require('fs');

const tts = require('./tts');

inputFile = process.argv.slice(2)[0];


if(inputFile !== undefined) {
  console.log('reading text from '+inputFile);
  let outputPrefix = inputFile.split('.')[0];
  let fileText = fs.readFileSync(inputFile, "utf8");
  let ssmls = fileText.split("<br>");
  ssmls.forEach((ssml, i) => {
    ssml = ssml.trim();
    ssml = `<speak>${ssml}</speak>`;
    tts(ssml, `${outputPrefix}-${i+1}.mp3`);
  });
}
else {
  console.log('invalid input file');
}

