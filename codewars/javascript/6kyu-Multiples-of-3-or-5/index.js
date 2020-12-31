function solution(number) {
  var counter = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      counter = counter + i;
    }
  }

  return counter;
}
