// Get all values as an objects
// Iterate second word trying to find a letter using a hash
// If can find a coincidence, return true, else return false


const convertStringToObject = (word: string): { [key: string]: any } => {
  const objectFromWord: { [key: string]: any } = {};

  for (let i = 0; i < word.length; i++) {
    objectFromWord[word[i]] = null;
  }
  return objectFromWord;
}

const findCoincidenceBetweenWords = (wordToAnalyze: { [key: string]: any }, valuesToSearch: string): boolean => {
  let existsCoincidence = false;
  for (let i = 0; i < valuesToSearch.length; i++) {
    existsCoincidence = wordToAnalyze[valuesToSearch[i]] === null;
    if (existsCoincidence) break;
  }
  return existsCoincidence;
}


const main = () => {
  const firstWord = "be";
  const secondWord = "cat";
  const firstObject = convertStringToObject(firstWord);
  console.log(findCoincidenceBetweenWords(firstObject, secondWord));
}

main();