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
