function sumOrProduct(array, n) {
  var arrSorted = array.sort(function comparar(a, b) {
    return a - b;
  });
  var counterSmallest = 1;
  var counterHighest = 0;
  for (let i = 0; i < n; i++) {
    counterSmallest *= arrSorted[i];
    counterHighest += arrSorted[arrSorted.length - i - 1];
  }
  if (counterSmallest == counterHighest) {
    return "same";
  }
  if (counterSmallest > counterHighest) {
    return "product";
  }
  if (counterSmallest < counterHighest) {
    return "sum";
  }
}
