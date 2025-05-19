const fs = require('fs');

//Reding file test
const readText = fs.readFileSync('./texts/read.txt', 'utf-8');
// console.log(readText);

//Writing file test
const WritingText = fs.writeFileSync('./texts/write.txt', readText + 'Hello World');
console.log(WritingText);