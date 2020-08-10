jQuery(function($){


	/* TOP POPUP */
	$('#topPop .tp_sl').bxSlider({
	 	auto: true,
	 	mode: 'vertical',
	 	pager: false,
	 	controls: true  //이전다음 버튼
	 });
	$('#topPop .tp_close a').on('click',function(){
		$('#topPop').slideUp();
	});



	/*  GNB  */
	$('#header ul#gnb>li>a').on('mouseover focus',function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		//$(this).next().slideDown(200).parent().siblings().find($('ul')).slideUp(200);
		$(this).next().slideDown(200).parent().siblings().find($('ul')).hide();
	});
	$('#header').on('mouseleave', function(){
		$('#header ul#gnb ul').hide();
		$('#header ul#gnb>li').removeClass('on')
	});






}); //jQuery