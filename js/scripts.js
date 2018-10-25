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
  } else if (num >= 5) {
    return "V";
  }
}

function countTo8(num) {
  if (num <= 5) {
    return countTo5(num);
  } else if (num > 5 && num % 5 <= 3) {
   return countTo5(num) + countTo3(num % 5);
  }
}

  //  {
  //     countUp.push("I")};
  // } else if (num <= 5) {
  //     return countTo5(num);
  //   }
  // }









$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = countTo8(parseInt($("input#number").val()));
    console.log(romanNumeral);
  })

});
