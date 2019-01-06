// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  let convertArrayToString = arr.toString();
  let removeCommasFromString = convertArrayToString.replace(/,/g, "");
  let convertBinaryStringToInt = parseInt(removeCommasFromString, 2);
  return convertBinaryStringToInt;
};

// Better version

const binaryArrayToNumber = arr => {
  return parseInt(Number(arr.join("")), 2);
};

//   Test

describe("One's and Zero's", () => {
  const rand = () => Math.round(Math.random());
  const solution = arr => parseInt(arr.join(""), 2);

  it("Works with random tests", () => {
    let tests = [];

    for (let i = 0; i < 50; i++) {
      let temp = [];

      for (let i = 0; i < Math.floor(Math.random() * 5) + 4; i++) {
        temp.push(rand());
      }

      tests.push(temp);
    }

    tests.map(test => {
      console.log("Tests " + test + " ==> " + solution(test));
      Test.assertEquals(binaryArrayToNumber([...test]), solution(test));
    });
  });
});
