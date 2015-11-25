$(document).ready(function() {

	var menu = $('.menu ul');

	$(".banner, .benefits, .automate, .register").css("min-height", $(window).height());

	if ($(window).height() < 850) {
		$('.banner, .benefits, .register').css('paddingTop', '150px');
		$('.automate').css('paddingTop', '100px');
	}

  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
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

  $('.logo').click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    menu.children().removeClass('active');
    menu.children().first().addClass('active');
    return false;
  });
});