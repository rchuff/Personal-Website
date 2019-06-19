
//changes pages when the down arrow is clicked
$('.down-arrow').click(function(){
  $('.title').toggleClass('hide show');
  $('.down-arrow').toggleClass('hide');
  $('.about-div').toggleClass('hide show');
  $('nav').css('display','flex');
});
