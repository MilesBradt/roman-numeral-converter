// function translate1(num) {
//   if (num === 1) {
//     return "I";
//   }
// }

function countTo3(num) {
  var countUp= []
  for (var i = 0; i < num; i++) {
  countUp.push("I")
  }
  return countUp.join('');
}

function countTo4(num) {
  if (num <= 3) {
    return countTo3(num);
  } else if (num === 4) {
    return "IV";
  }
}

function countTo5(num) {
  if (num <= 4) {
    return countTo4(num);
  } else if (num === 5) {
    return "V";
  }
}

function countTo9(num) {
  if (num <= 5) {
    return countTo5(num);
  } else if (num > 5 && num % 5 <= 3) {
   return countTo5(num) + countTo3(num % 5);
 } else if (num === 9) {
  return "IV";
  }
}

function countTo10(num) {
  if (num <= 9) {
    return countTo9(num);
  } else if (num === 10) {
    return "X";
  }
}

function countTo13(num) {
  if (num <= 10) {
    return countTo10(num);
  } else if (num > 10 && num % 10 <= 3) {
    return countTo10(num) + countTo3(num % 10);
  } else if (num === 14) {
    return "XIV";
  }
}





$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = countTo13(parseInt($("input#number").val()));
    console.log(romanNumeral);
  })

});
