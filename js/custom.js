$(document).ready(function() {
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');
		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
			document.querySelector(".burger").style.display = "none";
			document.querySelector(".cross").style.display = "inline";
			$('.sc').addClass('dp');
		} else {
			$('body').removeClass('stop-scroll');
			document.querySelector(".cross").style.display = "none";
			document.querySelector(".burger").style.display = "inline";
			$('.sc').removeClass('dp');
		}
	});
});

function myFunction(x) {
	x.classList.toggle("change");
}
var counta = 0;

$(window).scroll(function(e){
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});
var iconButton = $(".burger-container");
var navItem = $(".nav-item");
iconButton.on("click", function() {
    $(navItem).removeClass('aos-animate aos-init');
    setTimeout(function() {
        $(navItem).addClass('aos-animate aos-init');
    }, 400);
});