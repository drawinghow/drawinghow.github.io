jQuery(function($){


	$('.acco table tr.tit td a').on('click',function(e){
		e.preventDefault();
		if($(this).parent().parent().hasClass('on')){
			$(this).parent().parent().removeClass('on').next().removeClass('on');
		}else{
			$(this).parent().parent().addClass('on').next().addClass('on');
		}
	});


	
}); //jQuery