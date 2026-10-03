const fs = require('fs');
const text = fs.readFileSync('sample.txt', 'utf-8');
const words = text.toLowerCase().split(/\s+/).filter(word=> word!== '');
const wordTally = {};
let wordCount = 0;
let mostCommon = 0;
words.forEach(word=>{
    wordTally[word] = (wordTally[word] || 0)+1;
    wordCount +=1;
    if (wordTally[word] > mostCommon){
        mostCommon = wordTally[word];
    }
});
console.log(wordTally);
console.log(wordCount);
const mostCommonWords = [];
const tallyArray = Object.keys(wordTally);
tallyArray.forEach(word=>{
    if (wordTally[word] === mostCommon){
        mostCommonWords.push(word);
    }
});
console.log(mostCommonWords);