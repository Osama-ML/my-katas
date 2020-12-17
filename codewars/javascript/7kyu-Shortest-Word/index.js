function findShort(s) {
  var word = "";
  var arr = s.split(" ");
  function comparar(a, b) {
    return a.length - b.length;
  }
  var arrSorted = arr.sort(comparar);
  return arrSorted[0].length;
}