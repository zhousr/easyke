function center(self) {
	var pH = $(self).parent().height();
	var pW = $(self).parent().width();
	var w = self.naturalWidth;
	var h = self.naturalHeight;
	var thanH = h / pH;
	var thanW = w / pW;
	if (thanH > thanW) {
		$(self).addClass('Vcenter');
	} else{
		$(self).addClass('Hcenter');
	}
}
function centerFull(self) {
	var pH = $(self).parent().height();
	var pW = $(self).parent().width();
	var w = self.naturalWidth;
	var h = self.naturalHeight;
	var thanH = h / pH;
	var thanW = w / pW;
	if (thanH > thanW) {
		$(self).addClass('Vcenter-full');
	} else{
		$(self).addClass('Hcenter-full');
	}
}
$(function () {
	// 图片居中对其
	$('[v-flex]').each(function (index, item) {
		$(this).addClass('flex-box');
    if ($(item).children('expansion').length) {
    	return;
    }
    var attr = $(this).attr('v-flex').split('/');
    var padding = attr[0] / attr[1] * 100 + '%';
    $(this).append($('<div class="expansion" style="padding-bottom: ' + padding + '"></div>'));
	});
	$('[v-flex]').attr('v-flex'); 
	$('[v-center]').parent().css({position: 'relative'});
	$('[v-center]').each(function(index, item) {
		if (this.naturalWidth) {
			center(this)
		} else {
			$(this).load(function() {
				center(this)
			})
		}
	})
	$('[v-center-full]').parent().css({position: 'relative'});
	$('[v-center-full]').each(function(index, item) {
		if (this.naturalHeight) {
			centerFull(this)
		} else {
			$(this).load(function() {
				centerFull(this)
			})
		}
	})
	function banner() {
		var len = $('.banner .swiper-slide').length
		if (len < 2) return false
		var myBanner = new Swiper('.banner', {
			autoplay: 5000,//可选选项，自动滑动
			pagination: '.banner .swiper-pagination',
			paginationClickable : true
		});
	}
	function inCertifi() {
		var cerView,between;
		if ($(window).outerWidth() <= 768){
			cerView = 2;
			between = 10;
		} else {
		 	cerView = 4;
			between = 15;
		}
		var inCertifi = new Swiper('.inCertifi-swiper', {
			autoplay: 5000,//可选选项，自动滑动
			slidesPerView: cerView,
			slidesPerGroup: cerView,
			spaceBetween: between,
			// paginationClickable : true,
			prevButton:'.inCertifi-prev',
			nextButton:'.inCertifi-next'
		});
	}
	banner()
	inCertifi()
	// 点击回到顶部
	// $('.goTop').click(function(){
	// 	$('html,body').animate({scrollTop:0}, 500);
	// })
	// $(document).scroll(function(){
	// 	var sH = $(document).scrollTop()
	// 	if (sH > 500) {
	// 		$('.goTop').addClass('show');
	// 	} else {
	// 		$('.goTop').removeClass('show');
	// 	}
	// 	console.log();
	// })
	// 手机菜单点击
	$(".header-fa").on('click', function(){
		trans()
	});
	$(".isTrans").on('click', function(){
		if ($(".phone-header").hasClass("trans")){
			trans()
		}
	});
	function trans() {
	  $(".phone-header").toggleClass("trans");
	  $(".phone-nav").toggleClass("trans");
	  $(".isTrans").toggleClass("cur");
	  $(".footer").toggleClass("cur");
	  $(".header-fa .fa").toggleClass("fa-close fa-bars");
	}
	$(".phone-nav-li").click(function(){
		var isTrue = $(this).hasClass("cur");
		$('.phone-nav-li').removeClass('cur');
		if (!isTrue) {
	  	$(this).toggleClass("cur");
		}
	});
	// 点击打开图片放大
	$('.searchs-img').click(function(event){
		if ($(window).outerWidth() <= 768) return;
		var src = $(this).parent('div').find('img[v-center]').attr('src');
	  $(".position-about").addClass('cur');
		$(".position-about img").attr('src',src);
		var imgH = $(".position-about img").height();
		var imgW = $(".position-about img").width();
		var xinW, mTop;
		if(imgW/2 > imgH) {
			xinW = 1000;
		} else if (imgW/2 < imgH && imgW > imgH){
			xinW = 800;
		} else {
			xinW = 480;
		}

		mTop = xinW * imgH / imgW / 2;
		
		$('.position-about img').css({
			"width": xinW,
			"margin-left": - xinW / 2,
			"margin-top": -mTop
		});
	});
	// 点击关闭放大图
	$(".position-about").click(function(event) {
	  $(this).removeClass('cur');
	});
	$('.fqa-li').click(function(event){
		$('.fqa-li .fqa-desc').removeClass('cur');
		$(this).find('div.fqa-desc').addClass('cur');
	})


		// 产品详情
	function proItemSwiper() {
		if ($(window).outerWidth() <= 768) proIndex = 3
		else proIndex = 4
		var proItemSwiper = new Swiper('.proItem-swiper', {
			// autoplay: 5000,//可选选项，自动滑动
			slidesPerView : proIndex,
			prevButton:'.proItem-swiper-main .swiper-button-prev',
			nextButton:'.proItem-swiper-main .swiper-button-next',
		});
	}
	$('.proItem-swiper .swiper-proItem-img').on("mouseenter click",function(){
		$('.proItem-swiper .swiper-proItem-img').removeClass('cur');
		$(this).addClass('cur');
		var src = $(this).children('img').attr('src');
		$('.proItem-left-img img').attr('src',src);
	});
	proItemSwiper()
});

