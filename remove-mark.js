// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
// Test

Test.assertSimilar(removeExclamationMarks("Hello World!"), "Hello World");
Test.assertSimilar(removeExclamationMarks("Hello World!!!"), "Hello World");
Test.assertSimilar(removeExclamationMarks("Hi! Hello!"), "Hi Hello");

function solution(s) {
  return s.replace(/!/g, "");
}

let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz";
const getRandomString = () =>
  Array.from({ length: 10 })
    .map(x => abc[~~(Math.random() * abc.length)])
    .join("");

let rs =
  getRandomString() +
  "!" +
  getRandomString() +
  " " +
  getRandomString() +
  "!" +
  getRandomString();
Test.assertSimilar(removeExclamationMarks(rs), solution(rs));
