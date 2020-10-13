// Hide header on scroll down
var didScroll;
var lastScrollTop = 5;
var delta = 5;
var navbarHeight = jQuery('header.main_header').outerHeight();
jQuery(window).scroll(function(event){
    didScroll = true;

});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
jQuery()
function hasScrolled() {
    var st = jQuery(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        jQuery('header.main_header').removeClass('scroll-down').addClass('scroll-up');
    } else {
        if(st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('header.main_header').removeClass('scroll-up').addClass('scroll-down');
            if(jQuery(window).scrollTop() <= 50){
            	 jQuery('header.main_header').removeClass('scroll-down'); 	
              }	
        }
    }
    lastScrollTop = st;
}
$('div#closer').click( function(e) {
    $('.modalContainer').delay(4000).hide();
    $('body').css({'overflow' : 'auto'})
});
$('button#addtoCartCOntaienr').click( function(e) {
    e.preventDefault();
    $('.modalContainer').delay(4000).css({'display' : 'flex'});
    $('body').css({'overflow' : 'hidden'})
});

$('.closemenu').click( function(e) {
	$('div#menuMain').removeClass('active')
	$('body').css({'overflow' : 'auto'})
})
$('.hamburger').click( function(e) {
	$('div#menuMain').addClass('active')
	$('body').css({'overflow' : 'hidden'})
})