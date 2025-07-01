$(document).ready(function() {

  //respMenu
  $(".respMenu").click(function() {
    $(".primaryMenu").slideToggle("fast");
  });

  //icons in dropdowm menu
  $(".primaryMenu > ul > li > .megamenu").parent().find("a:first").append(' <i class="fa fa-angle-down"></i>');
  $(".primaryMenu > ul > li > .megamenu > ul > li > ul").parent().find("a:first").append(' <i class="fa fa-angle-right pull-right"></i>');
  $(".primaryMenu > ul > li > .megamenu > ul > li > ul > li > ul").parent().find("a:first").append(' <i class="fa fa-angle-right pull-right"></i>');

  //bannerSlider
  $("#bannerSlider").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      pagination: false,
      paginationSpeed : 400,
      singleItem : true,
      autoPlay: 7000,
      navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
      ]
      // transitionStyle: "fade"
      //transitionStyle: "fadeUp"
      //transitionStyle: "goDown"
      //transitionStyle: "backSlide"
  });

  //parallax scrolling bg
  var $window = $(window); //You forgot this line in the above example

  $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        // Put together our final background position
        var coords = '100% '+ yPos + 'px';
        // Move the background
        $bgobj.css({ backgroundPosition: coords 
        });
      });
  });

  //positioned parallax element
  function parallax(){
    var scrolled = $(window).scrollTop();
      $('.parallax-shape1 img').css('top', -(scrolled * 0.55) + 'px');
  }
  $(window).scroll(function(e){
      parallax();
  });

  //popularProductsSlider
  $("#popularProductsSlider").owlCarousel({ 
    autoPlay: 7000, //Set AutoPlay to 3 seconds         
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
      ]
  });

  //brandsSlider
  $("#brandsSlider").owlCarousel({ 
    autoPlay: 7500, //Set AutoPlay to 3 seconds         
    items : 6,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,4],
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>"
      ]
  });

  //target link slide on click
  $('.down-arrow-box a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 0
    }, 1000);
    return false;
  });

  //scrollUp
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function() {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
  });
});