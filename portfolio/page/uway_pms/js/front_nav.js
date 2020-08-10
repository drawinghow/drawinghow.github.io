/*
function nav(){
	$("#nav .u1 > li").click(function(){

		$(this).toggleClass("on");
		return false;
	});

}*/

function nav(){
	$("#nav .u1>li>a").click(function(){
		if( $(this).parent().hasClass('on') ){
			$(this).parent().removeClass('on').siblings().removeClass('on');
		}else{
			$(this).parent().addClass('on').siblings().removeClass('on');
		}
		return false;
	});

}




$(function(){
	nav();
})