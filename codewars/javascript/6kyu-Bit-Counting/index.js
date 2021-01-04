var countBits = function (n) {
  var counter = 0;
  var binaryNum = n.toString(2);
  console.log(binaryNum);
  var arrBin = binaryNum.split("");
  arrBin.forEach((bit) => {
    if (bit == 1) {
      counter++;
    }
  });
  return counter;
};
