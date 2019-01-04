// Drink 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of
// litres to drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * 0.5);
}

//   Test cases
Test.describe("Fixed tests", _ => {
  Test.it("Tests", _ => {
    Test.assertEquals(litres(2), 1, "should return 1 litre");
    Test.assertEquals(litres(1.4), 0, "should return 0 litres");
    Test.assertEquals(litres(12.3), 6, "should return 6 litres");
    Test.assertEquals(litres(0.82), 0, "should return 0 litres");
    Test.assertEquals(litres(11.8), 5, "should return 5 litres");
    Test.assertEquals(litres(1787), 893, "should return 893 litres");
    Test.assertEquals(litres(0), 0, "should return 0 litres");
  });
});

Test.describe("Random tests", _ => {
  const ans = t => Math.floor(t * 0.5);

  Test.it("Tests", _ => {
    for (var i = 0; i < 40; i++) {
      var time = Math.floor(Math.random() * 10000);
      Test.assertEquals(
        litres(time),
        ans(time),
        `should return ${time} litre${time === 1 ? "" : "s"}`
      );
    }
  });
});
