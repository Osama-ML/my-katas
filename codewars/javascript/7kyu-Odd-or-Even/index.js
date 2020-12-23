function oddOrEven(array) {
  var num = 0;
  for (let i = 0; i < array.length; i++) {
    num = num + array[i];
  }
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
