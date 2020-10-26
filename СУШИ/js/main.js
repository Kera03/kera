$(function() {
$(".manu__btn").on('click',function () {
	$('.menu-open').addClass('active'); 
});

$('.close-btn').on('click',function () {
$('.menu-open').removeClass('active');

  function slowScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 700) ;
    }	
});
});     
  function slowScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 700) ;
    }
