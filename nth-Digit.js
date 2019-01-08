// Complete the function that takes two numbers as
// input, num and nth and return the nth digit of num
// (counting from right to left).

// Note

//     If num is negative, ignore its sign and treat it as a positive value
//     If nth is not positive, return -1
//     Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

// Examples

// findDigit(5673, 4)     returns 5
// findDigit(129, 2)      returns 2
// findDigit(-2825, 3)    returns 8
// findDigit(-456, 4)     returns 0
// findDigit(0, 20)       returns 0
// findDigit(65, 0)       returns -1
// findDigit(24, -8)      returns -1

var findDigit = function(num, nth) {
  if (nth < 1) {
    return -1;
  } else if (num < 0) {
    num *= -1;
    return findDigit(num, nth);
  } else if (nth > num.toString().length) {
    return 0;
  } else {
    let string = String(num);
    let length = string.length;
    let nthDigit = parseInt(string.charAt(length - nth), 10);
    return nthDigit;
  }
};

// Test

var sol = function(num, nth) {
  num = num < 0 ? -num : num;
  if (nth <= 0) return -1;

  return (
    ((num % Math.pow(10, nth)) - (num % Math.pow(10, nth - 1))) /
    Math.pow(10, nth - 1)
  );
};

describe("Find Digit", function() {
  it("Normal Values", function() {
    Test.assertEquals(findDigit(5673, 4), 5);
    Test.assertEquals(findDigit(129, 2), 2);
    Test.assertEquals(findDigit(-2825, 3), 8);
    Test.assertEquals(findDigit(0, 20), 0);
    Test.assertEquals(findDigit(65, 0), -1);
    Test.assertEquals(findDigit(24, -8), -1);
  });
  it("Num is Negative", function() {
    Test.assertEquals(findDigit(-456, 4), 0);
    Test.assertEquals(findDigit(-1234, 2), 3);
    Test.assertEquals(findDigit(-5540, 1), 0);
  });
  it("Nth is not Positive", function() {
    Test.assertEquals(findDigit(678998, 0), -1);
    Test.assertEquals(findDigit(-67854, -57), -1);
    Test.assertEquals(findDigit(0, -3), -1);
  });
  it("Random Tests", function() {
    for (var i = 0; i < 10; i++) {
      var rand_num = ~~(10000000 * Math.random()),
        rand_nth = ~~(8 * Math.random() - 2);

      Test.assertEquals(findDigit(rand_num, rand_nth), sol(rand_num, rand_nth));
    }
  });
});
