function translate1(num) {
  if (num === 1) {
    return "I";
  }
}

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









$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = countTo5(parseInt($("input#number").val()));
    console.log(romanNumeral);
  })

});
