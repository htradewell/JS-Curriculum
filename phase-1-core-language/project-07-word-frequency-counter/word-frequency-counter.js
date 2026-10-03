function wordFrequency(sentence){
  const lowerCase = sentence.toLowerCase();
  const listOfWords = lowerCase.split(" ");
  const countedWords = {}
  listOfWords.forEach(word=>{
    countedWords[word] = (countedWords[word]|| 0) + 1;
  });
  return countedWords;
}
console.log(wordFrequency('The cat sat on the mat on which the cat sat'));