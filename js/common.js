/*
String.prototype.replaceAll = function(org, dest) {
	return this.split(org).join(dest);
};
*/

$(document).ready(function() {

	$('pre.box1').each(function(i, block) {
		hljs.highlightBlock(block);
		hljs.lineNumbersBlock(block);
	});

	$('.viewarea').each(function(){
		var source = $(this).html();
		source = source.replaceAll("<","&lt;");
		$(this).next('.source').find('pre').html(source);
		$('pre.box2').each(function(i, block) {
			hljs.highlightBlock(block);
			hljs.lineNumbersBlock(block);
		});
	});

	/*
	$('.index-box ul li a').on('click', function(e) {
		$(this).parent().siblings("li").removeClass('active');
		$(this).parent().addClass('active');
	});

	$(window).on('scroll', function() {
		$('.index-tit-s').each(function() {
			if($(window).scrollTop() >= $(this).offset().top - 250) {
				var id = $(this).attr('id');
				$('.index-box ul li').removeClass('active');
				$('.index-box ul li a[href=#'+ id +']').parent().addClass('active');
			}
		});
	});

	$(".index-more").on('click', function(e) {
		var id = $(this).attr('href');
		e.preventDefault();
		if($(this).hasClass("on") == false){
			$(id).show();
			$(this).addClass("on");
		}else{
			$(id).hide();
			$(this).removeClass("on");
		}
	});

	$(".index-toggle").on('click', function(e) {
		if($(this).hasClass("on") == false){
			$(".index-box").animate({"left":"-340px"})
			$(this).addClass("on");
		}else{
			$(".index-box").animate({"left":"0"})
			$(this).removeClass("on");
		}

	});
	*/


});

