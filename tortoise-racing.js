function race(v1, v2, g) {
  switch (true) {
    case v1 >= v2:
      return null;
  }
  let v1FPS = v1 / 60 / 60;
  let v2FPS = v2 / 60 / 60;
  let speedDeficit = v2FPS - v1FPS;
  let timeRemaining = g / speedDeficit;
  let timeArray = [];

  if (timeRemaining >= 0) {
    let hours = timeRemaining / 3600;
    timeArray.push(Math.floor(hours));
    timeRemaining = timeRemaining % 3600;

    let minutes = timeRemaining / 60;
    timeArray.push(Math.floor(minutes));
    timeRemaining = timeRemaining % 60;

    let seconds = timeRemaining;
    timeArray.push(Math.floor(seconds));

    return timeArray;
  } else {
    return;
  }
}
