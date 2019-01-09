// Description:

// ROT13 is a simple letter substitution cipher that replaces a letter with
// the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered
// with Rot13. If there are numbers or special characters included in the
// string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted,
// like in the original Rot13 "implementation".

function rot13(str) {
  var num = 13;
  var lowerCaseStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?.]/);
  var newStr = "";
  var x = 9;
  for (var i = 0; i < lowerCaseStr.length; i++) {
    var currentLetter = lowerCaseStr[i];
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;

    if (pattern.test(currentLetter)) {
      newStr += currentLetter;
      continue;
    }
    switch (currentLetter) {
      case " ":
        newStr += currentLetter;
        continue;
    }
    switch (true) {
      case currentLetter <= 9:
        newStr += currentLetter;
        continue;
    }
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else newStr += alphabet[newIndex];
  }
  return newStr;
}

// Test
Test.describe("Rot13", function() {
  Test.it("test", function() {
    Test.expect(
      "grfg" == rot13("test"),
      "Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
    );
  });
  Test.it("Test", function() {
    Test.expect(
      "Grfg" == rot13("Test"),
      "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
    );
  });
  Test.it("Codewars", function() {
    Test.expect(
      "Pbqrjnef" == rot13("Codewars"),
      "Input: Codewars , Expected Output: Pbqrjnef , Actual Output: " +
        rot13("Codewars")
    );
  });
  Test.it("Ruby is cool!", function() {
    Test.expect(
      "Ehol vf pbby!" == rot13("Ruby is cool!"),
      "Input: Ruby is cool! , Expected Output: Ehol vf pbby! , Actual Output: " +
        rot13("Ruby is cool!")
    );
  });
  Test.it("10+2 is twelve.", function() {
    Test.expect(
      "10+2 vf gjryir." == rot13("10+2 is twelve."),
      "Input: 10+2 is twelve. , Expected Output: 10+2 vf gjryir. , Actual Output: " +
        rot13("10+2 is twelve.")
    );
  });
  Test.it("abcdefghijklmnopqrstuvwxyz", function() {
    Test.expect(
      "nopqrstuvwxyzabcdefghijklm" == rot13("abcdefghijklmnopqrstuvwxyz"),
      "Input: abcdefghijklmnopqrstuvwxyz , Expected Output: nopqrstuvwxyzabcdefghijklm , Actual Output: " +
        rot13("abcdefghijklmnopqrstuvwxyz")
    );
  });

  function solutionFunction(message) {
    res = "";
    for (i in message) {
      n = message[i].charCodeAt(0);
      res +=
        97 <= n && n <= 122
          ? String.fromCharCode(((n - 97 + 13) % 26) + 97)
          : 65 <= n && n <= 90
          ? String.fromCharCode(((n - 65 + 13) % 26) + 65)
          : String.fromCharCode(n);
    }
    return res;
  }

  Test.it("Random Strings", function() {
    for (k = 0; k < 5; k++) {
      random = Test.randomToken();
      solution = solutionFunction(random);
      test = rot13(random);
      Test.expect(
        solution == test,
        "Input: " +
          random +
          " , Expected Output: " +
          solution +
          " , Actual Output: " +
          test
      );
    }
  });
});
