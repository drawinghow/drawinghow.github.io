jQuery(function($){


	 /* NAV - PC  */
	$('#allMenu a').on('click',function(){
		if( $(this).hasClass('on') ){
			$('#nav').fadeOut(200);
			$(this).removeClass('on');
			if( $(window).width()  > 500 ){
				$('#nav ul.gnb>li>div .bar').animate({ width: 0, 'margin-left' : 0 });
			}

		}else{
			$('#nav').fadeIn(200);
			$('#nav ul.gnb>li>div .bar').animate({ width: 74, 'margin-left' : -37 });
			$(this).addClass('on');
			if( $(window).width()  > 500 ){
				$('#nav ul.gnb>li').hover(function(){
					$(this).find($('.bar')).animate({ width: 120, 'margin-left' : -60 },100);
				},function(){
					$(this).find($('.bar')).animate({ width: 74, 'margin-left' : -37 },100);
				});
			}
		}
	});

	/* NAV - mobile */
	if( $(window).width()  < 501 ){ 
		
		$('#nav ul.gnb>li>div>a').on('click', function(){
			$liOn = $(this).parent().parent();
			if( $liOn.hasClass('on') ){
				$(this).next().slideUp(200);
				$liOn.removeClass('on');
			}else{
				$(this).next().slideDown(200).parent().parent().siblings().removeClass('on').find($('ul')).slideUp();
				$liOn.addClass('on');
			}
		});
	}

	$('#nav .bt_close a').on('click',function(){
		$('#nav').fadeOut(200);
		$('#nav ul.gnb>li>div .bar').animate({ width: 0, 'margin-left' : 0 });
		$('#allMenu a').removeClass('on');
	});





	/* mobile_scroll */
	 $('.ov_h').niceScroll({
	 	cursorcolor: "#236793"
	 });



	/* tab Height */
	$('#con ul.tab li a').matchHeight();
	


});