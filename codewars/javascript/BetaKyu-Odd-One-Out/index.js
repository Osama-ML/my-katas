function oddNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      return i;
    }
    if (i == arr.length - 1) {
      return -1;
    }
  }
}
