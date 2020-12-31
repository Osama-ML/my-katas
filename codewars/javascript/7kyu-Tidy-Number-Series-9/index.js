function tidyNumber(n) {
  var arr = n.toString().split("");
  for (let i = 0; i <= arr.length; i++) {
    let next = i + 1;
    if (arr[i] > arr[next]) return false;
    if (i == arr.length) return true;
  }
}
