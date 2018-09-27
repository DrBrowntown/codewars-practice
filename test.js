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

