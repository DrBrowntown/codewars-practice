// Description:

// In a factory a printer prints labels for boxes.
// For one kind of boxes the printer has to use colors which,
// for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string.
// For example a "good" control string would be aaabbbbhaijjjm meaning
// that the printer used three times color a,
// four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and
// a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

// You have to write a function printer_error which given a
// string will output the error rate of the printer as a string
// representing a rational whose numerator is the number of errors and
// the denominator the length of the control string.
// Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  let code = s;
  let denominator = s.length;
  let numerator = 0;
  for (var i = 0; i < denominator; i++) {
    if (code[i].match(/[n-z]/)) {
      numerator += 1;
    }
  }
  return numerator + "/" + denominator;
}

// Test

Test.describe("printerError", function() {
  Test.it("Basic tests", function() {
    var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    Test.assertEquals(printerError(s), "3/56");
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    Test.assertEquals(printerError(s), "6/60");
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu";
    Test.assertEquals(printerError(s), "11/65");
    s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm";
    Test.assertEquals(printerError(s), "0/53");
  });
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function do_ex() {
    var i = 0,
      res = "";
    var k = randint(10, 500);
    while (i < (~~3 * k) / 2) {
      var n = randint(97, 109);
      res += String.fromCharCode(n);
      i++;
    }
    while (i < 2 * k) {
      if (i % 17 === 0) n = randint(110, 122);
      else n = randint(97, 109);
      res += String.fromCharCode(n);
      i++;
    }
    return res;
  }
  //................
  function printerErrorSol(s) {
    var cnt = 0,
      l = s.length;
    for (var i = 0; i < l; i++) {
      var c = s.charCodeAt(i);
      if (c > 109 && c <= 122) cnt++;
    }
    return +cnt + "/" + l;
  }
  //................

  for (var i = 0; i < 200; i++) {
    var s = do_ex();
    Test.it("Testing printerError: ", function() {
      Test.assertEquals(printerError(s), printerErrorSol(s));
    });
  }
});
