$(document).ready(function() {

	var menu = $('.menu ul');

	$(".banner, .benefits, .automate, .signIn").css("min-height", $(window).height());

	if ($(window).height() < 850) {
		$('.banner, .benefits, .signIn').css('paddingTop', '150px');
		$('.automate').css('paddingTop', '100px');
	}

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
        	//$('.header .navbar').css('background-color', 'rgba(200, 200, 200, 0.8 )');
        	//$('.menu').css('padding', '0');
        	//$(".logo").css("width", "80px");
        } else {
        	$('.header .navbar').css('background-color', 'rgba(255, 255, 255, .8)');
        	//$('.menu').css('padding', '2em 0');
        	$(".logo").css("width", "150px");
        }
    });

    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        menu.children().removeClass('active');
        $(this).parent().addClass('active');
        return false;
      }
    }
  });
});