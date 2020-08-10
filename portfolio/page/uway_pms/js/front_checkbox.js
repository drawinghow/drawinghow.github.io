$.fn.checkboxBg = function(){	
	return this.each(function(){
		var t = $(this);
		t.wrap("<div class='chkDiv'></div>");
		var div = t.parent();
		t.change(function(){
			if(t.prop("checked")){
				div.removeClass("off").addClass("on");
			}else{
				div.removeClass("on").addClass("off");
			}
		}).change();
	});
};




//체크박스 스타일2( 클릭시 red)
$.fn.checkboxBg2 = function(){	
	return this.each(function(){
		var t = $(this);
		t.wrap("<div class='chkDiv red'></div>");
		var div = t.parent();
		t.change(function(){
			if(t.prop("checked")){
				div.removeClass("off").addClass("on");
			}else{
				div.removeClass("on").addClass("off");
			}
		}).change();
	});
};





//전체선택 체크박스를 선택하면 그에 해당하는 모든 체크박스를 선택
function allCheck(){
	$('.tb2 table input.allCheck').on('click', function(){
		
		var chk = $(this).is(":checked");//.attr('checked');

		if (chk){

			$(this).parent().parent().next().next().find('.chkDiv ').addClass('on').find('input').prop('checked', true);
			//$(".tb2 ul.person input").prop('checked', true);
		}else {
			$(this).parent().parent().next().next().find('.chkDiv ').removeClass('on').find('input').prop('checked', false);
			//$(".tb2 ul.person input").prop('checked', false);
		}
		
		//$(this).parent().parent().parent().find($('.checkbox')).attr("checked",true);
	});
}







$(function(){
	
	$("input.checkbox").checkboxBg();
	$("input.checkboxRed").checkboxBg2();

	allCheck();
	

});