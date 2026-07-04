$(function() {
	// 入场动画
	$(function() {
		var w = $(window).width();
		if (w > 1200) {
			if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
				new WOW({
					callback: function(box) {
						$(box).addClass("wow1");
					}
				}).init();

			}

			$(window).resize(function() {

				new WOW({
					callback: function(box) {
						$(box).addClass("wow1");
					}
				}).init();

			});
		}


	})

	$("footer .f_top .f_right .bottom .icons .icon").hover(function() {
		var index = $(this).index()
		$(this).addClass("on").siblings().removeClass("on")
		$("footer .f_top .f_right .bottom .code_box img").eq(index).addClass("on").siblings()
			.removeClass("on")
	}, function() {

	})

	$(".header .nav1").hover(function() {
		$(".header .nav1>li ul").stop().slideDown()
		$(".header").addClass("hover")
	}, function() {
		$(".header .nav1>li ul").stop().slideUp()
		$(".header").removeClass("hover")
	})

	// $("html,body").animate({
	//         scrollTop: 0,
	//         screenLeft: 0,
	//     }, 400); 
	/*锚点跳转*/
	$(function() {
		//锚点跳转滑动效果  
		$('a.ph').click(function() {
			$('a.ph').removeClass("on")
			$(this).addClass("on")
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname) {
				var $target = $(this.hash);
				// console.log($target.offset().top)
				$target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
							scrollTop: targetOffset + 0 + "px"

						},
						500);
					return false;
				}
			}
		});

	});

	var a, b, c;
	a = $(window).height();
	$(window).scroll(function() {
		var b = $(this).scrollTop();
		$(".dh").each(function() {
			c = $(this).offset().top;
			if (a + b > c) {
				$(this).addClass("show")
			} else {
				$(this).removeClass("show");
			}
		});
	});

	var p = 0;
	t = 0;
	var htt;
	$(window).scroll(function(e) {
		p = $(this).scrollTop();
		var w = $(window).width()
		if (t <= p && p > 10) {
			//   console.log('下滚')
			$(".header").addClass("on")
			$(".m_header").addClass("on")
		} else if (t > p && p == 0) {
			//   console.log('上滚')
			$(".header").removeClass("on")
			$(".m_header").removeClass("on")
		}

		t = p;
	})

	$(window).scroll(function(e) {
		p = $(this).scrollTop();
		var h = $("body").height()
		var h1 = $(window).height()
		// console.log(h-p)
		var hp = h - p
		if (p > 200) {
			$(".right_box").addClass("on")
		} else {
			$(".right_box").removeClass("on")
		}
		if (hp == h1) {
			$(".right_box").removeClass("on")
		}
		if (p > 500) {
		 $(".i_part6").removeClass("hide")
		} else {
			$(".i_part6").addClass("hide")
		}
	})


	// pc头部
	$(".header .h-right ul li").hover(function() {
		$(this).find(".xl").stop().slideDown()
	}, function() {
		$(this).find(".xl").stop().slideUp()
	})
	
	$(".header .h-right ul li").hover(function() {
		$(this).find(".xla").stop().slideDown()
	}, function() {
		$(this).find(".xla").stop().slideUp()
	})

	$(".header .h-right .lang").hover(function() {
		// console.log("456465")
		$(this).find(".xl").stop().slideDown()
	}, function() {
		$(this).find(".xl").stop().slideUp()
	})


	$(".footer .top .right .link").hover(function() {
		// console.log("456465")
		$(this).find("ul").stop().slideDown()
	}, function() {
		$(this).find("ul").stop().slideUp()
	})

	/*手机头部*/
	$(".header2 .h-right .lang").hover(function(){
		$(this).find(".xl").stop().slideDown()
	},function(){
		$(this).find(".xl").stop().slideUp()
	});
	
	    
	$(window).scroll(function(){
	    if($(".header2").hasClass('active')){
	        $(".header2").stop(true, false).addClass('act');
	    }else{
        	if ($(window).scrollTop() >= 100) {
        		$(".header2").stop(true, false).addClass('act');
        	} else {
        		$(".header2").stop(true, false).removeClass('act');
        	}
	    }
	})

	// 回到顶部

	$(".back").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	
	$(".footer .f_top .left .ot .links").hover(function(){
		$(this).find(".xl").stop().slideDown()
	},function(){
		$(this).find(".xl").stop().slideUp()
	});
	
	
	$(".footerm .f_m_nav .item").click(function(){
		$(this).find(".xl").slideDown().parent().siblings().find(".xl").slideUp();
	});
	$(".footerm .f_m_nav .item .sec-item").click(function(){
		$(this).find(".third-list").slideDown().parent().siblings().find(".third-list").slideUp();
	});
})

$(function() {
	$(".header2 .nav-btn").on('click', function() {
		var _this = $(this);
		
    	
		if (!$(this).hasClass('hover')) {
			$(this).addClass('hover');
			$(this).children('.line1').stop(true, true).transition({
				rotate: 45
			}, 300);
			$(this).children('.line2').stop(true, true).fadeOut(300);
			$(this).children('.line3').stop(true, true).transition({
				rotate: -45
			}, 300, function() {
				_this.addClass('active');
			});
			$(this).parent(".main-wrap").siblings('.sub-menu').stop().fadeIn();
			$("header .list-cont").addClass('active');
			$("body,html").stop(true, true).addClass('ovh-f');
			$(".search-bg1").stop(true, true).fadeIn();
			$(".header2").addClass('active');
			$(".sub-menu li").addClass("animate");
    		if($(".header2").hasClass('active')){
        	        $(".header2").stop(true, false).addClass('act');
        	}
		} else {
			$(this).removeClass('hover');
			$(this).removeClass('active');
			$(this).children('.line1').stop(true, true).transition({
				rotate: 0
			}, 300);
			$(this).children('.line2').stop(true, true).fadeIn(300);
			$(this).children('.line3').stop(true, true).transition({
				rotate: 0
			}, 300);
			$(this).parent(".main-wrap").siblings('.sub-menu').stop().fadeOut();
			$("header .list-cont").removeClass('active');
			$("body,html").stop(true, true).removeClass('ovh-f');
			$(".search-bg1").stop(true, true).fadeOut();
			$(".header2").removeClass('active');
			$(".sub-menu li").removeClass("animate");
    		if($(".header2").hasClass('active')){
	        $(".header2").stop(true, false).addClass('act');
    	    }else{
            	if ($(window).scrollTop() >= 100) {
            		$(".header2").stop(true, false).addClass('act');
            	} else {
            		$(".header2").stop(true, false).removeClass('act');
            	}
    	    }
		}
	});

	$(".header2 .sub-menu .sec-list a").on('click', function() {
		$(".header2 .nav-btn").removeClass('hover');
		$(".header2 .nav-btn").removeClass('active');
		$(".header2 .nav-btn").children('.line1').stop(true, true).transition({
			rotate: 0
		}, 300);
		$(".header2 .nav-btn").children('.line2').stop(true, true).fadeIn(300);
		$(".header2 .nav-btn").children('.line3').stop(true, true).transition({
			rotate: 0
		}, 300);
		$(".header2 .nav-btn").parent(".main-wrap").siblings('.sub-menu').stop().fadeOut();
		$("header .list-cont").removeClass('active');
		$("body,html").stop(true, true).removeClass('ovh-f');
		$(".search-bg1").stop(true, true).fadeOut();
		$(".header2").removeClass('active');
		$(".sub-menu li").removeClass("animate");
	});
});

$(".header2 .sub-menu .sub-tit").on('click', function() {
	if ($(this).siblings('.sec-list').is(':hidden')) {
		$(this).addClass('on');
		$(this).siblings('.sec-list').stop().slideDown();
		$(this).parent().siblings('li').children('.sec-list').stop().slideUp().siblings('.tit').removeClass(
			'on');
	} else {
		$(this).removeClass('on');
		$(this).siblings('.sec-list').stop().slideUp();
	}
});
$(".header2 .sub-menu .sec-list .sec-item").on('click', function() {
    $(this).addClass('on');
    $(this).find('.third-list').stop().slideDown().parent().siblings().find('.third-list').slideUp();
    $(this).siblings().removeClass('on');
});

$(".fc_btn").click(function(){
    $(".fc_con").addClass("show")
})

$(".fc_con .bottom .out").click(function(){
    $(".fc_con").removeClass("show")
})
$(".fc_con .bottom .input .inp").focusout(function(){
    console.log()
    if($(".fc_con .bottom .input .inp1").val()==""||$(".fc_con .bottom .input .inp2").val()==""||$(".fc_con .bottom .input .inp3").val()==""||$(".fc_con .bottom .input .inp4").val()==""){
        $(".fc_con .bottom .btn").addClass("hide")
    }else{
        $(".fc_con .bottom .btn").removeClass("hide")
    }
})

