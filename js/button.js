$(function(){
  $(".button").click(function(){
    var $button_circle = $(this).children();
    $($button_circle).toggleClass("button-circle button-circle-on", 200);
    $(this).toggleClass("button button-on", 300);
  });
});
