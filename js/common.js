/*
String.prototype.replaceAll = function(org, dest) {
	return this.split(org).join(dest);
};
*/

$(document).ready(function() {

    /******************************************/
    //LNB 1depth
    $('.cd_nav>li>a').click(function () {
        $(this).parent().addClass('open');
    });
    //LNB 2depth
    $('.cd_nav>li>ul>li>a').click(function (e) {
        e.preventDefault();
        $('.cd_nav>li>ul>li').removeClass('on');
        $(this).parent().addClass('on');

        var href = $(this).attr('href');
        $('#cd_container').attr('src', href );
    });

    //contents nav
    $('#con_nav li a').click(function () {
       $(this).parent().addClass('on').siblings().removeClass('on');
    });


    /******************************************/
    //코드 viewer
    $('pre.box1').each(function(i, block) {
        hljs.highlightBlock(block);
        hljs.lineNumbersBlock(block);
    });

    $('.viewarea').each(function(){
        var source = $(this).html();
        //source = source.replaceAll('<','&lt;');
        source = source.replace(/</gi,'&lt;');
        $(this).next('.source').find('pre').html(source);
        $('pre.box2').each(function(i, block) {
            hljs.highlightBlock(block);
            hljs.lineNumbersBlock(block);
        });
    });


    /******************************************/
    //토글 버튼
    $('.btnToggle').click(function (e) {
        e.preventDefault();
        if($(this).hasClass('off') || !$(this).hasClass('open')){
            $(this).removeClass('off').addClass('open').next().slideDown(200);
        }else{
            $(this).addClass('off').removeClass('open').next().slideUp(200);
        }
    });

    $('.btnToggle_left').click(function (e) {
        e.preventDefault();
        var width = $(this).parent().width();
        if($(this).hasClass('off') || !$(this).hasClass('open')){
            $(this).removeClass('off').addClass('open').parent().animate({left: -width});
        }else{
            $(this).addClass('off').removeClass('open').parent().animate({left: 0});
        }
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

