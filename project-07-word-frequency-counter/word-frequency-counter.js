function getWords(sentence){
    const lowerCase = sentence.toLowerCase();
    const arrayOfWords = lowerCase.split(" ");
    return (arrayOfWords);
}

function countWords(arrayOfWords) {
  const counts = {};
  arrayOfWords.forEach(word => {
    counts[word] = (counts[word] || 0) + 1;
  });
  return counts;
}

const sentenceArray = getWords('The cat sat on the mat the end');
const theCount = countWords(sentenceArray);
console.log(theCount);