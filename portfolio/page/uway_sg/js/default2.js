$(window).on('load resize',function(){

	/* NAV_mobile */
	if($(window).width() > 1249){
		$('nav ul.mobile').css({ display : 'none' });
		$('header nav .mobileBt').removeClass('on');
	}

	var winHeight = $(window).height();
	var mNavHeight = $('nav ul.mobile').height();
	$('nav ul.mobile>li>a').on('click',function(){
		$('nav ul.mobile').css({ height : winHeight ,'overflow-y' : 'scroll' });	
	})
		

	/* SUB_breadcrumb */
	if( $(window).width() < 1249  ){
		$('#subTop #breadcrumb').removeClass('pc');
	}else {
		$('#subTop #breadcrumb').addClass('pc');
		$('#breadcrumb>ul>li').removeClass('click');
	}



});
jQuery(function($){

	//NAV
	if( $(window).width() > 1249  ){
		/*  NAV_PC  */
		$('nav ul.pc>li>ul').matchHeight();
		var navPcHeight = $('nav ul.pc>li>ul').height();
		var navBgH = $('header .navBg, nav .blank').css({height: navPcHeight });
		$navBg = $('.navBg');
		$subMenu = $('nav ul.pc>li>ul');
		//$subMenuOn = $('nav ul.pc>li.m3, nav ul.pc>li.m7');
		$navArea = $('nav .blank');

		/*  NAV_mobile  */
		$('nav ul.pc>li>a').on('mouseover click',function(){
			$navArea.slideDown(250);
			$navBg.slideDown(250);
			$subMenu.slideDown(250);
			$(this).parent().addClass('on').siblings().removeClass('on');	
		});
		$('nav').on('mouseleave',function(){
			$navArea.stop().slideUp(250);
			$navBg.stop().slideUp(250);
			$subMenu.stop().slideUp(250);
			$('nav ul>li.on').removeClass('on');	
		});
		$('nav ul.pc>li>ul>li>a').on('mouseover',function(){
			$(this).parent().parent().parent().addClass('on').siblings().removeClass('on');	
		});

	} // win.width - 1249 이상


	/* mobile gnb */
	$('header .mobileBt>a').on('click',function(){
		if( $(this).parent().hasClass('on') ){
			$(this).parent().removeClass('on').next().slideUp(150);
			//$('header .navBg').css({display:'none'})
			$('header .navBg').fadeOut();
		}else{
			$(this).parent().addClass('on').next().slideDown(200);
			//$('header .navBg').css({display:'block'})
			$('header .navBg').fadeIn();
		}
	});
	$('header ul.mobile>li>a').on('click', function(){
		if( $(this).parent().hasClass('on') ){
			$(this).next().removeClass('view').slideUp(150).parent().removeClass('on');
		}else{
			$(this).next().addClass('view').slideDown(200).parent().addClass('on').siblings().removeClass('on').find($('ul')).slideUp(150);
		}
	});

	


	/*  상단 - hot공지 , Quick menu  */
	$('header .trBts .hotBt>a, header .trBts .quickBt>a').on('click',function(){
		if( $(this).parent().hasClass('on') ){
			$(this).parent().removeClass('on');
		}else{
			$(this).parent().addClass('on');
		}
	});

	$('.trBts .hotBt .cont .rolling').slick({
		 dots: true,
		 infinite: true,
		 autoplay: true
	});

	/* FOOTER - gosite */
	$('footer .rights .goSite>a').on('click',function(){
		if( $(this).parent().hasClass('on') ){
			$(this).next().css({display:'none'}).parent().removeClass('on');
		}else{
			$(this).next().css({display:'block'}).parent().addClass('on');
		}
	});


	
	/* SUB_breadcrumb */
	$('#breadcrumb>ul>li.hasSub a').on('click', function(){
		if( $(this).parent().hasClass('click') ){
			$(this).next().stop().slideUp(150).parent().removeClass('click');
		}else{
			$(this).next().stop().slideDown(200).parent().addClass('click');
		}
	});



}); //jQuery
