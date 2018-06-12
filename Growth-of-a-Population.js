function nbYear(p0, percent, aug, p) {
  var fullPop = 0;
  var years = 0; 
  do {
    fullPop = p0 + (p0  * (percent * .01)) + aug
    years =+ 1
    
  } while (fullPop < p)
  return years;
  
}

nbYear(1500, 5, 100, 5000);