// Given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabet_position("The sunset sets at twelve o' clock.")

// // Should return
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// (as a string)

function alphabetPosition(text) {
  let lowText = text.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let space = " ";
  let position = "";
  for (let letter in lowText) {
    if (alphabet.indexOf(lowText[letter]) < 0) {
      continue;
    } else {
      position += alphabet.indexOf(lowText[letter]) + 1;
      position += space;
    }
  }
  position = position.slice(0, -1);
  return position;
}

// Test

function ap(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function(l) {
      return /[a-z]/.test(l);
    })
    .map(function(l) {
      return l.charCodeAt() - 96;
    })
    .join(" ");
}

function randomChar() {
  var chars =
      "abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? ",
    rand = Math.floor(Math.random() * chars.length);
  return chars[rand];
}

describe("Replace with alphabet position", () => {
  it("Fixed tests:", () => {
    for (var i = 65; i <= 122; i++) {
      var letter = String.fromCharCode(i);
      Test.assertEquals(alphabetPosition(letter), ap(letter));
    }
    Test.assertEquals(alphabetPosition("-.-'"), "");
  });
});
describe("Randomly generated tests:", () => {
  for (var i = 0; i < 50; i++) {
    var x = "";
    for (var j = 0; j < 8; j++) {
      x += randomChar();
    }
    it(`Testing "${x}"`, () => Test.assertEquals(alphabetPosition(x), ap(x)));
  }
});
