function count1(num) {
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




















$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = countTo3(parseInt($("input#number").val()));
    console.log(romanNumeral);
  })

});
