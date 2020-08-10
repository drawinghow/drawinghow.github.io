$.fn.selectDesign = function(){
	var t = $(this);
	var p = t.children("p");
	var pa = p.children("a");
	var ul = t.children("ul");
	p.click(function(){
		ul.toggle();
		ul.children("li").click(function(){
			var txt = $(this).text();
			pa.text(txt);
			ul.hide();
			return false;
		});
		return false;
	});
};


$(function(){
	$("div.select").selectDesign();
});