function sumOfN(n) {
  var arr = [];
  var num = 0;
  var length = n;
  if (Math.sign(length) == -1) {
    length = length * -1;
  }

  for (let i = 0; i <= length; i++) {
    if (i == 0) {
      arr.push(num);
    } else if (Math.sign(n) == 1) {
      num = num + i;
      arr.push(num);
    } else if (Math.sign(n) == -1) {
      num = num - i;
      arr.push(num);
    }
  }
  return arr;
}