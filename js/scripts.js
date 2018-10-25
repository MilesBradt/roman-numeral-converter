function count1(num) {
  if (num === 1) {
    return "I";
  }
}





















$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    var romanNumeral = count1(parseInt($("input#number").val()));
    console.log(romanNumeral);
  })

});
