$(document).ready(function() {
   $('.burger-icon').on('click',function(){
      event.preventDefault();
      $('body').toggleClass('slide-down');
  });
  $("#feature-btn").on("click", function(){
  $('html, body').animate({
    scrollTop: $(".feature").offset().top
  }, 750); 
 });
 $("#chef-btn").on("click", function(){
  $('html, body').animate({
    scrollTop: $(".main").offset().top
  }, 750); 
 });
 $("#map-btn").on("click", function(){
  $('html, body').animate({
    scrollTop: $(".map").offset().top
  }, 750); 
 });
});