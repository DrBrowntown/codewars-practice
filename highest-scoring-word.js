// Description:

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(" ");
  var str = "abcdefghijklmnopqrstuvwxyz";
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word) {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}

// Test
Test.describe("Basic tests", _ => {
  Test.assertEquals(high("man i need a taxi up to ubud"), "taxi");
  Test.assertEquals(
    high("what time are we climbing up the volcano"),
    "volcano"
  );
  Test.assertEquals(high("take me to semynak"), "semynak");
  Test.assertEquals(high("massage yes massage yes massage"), "massage");
  Test.assertEquals(high("take two bintang and a dance please"), "bintang");
});

Test.describe("Random tests", _ => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
  function myhigh(x) {
    x = x.toLowerCase().split(" ");
    var tot = 0,
      lead = 0,
      lead2 = 0,
      letter = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
      };
    for (var i = 0; i < x.length; i++) {
      x[i] = x[i].split("");
      for (var j = 0; j < x[i].length; j++) {
        tot += letter[x[i][j]];
      }
      console.log(tot);
      if (tot > lead) (lead = tot), (lead2 = i);
      tot = 0;
    }
    return x[lead2].join("");
  }

  var names = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  for (var i = 0; i < 100; i++) {
    var x = [],
      b = [],
      a = [],
      c = [],
      d = [],
      e = [],
      f = [],
      g = [],
      h = [],
      len = randint(0, 31);

    for (var k = 0; k < len; k++) {
      a.push(names[randint(0, names.length - 1)]);
      b.push(names[randint(0, names.length - 1)]);
      c.push(names[randint(0, names.length - 1)]);
      d.push(names[randint(0, names.length - 1)]);
      e.push(names[randint(0, names.length - 1)]);
      f.push(names[randint(0, names.length - 1)]);
      g.push(names[randint(0, names.length - 1)]);
      h.push(names[randint(0, names.length - 1)]);
    }
    x.push(a.join(""), b.join(""), c.join(""), d.join(""));
    x = x.join(" ");

    Test.it(`Testing for ${x}`, _ => {
      Test.assertEquals(
        high(x),
        myhigh(x),
        "It should work for random inputs too"
      );
    });
  }
});
