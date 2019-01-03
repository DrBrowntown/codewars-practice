// Write a function called repeatStr which repeats the given string exactly n times
function repeatStr(n, s) {
  return s.repeat(n);
}

// Tests
describe("Tests", function() {
  it("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});
