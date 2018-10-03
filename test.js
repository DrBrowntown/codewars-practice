var userBalance = 0;
var lastClick = 0;
var timeArray = [0];

// Gets called whenever the money finished tweening to the bottom.
function addFromCatch(value) {
  timeArray.unshift(lastClick);
  var timeBetween = timeArray[0] - timeArray[1];
  var delay = 2000 - timeBetween;

  setTimeout(function() {
    userBalance += value;
    updateBalance(userBalance);
  }, delay);
}

// Gets called every frame.
// Time elapsed since the last update is passed into the function(milliseconds)
function onUpdate({ delta }) {
  lastClick += delta;
}

function processSlots(input) {
  let chain = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
      console.log(input[i][j]);
      let firstCheck = input[i][j];
      let index1 = input[i][j + 1];
      let index2 = input[i][j + 2];
      let index3 = input[i][j + 3];
      let index4 = input[i][j + 4];
      let index1Array1 = input[i + 1][j + 1];
      let index2Array2 = input[i + 2][j + 2];
      let index3Array1 = input[i + 1][j + 3];
      let index4Array0 = input[i][j + 4];
      let index2Array0 = input[i][j + 2];
      let index0Array2 = input[i + 2][j];
      let index4Array2 = input[i + 2][j + 4];
      if (
        (firstCheck === index1 &&
          firstCheck === index2 &&
          firstCheck === index3 &&
          firstCheck === index4) ||
        (firstCheck === index1Array1 &&
          firstCheck === index2Array2 &&
          firstCheck === index3Array1 &&
          firstCheck === index4Array0) ||
        (index0Array2 === index1Array1 &&
          index0Array2 === index2Array0 &&
          index0Array2 === index3Array1 &&
          index0Array2 === index4Array2)
      )
        console.log("5 in a row");
      else if (
        (firstCheck === index1 &&
          firstCheck === index2 &&
          firstCheck === index3) ||
        (firstCheck === index1Array1 &&
          firstCheck === index2Array2 &&
          firstCheck === index3Array1) ||
        (index0Array2 === index1Array1 &&
          index0Array2 === index2Array0 &&
          index0Array2 === index3Array1)
      )
        console.log("4 in a row");
    }
  }
}
// examples input
var array = [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]];
//Output: '1 winning line, scoring 20 points.'

var array2 = [[2, 4, 2, 2, 3], [1, 1, 1, 4, 1], [3, 3, 3, 4, 2]];
//Output: '2 winning lines, scoring a total 30 points.'

processSlots(array);
