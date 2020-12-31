// Return the nth triangular number
function triangular(n) {
  let counter = 0;
  if (n < 0) {
    return 0;
  }
  for (let i = 0; i < n + 1; i++) {
    counter = counter + i;
  }
  return counter;
}
