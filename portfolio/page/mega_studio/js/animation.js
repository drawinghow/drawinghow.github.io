
$(document).ready(function(){
	var $elementsA = $( '*[data-animation]' );
	var $elementsS = $( '*[data-scroll]' );
	var h = $(window).height();

	//animation
	$elementsA.each( function( i, el ) {
		var $el = $( el ),
			$delay = $el.data('delay');

		if($delay>0){
			$el.css({
				'-webkit-animation-delay':$delay+'s',
				'animation-delay':$delay+'s'
			});
		}

		var t = $el.offset().top;

		if(t > h+250){
			$el.addClass('wait-animation');
			//$el.addClass('animated');
		}else{
			$el.addClass('animated');
		}

		$(window).scroll(function () {
			var ltop = $(this).scrollTop();
			var lt = $el.offset().top;

			if(ltop > (lt - 700)){
				$el.removeClass('wait-animation').addClass('animated');
			}

		});

	});

	/*//scroll
	$elementsS.each( function( i, el ) {
		var $el = $( el ),
			$speed = $el.data('speed');

		$(window).scroll(function () {
			var ltop = $(this).scrollTop();

			if($el.data('scroll') === 'up'){
				if( $el.hasClass( "bg-item-01") || $el.hasClass("bg-item-02") ){
					$el.css({
						'transform':'translate(0,'+ (ltop/h)*$speed +'px) translate3d(0,0,0)'
					});
				}else{
					$el.css({
						'top':(ltop/h)*$speed + 'px'
					});
				}
			}else if($el.data('scroll') === 'down'){
				if( $el.hasClass( "bg-item-01") || $el.hasClass("bg-item-02") ){
					$el.css({
						'transform':'translate(0,'+ -(ltop/h)*$speed +'px) translate3d(0,0,0)'
					});
				}else{
					$el.css({
						'top':-(ltop/h)*$speed + 'px'
					});
				}
			}
		});

	});*/

});