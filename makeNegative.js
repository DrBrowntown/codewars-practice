function makeNegative(num) {
  if (num > 0) {
    
    return -num
  }
  else {
    return num
  }
  
}

makeNegative(5);

//Best Practices Answers:
//They return a -0 if the number is 0. 

//1
function makeNegative(num) {
  return -Math.abs(num);
}
//2
makeNegative = n => -Math.abs(n)

//3

function makeNegative(num) {
  return num < 0 ? num : -num;
}
