/*
    Here just wanted to use Maps to do the kata more interesting 🙂
*/

function getCount(str) {
  var vowelsCount = 0;
  const vowelsArray = str.split("");

  const vowels = new Map();
  vowels.set("a", 0);
  vowels.set("e", 0);
  vowels.set("i", 0);
  vowels.set("o", 0);
  vowels.set("u", 0);

  vowelsArray.forEach((letter) => {
    if (vowels.has(letter)) vowels.set(letter, vowels.get(letter) + 1);
  });

  vowels.forEach((value) => (vowelsCount = vowelsCount + value));

  return vowelsCount;
}

/* 
    Refactored by me
*/

function getCount(str) {
  var vowelsCount = 0;

  var arr = str.split("");
  arr.forEach((element) => {
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    )
      vowelsCount++;
  });

  return vowelsCount;
}
