function makeNegative(num) {
  if (num > 0) {
    num = num * -1;
    return num
  }
  if (num < 0) {
    return num
  }
  if (num === 0) {
    return num
  }
}