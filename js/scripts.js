// Business Logic
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
   return "V" + countTo3(num % 5);
 } else if (num === 9) {
  return "IX";
  }
}

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

function determinesHundreds(num) {
  var remainderHundred = (num % 100);
  if (num <= 99) {
    return determinesTens(num);
  }
  else if (num >= 100 && num <= 199) {
    return "C" + determinesTens(remainderHundred)
  }
  else if (num >= 200 && num <= 299) {
    return "CC" + determinesTens(remainderHundred)
  }
  else if (num >= 300 && num <= 399) {
    return "CCC" + determinesTens(remainderHundred)
  }
  else if (num >= 400 && num <= 499) {
    return "CD" + determinesTens(remainderHundred)
  }
  else if (num >= 500 && num <= 599) {
    return "D" + determinesTens(remainderHundred)
  }
  else if (num >= 600 && num <= 699) {
    return "DC" + determinesTens(remainderHundred)
  }
  else if (num >= 700 && num <= 799) {
    return "DCC" + determinesTens(remainderHundred)
  }
  else if (num >= 800 && num <= 899) {
    return "DCCC" + determinesTens(remainderHundred)
  }
  else if (num >= 900 && num <= 999) {
    return "CM" + determinesTens(remainderHundred)
  }
}

function romanNumeralConverter(num) {
  var remainderThousand = (num % 1000);
  if (num === 0) {
    return "Romans didn't invent 0"
  }
  else if (num <= 999) {
    return determinesHundreds(num)
  }
  else if (num >= 1000 && num <= 1999) {
    return "M" + determinesHundreds(remainderThousand)
  }
  else if (num >= 2000 && num <= 2999) {
    return "MM" + determinesHundreds(remainderThousand)
  }
  else if (num >= 3000 && num <= 3999) {
    return "MMM" + determinesHundreds(remainderThousand)
  } else if (num >= 4000 || num === 0) {
    return "Not a roman numeral."
  }
}
// User Interface Logic
$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = romanNumeralConverter(parseInt($("input#number").val()));
    console.log(romanNumeral);
    $("#romanOutput").text(romanNumeral);
  })

});
