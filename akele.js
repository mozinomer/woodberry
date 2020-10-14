$(window).scroll(function(event){
    ($(window).scrollTop()) > 40 ? $('header#headermain').addClass('activatedScroll') : $('header#headermain').removeClass('activatedScroll')
})
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
});
$('.hamburger').click( function(e) {
    if ($(window).width() > 767) {
        $('body').css({'overflow' : 'hidden'});
    	$('div#menuMain').addClass('active')
    } else {
        $('body').toggleClass('flowed')
        $('div#menuMain').toggleClass('active');
        $(this).toggleClass('active');
        $('.socialMediaContainerFooterMovile').removeClass('active');     
        $('.socialmediaIntegrationMobile').removeClass('active');     
    }
});
$('.closertopheader').click( function(e) {
    $('.topheadeer').fadeOut()
})
$('.selectorMobileCat').click( function(e) {
    $(this).parent().find('ul').slideToggle();
    $(this).toggleClass('active');
})
$('.socialmediaIntegrationMobile').click( function(e) {
    $('.socialMediaContainerFooterMovile').toggleClass('active');
    $('div#menuMain').removeClass('active')        
    $('.hamburger').removeClass('active')        
    $(this).toggleClass('active');
    $('body').toggleClass('flowed')
})
$('div#closerpipi').click( function(e) {
    e.preventDefault();
    $('.newsleeterPopup').fadeOut();
});

$(function () {
  $('.zoom-image').each(function () {
    var originalImagePath = $(this).find('img').data('original-image');
    $(this).zoom({
      url: originalImagePath,
      magnify: 0.6 });

  });
});
$('.slidercontainer').slick({
    slideToShow: 1,
    dots: true,
    arrows: false,
});
$('.searchicon').click( function(e) {
    $(this).parent().find('form').toggleClass('active')
    $(this).toggleClass('active')
})





