$(document).ready(function() {
	"use strict";
	try {

	/* ==========================================================================
	#PieChart For Skills Page
	========================================================================== */

	$('.chart').easyPieChart({
	easing: 'easeOutBounce',
	onStep: function(from, to, percent) {
	$(this.el).find('.percent').text(Math.round(percent));
	}
	});


	/* ==========================================================================
	#Carousel Popup For Portfolio Page
	========================================================================== */
	$(".owl-carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 800,
		singleItem : true,
		autoPlay: 4000
	});

	/* ==========================================================================
	#Text Rotator
	========================================================================== */
	$('#rotate').rotaterator({fadeSpeed:800, pauseSpeed:800});

	/* ==========================================================================
	#Orientation change event
	========================================================================== */
	$(window).on('orientationchange', function(event) {
		window.location.href = window.location.href;
	});




	}catch (ex) {}
});

/* ==========================================================================
   #Progress Bar For Skills Page
   ========================================================================== */

		progressBar(10, $('#progressBar10'));
		progressBar(10, $('#progressBar11'));
		progressBar(10, $('#progressBar12'));
		progressBar(10, $('#progressBar13'));
		progressBar(10, $('#progressBar14'));
		progressBar(10, $('#progressBar15'));
		progressBar(20, $('#progressBar20'));
		progressBar(20, $('#progressBar21'));
		progressBar(20, $('#progressBar22'));
		progressBar(20, $('#progressBar23'));
		progressBar(20, $('#progressBar24'));
		progressBar(20, $('#progressBar25'));
		progressBar(30, $('#progressBar30'));
		progressBar(30, $('#progressBar31'));
		progressBar(30, $('#progressBar32'));
		progressBar(30, $('#progressBar33'));
		progressBar(30, $('#progressBar34'));
		progressBar(30, $('#progressBar35'));
		progressBar(40, $('#progressBar40'));
		progressBar(40, $('#progressBar41'));
		progressBar(40, $('#progressBar42'));
		progressBar(40, $('#progressBar43'));
		progressBar(40, $('#progressBar44'));
		progressBar(40, $('#progressBar45'));
		progressBar(50, $('#progressBar50'));
		progressBar(50, $('#progressBar51'));
		progressBar(50, $('#progressBar52'));
		progressBar(50, $('#progressBar53'));
		progressBar(50, $('#progressBar54'));
		progressBar(50, $('#progressBar55'));
		progressBar(60, $('#progressBar60'));
		progressBar(60, $('#progressBar61'));
		progressBar(60, $('#progressBar62'));
		progressBar(60, $('#progressBar63'));
		progressBar(60, $('#progressBar64'));
		progressBar(60, $('#progressBar65'));
		progressBar(70, $('#progressBar70'));
		progressBar(70, $('#progressBar71'));
		progressBar(70, $('#progressBar72'));
		progressBar(70, $('#progressBar73'));
		progressBar(70, $('#progressBar74'));
		progressBar(70, $('#progressBar75'));
		progressBar(80, $('#progressBar80'));
		progressBar(80, $('#progressBar81'));
		progressBar(80, $('#progressBar82'));
		progressBar(80, $('#progressBar83'));
		progressBar(80, $('#progressBar84'));
		progressBar(80, $('#progressBar85'));
		progressBar(90, $('#progressBar90'));
		progressBar(90, $('#progressBar91'));
		progressBar(90, $('#progressBar92'));
		progressBar(90, $('#progressBar93'));
		progressBar(90, $('#progressBar94'));
		progressBar(90, $('#progressBar95'));


/* ==========================================================================
   #Mobile Menu
   ========================================================================== */

		var $menu = $('#menu1'),
		$menulink = $('.menu-link');
		$menulink.click(function() {
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			return false;
		});

		$('nav#menu1 a').click(function() {
			$('#menu1').removeClass('active');
		});



/* ==========================================================================
   #iPad,iPhone,iPod Keyboard issue with position fixed
   ========================================================================== */
	var iPad = navigator.userAgent.toLowerCase().indexOf("ipad");
	var iPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
	var iPod = navigator.userAgent.toLowerCase().indexOf("ipod");
	if(iPad > -1 || iPhone > -1 || iPod > -1)
	{
		window.onscroll = function() {
			$('.totop-link').css('position','absolute');
			$('.totop-link').css('top',(window.pageYOffset + window.innerHeight - 39) + 'px');
		};
	}

