//jshint esversion: 6


//changes pages when the down arrow is clicked
$('.down-arrow').click(function(){
  $('.title').toggleClass('hide');
  $('.down-arrow').toggleClass('hide');
  $('#about > div').toggleClass('hide fade');
  $('nav').css('display','flex');
  $('.home-background .sub-section').css('display', 'block');
  $('.contact-div').removeClass('hide');
});

$('nav a').click(function(e){
  if (this.innerHTML === 'Home'){

    $('.title').toggleClass('hide');
    $('.down-arrow').toggleClass('hide');
    $('#about > div').toggleClass('hide fade');
    $('nav').css('display','none');
    $('.home-background .sub-section').css('display', 'none');
    $('.contact-div').addClass('hide');
  }
});


//Navigation bar dissapears when you scroll down and reappears when you scroll up
var didScroll;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
var lastScrollTop = 0;

$(window).scroll(function(e){
  didScroll = true;
});

setInterval(function(){
  if (didScroll){
    hasScrolled();
    didScroll = false;
  }
}, 250);


function hasScrolled() {
  let st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight){
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()){
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = st;
}
