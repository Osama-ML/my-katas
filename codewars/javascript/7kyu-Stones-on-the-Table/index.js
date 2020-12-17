function solve(stones) {
  var counter = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] == stones[i + 1]) {
      counter++;
    }
  }
  return counter;
}