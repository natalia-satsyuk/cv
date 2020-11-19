// slide-menu
$(".nav-menu-bar").click(function() {
	$(".nav-list").slideToggle(400);
});

// education/work button
$(".button").click(function() {
	$(this).next().slideToggle(400);
});

$(".choose-active").click(function() {
	$(this).toggleClass("active-education");
});

// pop-up certificate
	$(".sertif-watch").click(function(){
		$(".sertificate").fadeIn(400);
	});

	$(".close-image").click(function(){
		$(".sertificate").fadeOut(300);
	});

	$(".sertificate").click(function(){
		$(this).fadeOut(300);
	});

// slider
$(".sponsors-slider").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

//anchor-slow
$(document).ready(function(){
    $(".nav-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function(){
    $(".header-button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

//animation after scroll
//Cache reference to window and animation items
var $animation_elements = $('.follow-list-item');
var $window = $(window);

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('follow-btn-animate');
    } else {
      $element.removeClass('follow-btn-animate');
    }
  });
}
