jQuery(document).ready(function($) {
	$('.imageRotator > button').on('click', function() {
		$('.rotator').toggleClass('rotate-3d');
	}); 


 
	/*fancybox lightbox
	 ==============================*/
	$("#gallery li a, .fancybox").fancybox();



	/*loop layers
	 ==============================*/
	function cycle() {

		$("#space .thumb img.delay-3").animate({
			opacity : 0,
			top : "-35px"
		}, 1000, function() {
			$("#space .thumb img.delay-2").animate({
				opacity : 0,
				top : "-35px"
			}, 1000, function() {
				$("#space .thumb img.delay-0, #space .thumb img.delay-1").animate({
					opacity : 0,
					top : "-35px"
				}, 1000, function() {
					$("#space .thumb img.delay-0, #space .thumb img.delay-1").animate({
						opacity : 1,
						top : "0"
					}, 1000, function() {
						$("#space .thumb img.delay-2").animate({
							opacity : 1,
							top : "0"
						}, 1000, function() {
							$("#space .thumb img.delay-3").animate({
								opacity : 1,
								top : "0"
							}, 1000, function() {

							});
						});
					});
				});
			});
		});

	}

	// go!
	var i = setInterval(cycle, 10000);



	/* hover Gallery
	 ==============================*/
	$('#gallery .item').hover(function() {
		$(this).find('.hover').toggleClass('animated bounceIn');
	});


	/* hover download buttons
	 ==============================*/
	$('#download a').hover(function() {
		$(this).toggleClass('animated bounce');
	});



	/* tooltip
	 ==============================*/
	$('.social li a').tooltip();



	/* go to top
	 ==============================*/
	$().UItoTop({
		easingType : 'easeOutQuart'
	});



	//=================================== animations =================================//

	var lefts = $(".from-left"), rights = $(".from-right"), bottoms = $(".bottom"), rotates = $(".rotate"), left_tops = lefts.map(function() {
		return $(this).offset().top;
	}), right_tops = rights.map(function() {
		return $(this).offset().top;
	}), bottom_tops = bottoms.map(function() {
		return $(this).offset().top;
	}), rotate_tops = rotates.map(function() {
		return $(this).offset().top;
	});

	$(window).load(function() {
		left_tops = lefts.map(function() {
			return $(this).offset().top;
		});
		right_tops = rights.map(function() {
			return $(this).offset().top;
		});
		bottom_tops = bottoms.map(function() {
			return $(this).offset().top;
		});
		rotate_tops = rotates.map(function() {
			return $(this).offset().top;
		});
	});



	$(window).scroll(function() {
		/*------------------------------------------------------------
		 All Template Animation
		 -------------------------------------------------------------*/
		var scrollVisible = $(window).scrollTop() + $(window).height();
		$(left_tops).each(function(i) {
			if (scrollVisible > this)
				$(lefts[i]).css({
					left : 0
				});
		});

		$(right_tops).each(function(i) {
			if (scrollVisible > this)
				$(rights[i]).css({
					right : 0
				});
		});

		$(bottom_tops).each(function(i) {
			if (scrollVisible > this - 1000)
				$(bottoms[i]).css({
					bottom : 0
				});
		});

		$(rotate_tops).each(function(i) {
			if (scrollVisible > this + 3000)
				$(rotates[i]).addClass("rotate-normal");
		});
		/*------------------------------------------------------------
		 End All Template Animation
		 -------------------------------------------------------------*/
	});


	//=================================== form forms =================================//
	$("#newsletter, #contact").submit(function() {
		var elem = $(this);
		var urlTarget = $(this).attr("action");
		$.ajax({
			type : "POST",
			url : urlTarget,
			dataType : "html",
			data : $(this).serialize(),
			beforeSend : function() {
				elem.prepend("<div class='loading alert'>" + "<a class='close' data-dismiss='alert'>×</a>" + "Loading" + "</div>");
				//elem.find(".loading").show();
			},
			success : function(response) {
				elem.prepend(response);
				//elem.find(".response").html(response);
				elem.find(".loading").hide();
				elem.find("input[type='text'],input[type='email'],textarea").val("");
			}
		});
		return false;
	});



	//=================================== animated anchors =================================//
	$('.navbar-nav li a.anchor ').click(function() {

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var $target = $(this.hash);

			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

			if ($target.length) {

				var targetOffset = $target.offset().top;

				$('html,body').animate({
					scrollTop : targetOffset
				}, 1000);

				return false;

			}

		}

	});



	//=================================== animated anchors =================================//
	$('.sky-carousel').carousel({
		itemWidth : 232,
		itemHeight : 240,
		distance : 30,
		selectedItemDistance : 50,
		selectedItemZoomFactor : 1,
		unselectedItemZoomFactor : 0.35,
		unselectedItemAlpha : 1,
		motionStartDistance : 170,
		topMargin : 0,
		gradientStartPoint : 0.35,
		gradientOverlayColor : "#f5f5f5",
		gradientOverlaySize : 0,
		reflectionDistance : 1,
		reflectionAlpha : 0.35,
		reflectionVisible : false,
		reflectionSize : 0,
		selectByClick : true
	});
	
	
	// Slider Rotator Script



	

});
