// Create a function that returns the sum of the two lowest
// positive numbers given an array of minimum 4 integers.
// No floats or empty arrays will be passed.

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

// Test

describe("Your function", _ => {
  it("should work for basic tests", _ => {
    Test.assertEquals(
      sumTwoSmallestNumbers([5, 8, 12, 19, 22]),
      13,
      "Sum should be 13"
    );
    Test.assertEquals(
      sumTwoSmallestNumbers([15, 28, 4, 2, 43]),
      6,
      "Sum should be 6"
    );
    Test.assertEquals(
      sumTwoSmallestNumbers([3, 87, 45, 12, 7]),
      10,
      "Sum should be 10"
    );
    Test.assertEquals(
      sumTwoSmallestNumbers([23, 71, 33, 82, 1]),
      24,
      "Sum should be 24"
    );
    Test.assertEquals(
      sumTwoSmallestNumbers([52, 76, 14, 12, 4]),
      16,
      "Sum should be 16"
    );
  });
  it("should work for more fixed tests as well", _ => {
    Test.assertEquals(sumTwoSmallestNumbers([243, 546, 745, 123, 978]), 366);
    Test.assertEquals(
      sumTwoSmallestNumbers([1948, 456, 1265, 7896, 9986]),
      1721
    );
    Test.assertEquals(
      sumTwoSmallestNumbers([1, 876, 234234, 45345, 34435]),
      877
    );
    Test.assertEquals(sumTwoSmallestNumbers([5, 4, 1, 2, 3]), 3);
    Test.assertEquals(
      sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]),
      3453455
    );
  });
  it("should finally work for <b><i><u>random</u></i></b> tests", _ => {
    function solution(numbers) {
      numbers.sort(function(a, b) {
        return a - b;
      });
      return numbers[0] + numbers[1];
    }
    for (let i = 0; i < 100; i++) {
      var randArr = [
        Test.randomNumber() + 1000,
        Test.randomNumber(),
        Test.randomNumber(),
        Test.randomNumber(),
        Test.randomNumber()
      ];
      Test.assertEquals(
        sumTwoSmallestNumbers(randArr.slice()),
        solution(randArr)
      );
    }
  });
});
