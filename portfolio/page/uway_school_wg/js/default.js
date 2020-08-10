jQuery(function($){


	/*  GNB_PC  */

	$subMenu = $('#gnb ul.menu>li>ul');
	$gnbBg = $('#gnb .gnbBg');

	$('#gnb ul.menu>li>a').on('mouseover focus',function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		$subMenu.slideDown(200)
		//$gnbBg.slideDown(200);
	});
	$('#gnb ul.menu').on('mouseleave',function(){
		$subMenu.slideUp(200);
		//$gnbBg.slideUp(200);
	});
	$('#gnb ul.menu>li>ul>li>a').on('mouseover focus',function(){
		$(this).parent().parent().parent().addClass('on').siblings().removeClass('on');
	});
	$('#gnb ul.menu>li>ul').on('mouseleave',function(){
		$(this).parent().removeClass('on');
	});
	$('#gnb ul.menu>li>ul>li:last-child>a:last-child').on('blur',function(){
		$(this).parent().parent().parent().removeClass('on');
		$subMenu.hide();
		//$gnbBg.hide();
	});

	$('#gnb ul.menu>li>ul').matchHeight(); 
	var gnbH = $('#gnb ul.menu>li>ul ').height();   
	//$gnbBg.css('height',gnbH);



	/* GNB_ MOBILE */
	$gnbM = $('#gnb #btnMenu>ul')
	$('#gnb #btnMenu>a').on('click',function(){
		if( $(this).hasClass('on') ){
			$gnbM.slideUp(300);
			$(this).removeClass('on');
		}else{
			$gnbM.slideDown(300);
			$(this).addClass('on');
		}
	});
	$('#btnMenu>ul>li>a').on('click',function(){
		if( $(this).parent().hasClass('on') ){
			$(this).next().slideUp(200).parent().removeClass('on');
		}else{
			$('#gnbM>ul>li.on ul').slideUp(200).parent().removeClass('on');
			$(this).next().slideDown(200).parent().addClass('on');
		}
	});




	/* height 맞추기 */
	$('#footer ul.f_menu>li').matchHeight();
	$('#con ul.tab li a').matchHeight();
	$('#con ul.school li>div').matchHeight();


	/* tab */
	$('#con ul.tab').wrap('<div class="tabWrap"></div>');
	$('.tabWrap').append('<div class="line"></div>');

	



	






}); //jQuery

/* MOBILE */

$(window).on('load resize',function(){
	var wid = $(window).width();

	if( wid <= 980){
		$('#top .search a.btnSearchM').on('click' , function(){
			if( $(this).prev().hasClass('on') ){
				$(this).removeClass('on').prev().removeClass('on');
			}else{
				$(this).addClass('on').prev().addClass('on');
			}
		});
	}

	
})