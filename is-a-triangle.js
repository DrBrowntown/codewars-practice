// Implement a method that accepts 3 integer values a, b, c.
// The method should return true if a triangle can be built with
// the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a < 1 || b < 1 || c < 1) {
    return false;
  } else if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}

// Better Version

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

// Test
Test.describe("PublicTest", function() {
  Test.assertEquals(isTriangle(1, 2, 2), true);
  Test.assertEquals(isTriangle(7, 2, 2), false);
});

Test.describe("Test 1", function() {
  Test.assertEquals(isTriangle(1, 2, 3), false);
  Test.assertEquals(isTriangle(1, 3, 2), false);
  Test.assertEquals(isTriangle(3, 1, 2), false);

  Test.assertEquals(isTriangle(5, 1, 2), false);
  Test.assertEquals(isTriangle(1, 2, 5), false);
  Test.assertEquals(isTriangle(2, 5, 1), false);
});

Test.describe("Test 2", function() {
  Test.assertEquals(isTriangle(4, 2, 3), true);
  Test.assertEquals(isTriangle(5, 1, 5), true);
  Test.assertEquals(isTriangle(2, 2, 2), true);
});

Test.describe("Test for negative values", function() {
  Test.assertEquals(isTriangle(-1, 2, 3), false);
  Test.assertEquals(isTriangle(1, -2, 3), false);
  Test.assertEquals(isTriangle(1, 2, -3), false);
  Test.assertEquals(isTriangle(-5, 1, 3), false);
  Test.assertEquals(isTriangle(0, 2, 3), false);
});
