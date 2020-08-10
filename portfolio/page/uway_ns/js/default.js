jQuery(function($){


	/*  GNB_PC  */
	$('#gnb>ul>li>a').on('mouseover', function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		$('#headerR #gnb>ul>li>ul').slideDown(300);
		$('#gnbBg').slideDown(300);
		$('#gnb .gnbBts').slideDown(300);
		$('#headerR').css({overflow : 'visible'});

	});
	$('#gnb').on('mouseleave', function(){
		$('#headerR #gnb>ul>li>ul').stop().slideUp(300);
		$('#gnbBg').stop().slideUp(300);
		$('#gnb .gnbBts').stop().slideUp(300);
		$('#gnb>ul>li').removeClass('on');
		$('#headerR').css({overflow : 'hidden'});
	});
	
	$('#headerR #gnb>ul>li>ul>li>a').hover(function(){
		$(this).parent().parent().parent().addClass('on');
	},function(){
		$(this).parent().parent().parent().removeClass('on');
	});

	//var gnbH = $('#headerR #gnb>ul>li>ul').height();
	//$('#gnbBg').css({height : gnbH });

	/* gnb Mobile */
	$('#gnbM>ul>li.mm>a').on('click',function(){
		if( $(this).parent().hasClass('on') ){
			$(this).next().slideUp(250).parent().removeClass('on');

		}else{
			$(this).next().slideDown(250).parent().addClass('on').siblings().removeClass('on').find($('ul')).slideUp(250);	

		}
	});
	
	

	/* match-height */
	$('#tab-a2 li a').matchHeight();
	$('.guideTab li a').matchHeight();
	





	 /*  Top 
	  $(window).on('scroll',function(){
	        if( $(window).scrollTop() >= 500 ){
	            $('#btnTop').fadeIn();
	        }else{
	             $('#btnTop').fadeOut(400);
	        }
	  }); */



}); //jQuery
$(window).on('resize load',function(){

	/* GNB_ MOBILE */
	var winW = $(window).width();
	var gnbMwidth = $('#gnbM>ul').width();

	$('#gnbM #allMenu a').on('click',function(){
		if( $(this).parent().parent().hasClass('on') ){
			$('#headerR #top ').css({ 'display' : 'none'});
			$('#gnbM>ul ').stop().animate({ right: -gnbMwidth },200);
			$(this).parent().parent().removeClass('on');
			$('#gnbBg').css({ 'display' : 'none' })
			$('#headerR').css({overflow : 'hidden'});
		}else{
			$('#headerR #top ').css({ 'display' : 'block'});
			$(this).parent().parent().addClass('on');
			$('#gnbM>ul ').stop().animate({ right:0 },200);
			$('#gnbBg').css({ 'display' : 'block' })
			$('#headerR').css({overflow : 'visible'});

		}
	});

	if( winW < 1090 ){
		$('#headerR #gnb .gnbBts').appendTo($('#gnbM>ul>li.bts'));
		$('#gnbM>ul>li.bts .gnbBts>div').matchHeight();
	}


});