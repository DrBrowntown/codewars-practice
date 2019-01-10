function isTriangle(a, b, c) {
  if (a < 1 || b < 1 || c < 1) {
    return false;
  } else if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}
