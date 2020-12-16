function capitalizeWord(word) {
  var arrayWord;
  var palabra = "";
  arrayWord = word.split("");
  arrayWord[0] = arrayWord[0].toUpperCase();
  arrayWord.forEach((i) => {
    palabra = palabra + i;
  });
  return palabra;
}
