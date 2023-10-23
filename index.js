//jshint esversion: 6

//If the home button on the navbar is clicked hide main site.
$('nav a').click(function(e) {
  if (this.innerHTML === 'Home') {

    $('.title').toggleClass('hide');
    $('.down-arrow').toggleClass('hide');
    $('#about > div').toggleClass('hide fade');
    $('nav').css('display', 'none');
    $('.home-background .sub-section').css('display', 'none');
    $('.contact-div').addClass('hide');
    $('.project-div').toggleClass('hide');
  }
});

//Used for hamburger menu on smaller screens
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

//Exits out of burger menu when a link clicked and resets animations on lis
  navLinks.forEach(link => {
    link.addEventListener('click',()=> {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      addAnimation(navLinks);
    });
  });

//Exits out of burger menu when burger clicked and resets animations on lis
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    addAnimation(navLinks);
    burger.classList.toggle('toggle');
  });

};

navSlide();

//resets animations for burger menu
function addAnimation(navArray){
  navArray.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
    }
});
}


//Navigation bar dissapears when you scroll down and reappears when you scroll up
var didScroll;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
var lastScrollTop = 0;

$(window).scroll(function(e) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);


function hasScrolled() {
  let st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }
  lastScrollTop = st;
}
