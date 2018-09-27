//==================//
// 		Part 1	 	//
//==================//

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

// You have access to a function updateBalance which
// takes in a string and sets the ui to that value
// updateBalance(userBalance);

//==================//
// 		Part 2	 	//
//==================//

function processSlots(input) {
  console.log("Output: ");
}

// examples input
var array = [[1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0]];
//Output: '1 winning line, scoring 20 points.'

var array2 = [[2, 4, 2, 2, 3], [1, 1, 1, 4, 1], [3, 3, 3, 4, 2]];
//Output: '2 winning lines, scoring a total 30 points.'
