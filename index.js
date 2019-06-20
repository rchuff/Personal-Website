
//changes pages when the down arrow is clicked
$('.down-arrow').click(function(){
  $('.title').toggleClass('hide show');
  $('.down-arrow').toggleClass('hide');
  $('.about-div').toggleClass('hide show');
  $('nav').css('display','flex');
  $('.contact-div').removeClass('hide');
});

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

//Once you go past home page, it should open up all of the pages. Contact page
//should fade in when you reach the bottom of the about page.
