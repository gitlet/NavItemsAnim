$(document).ready(function() {
  // alert('hello');
  $("body .wrapper .subsForm #subsBtn").on("click", function() {
    $(this).toggleClass("wobble");
  });

  // $("body .wrapper .subsForm #subsBtn").mousedown(function() {
  //   $(this).css("transform", "scale(0.8, 0.8)");
  //   // $(this).css("transition", "transform ease-in-out 2s");
  // });
  // $("body .wrapper .subsForm #subsBtn").mouseup(function() {
  //   $(this).css("transform", "scale(1, 1)");
  //   // $(this).css("transition", "transform ease-in-out 2s");
  // });

  // CLASS FOR INPUT_SEARCH - ONCLICK INVOKE:
  $("body #scaling-elems .wrapper #input_search").click(function() {
    $(this).toggleClass("scale_width");
  });

  // VERTICALLY SLIDING PANELS:
  $("body #vertical_sliders .content span").click(function() {
    $("body #vertical_sliders .content p").slideToggle();
  });

});
