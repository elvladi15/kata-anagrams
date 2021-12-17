function getAnagramSets() {
  const start_time = Date.now();
  const words = require("fs")
    .readFileSync("./wordList.txt", "utf-8")
    .toString()
    .split("\n");

  let maxAnagramNumbers = 0;
  let maxAnagramsWords;
  let anagramsNumber = 0;

  const anagrams = new Map();

  //get set of anagrams
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    const anagram = anagrams.get(sortedWord);
    if (anagram) anagram.push(word);
    else anagrams.set(sortedWord, [word]);
  }

  anagrams.forEach((wordSet) => {
    if (wordSet.length > maxAnagramNumbers) {
      maxAnagramsNumbers = wordSet.length;
      maxAnagramsWords = wordSet;
    }
    if (wordSet.length > 1) {
      anagramsNumber++;
      console.log(wordSet);
    }
  });

  const duration = Date.now() - start_time;

  console.log("words number : " + words.length);
  console.log("number of anagrams : " + anagramsNumber);
  console.log(
    "max anagrams (" + maxAnagramsWords.length + ") : " + maxAnagramsWords
  );
  console.log("compute done in " + duration + " ms");
}
