// Description:

// Two tortoises named A and B must run a race.
// A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead,
//  but B's speed is 850 feet per hour.
// How long will it take B to catch A?

// More generally: given two speeds
// v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and
// a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed
// in hours, minutes and seconds
// (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or
//{-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".

function race(v1, v2, g) {
  switch (true) {
    case v1 >= v2:
      return null;
  }
  let v1FPS = v1 / 60 / 60;
  let v2FPS = v2 / 60 / 60;
  let speedDeficit = v2FPS - v1FPS;
  let timeRemaining = g / speedDeficit;

  if (timeRemaining >= 0) {
    let hours = Math.floor(timeRemaining / 3600);
    timeRemaining = timeRemaining % 3600;

    let minutes = Math.floor(timeRemaining / 60);
    timeRemaining = timeRemaining % 60;

    let seconds = Math.floor(timeRemaining);

    return [hours, minutes, seconds];
  } else {
    return;
  }
}

// Better Versions

function race(v1, v2, g) {
  let time = g / (v2 - v1);
  return v2 > v1
    ? [
        Math.floor(time),
        Math.floor((time * 60) % 60),
        Math.floor((time * 3600) % 60)
      ]
    : null;
}

function race(v1, v2, g) {
  if (v2 < v1) {
    return null;
  }

  var seconds = Math.floor((g / (v2 - v1)) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;

  return [h, m, s];
}
// Test

Test.describe("Tortoise Racing", function() {
  Test.it("Basic tests ", function() {
    Test.assertSimilar(race(720, 850, 70), [0, 32, 18]);
    Test.assertSimilar(race(80, 91, 37), [3, 21, 49]);
    Test.assertSimilar(race(80, 100, 40), [2, 0, 0]);
    Test.assertSimilar(race(720, 850, 37), [0, 17, 4]);
    Test.assertSimilar(race(720, 850, 370), [2, 50, 46]);
    Test.assertSimilar(race(120, 850, 37), [0, 3, 2]);
    Test.assertSimilar(race(820, 850, 550), [18, 20, 0]);
    Test.assertSimilar(race(820, 81, 550), null);
  });
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  // --------------------
  function sol1378(v1, v2, g) {
    var d = v2 - v1;
    if (d <= 0) return null;
    var h = ~~(g / d);
    var r = g % d;
    var mn = ~~((r * 60) / d);
    var s = ~~((((r * 60) % d) * 60) / d);
    return [h, mn, s];
  }
  // --------------------
  for (var _ = 0; _ < 50; _++) {
    var v1 = randint(50, 750);
    var v2 = randint(v1 + 20, 850);
    var g = randint(60, 150);
    Test.it("Testing: ", function() {
      Test.assertSimilar(
        race(v1, v2, g),
        sol1378(v1, v2, g),
        "It should work for random tests too"
      );
    });
  }
});
