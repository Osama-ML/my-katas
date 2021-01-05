function findOdd(A) {
  var result = 0;
  const oddNumbers = new Map();
  A.forEach((num) => {
    if (typeof oddNumbers.get(num) === "undefined") {
      oddNumbers.set(num, 0);
    }
    oddNumbers.set(num, oddNumbers.get(num) + 1);
  });
  for (let i of oddNumbers.entries()) {
    if (i[1] % 2 != 0) {
      result = i[0];
    }
    i++;
  }
  return result;
}
