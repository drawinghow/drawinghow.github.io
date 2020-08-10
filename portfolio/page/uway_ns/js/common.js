$(function(){
	
	
	$("#gnb>ul>li").hover(function(){
		$(this).addClass("active")
	}, function(){
		$(this).removeClass("active")
	});
	
	$("#gnb").mouseover(function(){ $(this).stop().animate({ 'height':'180px'},300); });
	$("#gnb").mouseout(function(){ $(this).stop().animate({ 'height':'0px'},300); });


	// �⺻ �� �ڵ� ��� 
	$('ul.tab-toggler a').bind('click', function(event){
		event.preventDefault();
		var obj = $(this).attr('href').replace('#','');
		$(this).parent().siblings().children().removeClass('current');
		$(this).addClass('current');
		$(this).parent().parent().next().children().each(function(){
			if($(this).attr('id').match(obj)){
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});


});
	
	
$(function(){

	$('#lnb>li').bind('mouseenter',function(){

		var idx = $(this).index();		

		$(this).children('ul.lnbsub').slideDown();
		$(this).addClass('on');

		$(this).siblings().children('ul.lnbsub').hide();
		$(this).siblings().removeClass('on');
	
		$(this).bind('mouseleave', function(){

		});
	});


});

$(function(){
  $(".table-a tr:odd").css("background-color","#eee");   
  
});



$(function(){
	//�ѿ���
	$('img.rollover').each(function() {
	    $(this).mouseover(function() {
	        if ($(this).attr('src').match('_off')) {
	            $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	            $(this).mouseout(function() {
	                $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
	            });
	        }
	    });
	});
	

	
	
});

