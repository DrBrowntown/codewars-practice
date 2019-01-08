// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input.
// If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or
// IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript).

function factorial(num) {
  // Calculate the factorial here
  if (num === 0 || num === 1) return 1;
  else if (!(num >= 0 && num <= 12)) throw new RangeError("Input out of range");
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

//   Test

Test.assertEquals(factorial(0), 1, "factorial for 0 is 1");
Test.assertEquals(factorial(1), 1, "factorial for 1 is 1");
Test.assertEquals(factorial(2), 2, "factorial for 2 is 2");
Test.assertEquals(factorial(3), 6, "factorial for 3 is 6");
