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
  return "IX";
  }
}
//
// function countTo10(num) {
//   if (num <= 9) {
//     return countTo9(num);
//   } else if (num >= 10) {
//     return "X";
//   }
// }
//
// function countTo14(num) {
//   if (num <= 10) {
//     return countTo10(num);
//   } else if (num > 10 && num % 10 <= 3) {
//     return countTo10(num) + countTo3(num % 10);
//   } else if (num === 14) {
//     return "XIV";
//   }
// }
//
// function countsPast15(num) {
//   if (num <= 14) {
//     return countTo14(num);
//   }
// }

function determinesTens(num) {
  var remainderTen = (num % 10);
  if (num <= 9) {
    return countTo9(num);
  }
  else if (num >= 10 && num <= 19) {
    return "X" + countTo9(remainderTen)
  } else if (num >= 20 && num <=29) {
    return "XX" + countTo9(remainderTen);
  }
  else if (num >= 30 && num <= 39) {
    return "XXX" + countTo9(remainderTen);
  }
  else if (num >= 40 && num <= 49) {
    return "XL" + countTo9(remainderTen);
  }
  else if (num >= 50 && num <= 59) {
    return "L" + countTo9(remainderTen);
  }
  else if (num >= 60 && num <= 69) {
    return "LX" + countTo9(remainderTen);
  }
  else if (num >= 70 && num <= 79) {
    return "LXX" + countTo9(remainderTen);
  }
  else if (num >= 80 && num <= 89) {
    return "LXXX" + countTo9(remainderTen);
  }
  else if (num >= 90 && num <= 99) {
    return "XC" + countTo9(remainderTen);
  }
}

// function outPutsTens(num) {
//   if (num === 10) {
//     return "X"
//   } else {
//     return (determinesTens(num));
//   }
// }


$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = determinesTens(parseInt($("input#number").val()));
    console.log(romanNumeral);
  })

});
