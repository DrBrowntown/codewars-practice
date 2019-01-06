// Create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str) {
  //You got this!
  let lastCharacterIndex = str.length - 1;
  return str.substring(1, lastCharacterIndex);
}

// Better version using slice() method
function removeChar(str) {
  return str.slice(1, -1);
}

// Test

Test.describe("Tests", function() {
  Test.assertEquals(removeChar("eloquent"), "loquen");
  Test.assertEquals(removeChar("country"), "ountr");
  Test.assertEquals(removeChar("person"), "erso");
  Test.assertEquals(removeChar("place"), "lac");
});

Test.describe("Random Tests", function() {
  function testSolution(str) {
    return (this.str = str.substring(1, str.length - 1));
  }

  for (var i = 0; i < 6; i++) {
    var possible = "abc123",
      text = "";
    for (var k = 0; k < 7; k++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    Test.assertEquals(removeChar(text), testSolution(text));
  }
});
