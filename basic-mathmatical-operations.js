// The function should take three arguments -
// operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "/") {
    return value1 / value2;
  } else {
    console.log("Invalid operator");
  }
}

basicOp("+", 4, 7); // Output: 11
basicOp("-", 15, 18); // Output: -3
basicOp("*", 5, 5); // Output: 25
basicOp("/", 49, 7); // Output: 7

function arithmetic(value1, value2, operation) {
  if (operation === "add") {
    return value1 + value2;
  }
  if (operation === "subtract") {
    return value1 - value2;
  }
  if (operation === "multiply") {
    return value1 * value2;
  }
  if (operation === "divide") {
    return value1 / value2;
  } else {
    console.log("Invalid operator");
  }
}

// Better solution
function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}
