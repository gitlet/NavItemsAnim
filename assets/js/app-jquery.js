$(document).ready(function() {
  // alert('hello');
  // $("body .wrapper .subsForm #subsBtn").on("click", function() {
  //   $(this).toggleClass("wobble");
  // });

  $("body .wrapper .subsForm #subsBtn").mousedown(function() {
    $(this).css("transform", "scale(0.8, 0.8)", "transition", "transform ease-in-out 1s");
  });
  $("body .wrapper .subsForm #subsBtn").mouseup(function() {
    $(this).css("transform", "scale(1, 1)", "transition", "transform ease-in-out 1s");
  });

});
