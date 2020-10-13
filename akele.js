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
})
$('.hamburger').click( function(e) {
	$('div#menuMain').addClass('active')
	$('body').css({'overflow' : 'hidden'})
})