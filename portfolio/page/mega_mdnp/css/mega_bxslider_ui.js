var __globalBxslider = {
	bxList: [],
	_globalOption: {
		sliderLi: null,
		//wd: null,
		isSingleImage: null,
		mode: null,
		maxSlides: null,
		minSlides: null,
		slideMargin: null,
		delay: null,
		speed: null,
		autoBtn: null,
		auto: null,
		pager: null,
		pagerCustom: null,
		controls: null,
		moves: null,
		touch: null,
		loop: null,
		ticker: null,
		useCSS: null,
		tickerHover: null,
		pagerType : null,
		info : null,
		cutLimit : null,
		select : null,
		randomStart:null
	},
	setup: function (idx, attr) {
		if (attr.bxSlider) { // bxslider 이미 적용된 경우 return 처리
			return false;
		}
		// attr에 bxslider 적용
		this._globalOption.sliderLi = $(".bxslider li", attr);
		//this._globalOption.wd = this._globalOption.sliderLi.width();
		this._globalOption.isSingleImage = this._globalOption.sliderLi.length === 1;
		this._globalOption.mode = $(attr).attr("data-mode"); // 슬라이드 효과 - horizontal,vertical,fade
		this._globalOption.mode = this._globalOption.mode ? this._globalOption.mode : 'horizontal';
		this._globalOption.maxSlides = $(attr).attr("data-maxSlides"); // 최대 보여지는 갯수
		this._globalOption.maxSlides = this._globalOption.maxSlides && !isNaN(parseInt(this._globalOption.maxSlides)) ? parseInt(this._globalOption.maxSlides) : 1;
		this._globalOption.minSlides = $(attr).attr("data-minSlides"); // 최소 보여지는 갯수
		this._globalOption.minSlides = this._globalOption.minSlides && !isNaN(parseInt(this._globalOption.minSlides)) ? parseInt(this._globalOption.minSlides) : 1;
		this._globalOption.slideMargin = $(attr).attr("data-slideMargin"); // 슬라이드 사이 margin 값
		this._globalOption.slideMargin = this._globalOption.slideMargin && !isNaN(parseInt(this._globalOption.slideMargin)) ? parseInt(this._globalOption.slideMargin) : 0;
		this._globalOption.delay = $(attr).attr("data-delay"); // 슬라이드 딜레이 설정
		this._globalOption.delay = this._globalOption.delay && !isNaN(parseInt(this._globalOption.delay)) ? parseInt(this._globalOption.delay) : 4000;
		this._globalOption.speed = $(attr).attr("data-speed"); // 슬라이드 속도 설정
		this._globalOption.speed = this._globalOption.speed && !isNaN(parseInt(this._globalOption.speed)) ? parseInt(this._globalOption.speed) : 400;
		this._globalOption.autoBtn = $(attr).attr("data-autoBtn"); // play / stop / puase
		this._globalOption.autoBtn = this._globalOption.autoBtn && this._globalOption.autoBtn == 'true' ? true : false;
		this._globalOption.auto = $(attr).attr("data-auto"); // 자동슬라이드 여부
		this._globalOption.auto = this._globalOption.auto && this._globalOption.auto == 'true' ? true : false;
		this._globalOption.pager = $(attr).attr("data-pager");  // 페이지 동그란 버튼 설정 여부
		this._globalOption.pager = ( this._globalOption.pager && this._globalOption.pager == 'true' && !this._globalOption.isSingleImage ) ? true : false;
		this._globalOption.pagerCustom = '.' + $(attr).attr("data-pagerCustom");  // 페이지 외부로 빠지게할때
		this._globalOption.controls = $(attr).attr("data-controls"); //자동 슬라이드 컨트롤 버튼 설정 여부
		this._globalOption.controls = this._globalOption.controls && this._globalOption.controls == 'true' ? true : false;
		this._globalOption.moves = $(attr).attr("data-moves"); //한장씩 슬라이드
		this._globalOption.moves = this._globalOption.moves && !isNaN(parseInt(this._globalOption.moves)) ? parseInt(this._globalOption.moves) : 1;
		this._globalOption.touch = $(attr).attr("data-touch"); //마우스 터치 슬라이드 사용여부
		this._globalOption.touch = this._globalOption.touch && this._globalOption.touch == 'true' ? true : false;
		this._globalOption.loop = $(attr).attr("data-loop"); //마우스 터치 슬라이드 사용여부
		this._globalOption.loop = this._globalOption.loop && this._globalOption.loop == 'false' ? false : true;
		/* ticker(S) */
		this._globalOption.ticker = $(attr).attr("data-ticker"); //흐르는 슬라이드
		this._globalOption.ticker = this._globalOption.ticker && this._globalOption.ticker == 'true' ? true : false;
		this._globalOption.useCSS = true;
		this._globalOption.tickerHover = $(attr).attr("data-tickerHover"); //흐르는 슬라이드 호버시
		if (this._globalOption.tickerHover === 'true') {
			this._globalOption.tickerHover = true;
			this._globalOption.useCSS = false;//IE대응
		} else {
			this._globalOption.tickerHover = false;
			this._globalOption.useCSS = true;
		}/* ticker(E) */
		this._globalOption.select = $(attr).attr("data-select"); //슬라이드 할때 가운데슬라이드 활성화
		this._globalOption.select = this._globalOption.select && !isNaN(parseInt(this._globalOption.select)) ? parseInt(this._globalOption.select) : 1;
		this._globalOption.randomStart = $(attr).attr("data-randomStart"); //흐르는 슬라이드
		this._globalOption.randomStart = this._globalOption.randomStart && this._globalOption.randomStart == 'true' ? true : false;
		/* 아래내용은 상세 확인필요(S) */
		this._globalOption.cutLimit = $(attr).attr("data-cutLimit"); // 슬라이드 제한
		this._globalOption.cutLimit = this._globalOption.cutLimit && !isNaN(parseInt(this._globalOption.cutLimit)) ? parseInt(this._globalOption.cutLimit) : null;
		this._globalOption.pagerType =  $(attr).attr("data-pagerType");
		this._globalOption.info = $(attr).attr("data-info");
		//this._globalOption.li_length_num = 0;
		/* 아래내용은 상세 확인필요(E) */
		var bgCacheCheck = false,
			bgAvailable = false,
			bgColors = [],
			bgTarget;
		var bxThis = this;
		__globalBxslider.bxList[__globalBxslider.bxList.length] = attr.bxSlider = $('.bxslider', attr).bxSlider({
			/*slideWidth: bxThis._globalOption.wd
			,*/ slideMargin: bxThis._globalOption.slideMargin
			, minSlides: bxThis._globalOption.minSlides // 최소 보여지는 갯수
			, maxSlides: bxThis._globalOption.maxSlides // 최대 보여지는 갯수
			, speed: bxThis._globalOption.speed
			, pause: bxThis._globalOption.delay
			, moveSlides: bxThis._globalOption.moves
			, mode: bxThis._globalOption.mode // 슬라이드 효과 - horizontal,vertical,fade
			, autoControls: bxThis._globalOption.autoBtn // play / stop / puase
			, auto: bxThis._globalOption.auto // _auto // 자동슬라이드 여부
			, pager: bxThis._globalOption.pager
			, pagerCustom: (bxThis._globalOption.pagerCustom == '.undefined') ? '' : bxThis._globalOption.pagerCustom
			, controls: bxThis._globalOption.controls
			, ticker: bxThis._globalOption.ticker
			, tickerHover: bxThis._globalOption.tickerHover
			, touchEnabled: bxThis._globalOption.touch
			, infiniteLoop: bxThis._globalOption.loop
			, useCSS: bxThis._globalOption.useCSS
			, pagerType: bxThis._globalOption.pagerType
			, info : bxThis._globalOption.info
			, cutLimit : bxThis._globalOption.cutLimit
			, randomStart : bxThis._globalOption.randomStart
			, onSliderLoad: function (el) {
				//(현재 슬라이드숫자/총 슬라이드숫자) 예) (2/4) 이런 정보나오는거 부분
				if( bxThis._globalOption.info != undefined ){
					$(this).parents('.bxslider-default').find('.bxslider li').each(function(){
						if( !$(this).hasClass('bx-clone') ){
							li_length_num++
						}
					});
					$('.'+_info).html('1/'+li_length_num);
				}
				/* controls , pager click 했을? auto 멈추는 현상 개선 */
				if (!bxThis._globalOption.autoBtn) {
					if (bxThis._globalOption.auto && !bxThis._globalOption.isSingleImage) {
						$(attr).on('mouseover', function () {
							this.bxSlider.stopAuto()
						});
						$(attr).on('mouseout', function () {
							this.bxSlider.startAuto()
						});
					}
				}
			}
			, onSliderResize: function () {
			}
			, onSlideBefore: function (el, current, next) {//ⓓ bxslider onSliderBefore 이벤트 수정
				var lThis = this;
				// 백그라운드 세팅
				if (!bgCacheCheck) {
					bgCacheCheck = true;
					var $bxsliderDefault = $(el).closest('.bxslider-default');
					if (!$bxsliderDefault.hasClass('bxslider-bgcolor')) {
						bgAvailable = false;
						return;
					}
					lThis._globalOption.sliderLi.each(function () {
						var color = $(this).css('backgroundColor');
						bgColors.push(color);
						if (!bgAvailable && color != 'rgba(0, 0, 0, 0)' && color != 'rgb(0, 0, 0)') {
							bgAvailable = true;
						}
					});
					bgTarget = $(el).closest('.bxslider-default').parent().parent();
				}
				if (bgAvailable && bgTarget) {
					this.speed = 0;
					bgTarget.css({
						'backgroundColor': bgColors[next]
					});
				}
			}
			, onSlideNext: function (el) {
				if(el.context.className.indexOf("slide-select1") > 0){
					$('.slide-select1 .bxslider li').removeClass(); //슬라이드 셀랙트시 class모두 없앰 2019-02-26
					el.addClass('on');
				}else if(el.context.className.indexOf("slide-select3") > 0){
					$('.slide-select3 .bxslider li').removeClass('on');
					el.next('li').addClass('on');
				}else if(el.context.className.indexOf("slide-select5") > 0){
					$('.slide-select5 .bxslider li').removeClass('on');
					el.next('li').next('li').addClass('on');
				}
			}
			, onSlidePrev: function (el) {
				if(el.context.className.indexOf("slide-select1") > 0){
					$('.slide-select1 .bxslider li').removeClass(); //슬라이드 셀랙트시 class모두 없앰 2019-02-26
					el.addClass('on');
				}else if(el.context.className.indexOf("slide-select3") > 0){
					$('.slide-select3 .bxslider li').removeClass('on');
					el.next('li').addClass('on');
				}else if(el.context.className.indexOf("slide-select5") > 0){
					$('.slide-select5 .bxslider li').removeClass('on');
					el.next('li').next('li').addClass('on');
				}
			}
			//infiniteLoop: false
		});
		return true; // 슬라이드가 정상적으로 초기화
	},
	startAuto: function () {
		this.bxSlider.startAuto();
	},
	stopAuto: function () {
		this.bxSlider.stopAuto();
	},
	resize: function () {
		for (var i in this.bxList) {
			if ($.isNumeric(i) === false)
				continue;
			try {
				this.bxList[i].redrawSlider();
			}
			catch (e) {
				console.warn('Should Remove Legacy Code in bxslider.js');
				continue;
			}
		}
	},
	init: function (selector) { // ⓒ _globalBxslider.init 함수 변경
		var lThis = this;
		//var selector = $('.bxslider-default') ;
		$(selector).each(function (idx, slider) {
			var sliderObj = $(slider);
			// 브라우저/모바일 viewport 계산 문제로 visible 조건 제거
			// if (sliderObj.hasClass('loaded') || !sliderObj.visible(true)) {
			if (sliderObj.hasClass('loaded')) {
				return true;
			}
			__globalBxslider.setup(idx, slider);
			sliderObj.css("overflow", "visible").addClass('loaded');
		});
	},
	reloadSlider: function () {
		var lThis = this;
		var el = '.bxslider-default';
		$(el).each(function (i, $this) {
			//var idx = parseInt($('.bxslider-default').index($this));
			var idx = i;
			lThis.bxList[idx].reloadSlider();
			__globalBxslider.setup(idx, $this);
			//lThis.bxList[idx].resize();
		});
		$('.bxslider-default').find('li').hover(
			function () {
				$(this).addClass('on').siblings('li').removeClass('on');
			}, function () {
				$(this).removeClass('on');
			}
		);
	},
	renderImage: function (obj) {
		var img = $(obj);
		if (!img.hasClass('slider-lazy-image')) {
			return false;
		}
		var imgUrl = img.attr('data-original');
		img.attr('src', imgUrl).removeClass('slider-lazy-image');
		return true;
	},
};
// BXSLIDER-DEFAULT 초기화 예외조건
// 다음 클래스가 존재한다면 초기화하지 않는다
var exceptElements = [
	'.loaded'
];
var sliderObserver = null;
$(function () {
	/* ie8,ie7 대응 forEach 기능 추가 */
	if (!('forEach' in Array.prototype)) {
		Array.prototype.forEach = function (action, that /*opt*/) {
			for (var i = 0, n = this.length; i < n; i++)
				if (i in this)
					action.call(that, this[i], i, this);
		};
	}
	// ⓑ document load가 아닌 window 로드 이후 슬라이드 작동시작
	// IntersectionObserver 클래스 지원여부 확인
	if (typeof IntersectionObserver !== 'undefined') {
		$(window).on('load', function () {
			sliderObserver = new IntersectionObserver(function (entries) {
				for (var i in entries) {
					var entry = entries[i];
					if (entry.isIntersecting) {
						var slideObj = $(entry.target).get(0);
						__globalBxslider.init(slideObj);
					}
				}
			}, {root: null});
			$('.bxslider-default').not(exceptElements.join(',')).each(function () {
				sliderObserver.observe(this);
			});
		});
	} else {
		$(window).on('load scroll', function () {
			__globalBxslider.init($('.bxslider-default').not(exceptElements.join(',')));
		});
	}
});
// ⓐ $.fn.visible Jquery 사용자 함수 추가시작
(function ($) {
	/**
	 * JQUERY 객체 화면노출여부 검사
	 */
	var $w = $(window);
	$.fn.visible = function (partial, hidden, direction, container) {
		// IE7/8은 정상적으로 계산이 불가하므로 항상 보이는 상태로 처리
		var userAgent = navigator.userAgent;
		if (userAgent.indexOf('MSIE 7') > 0 || userAgent.indexOf('MSIE 8') > 0) {
			return true;
		}
		if (this.length < 1) return false;
		var result = true;
		if (typeof IntersectionObserver !== 'undefined') { // Class base viewport체크는 이전과정에서 체크
			return true;
		} else {    // Window Base
			// Set direction default to 'both'.
			direction = direction || 'both';
			var $t = this.length > 1 ? this.eq(0) : this,
				isContained = typeof container !== 'undefined' && container !== null,
				$c = isContained ? $(container) : $w,
				wPosition = isContained ? $c.position() : 0,
				t = $t.get(0),
				vpWidth = $c.outerWidth(),
				vpHeight = $c.outerHeight(),
				clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;
			if (typeof t.getBoundingClientRect === 'function') {
				// Use this native browser method, if available.
				var rec = t.getBoundingClientRect(),
					tViz = isContained ?
						rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
						rec.top >= 0 && rec.top < vpHeight,
					bViz = isContained ?
						rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
						rec.bottom > 0 && rec.bottom <= vpHeight,
					lViz = isContained ?
						rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
						rec.left >= 0 && rec.left < vpWidth,
					rViz = isContained ?
						rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left :
						rec.right > 0 && rec.right <= vpWidth,
					vVisible = partial ? tViz || bViz : tViz && bViz,
					hVisible = partial ? lViz || rViz : lViz && rViz,
					vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
					hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;
				if (direction === 'both')
					result = clientSize && vVisible && hVisible;
				else if (direction === 'vertical')
					result = clientSize && vVisible;
				else if (direction === 'horizontal')
					result = clientSize && hVisible;
			} else {
				var viewTop = isContained ? 0 : wPosition,
					viewBottom = viewTop + vpHeight,
					viewLeft = $c.scrollLeft(),
					viewRight = viewLeft + vpWidth,
					position = $t.position(),
					_top = position.top,
					_bottom = _top + $t.height(),
					_left = position.left,
					_right = _left + $t.width(),
					compareTop = partial === true ? _bottom : _top,
					compareBottom = partial === true ? _top : _bottom,
					compareLeft = partial === true ? _right : _left,
					compareRight = partial === true ? _left : _right;
				if (direction === 'both')
					result = !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
				else if (direction === 'vertical')
					result = !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
				else if (direction === 'horizontal')
					result = !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
			}
			return result;
		}
	};
})(jQuery);
// ⓐ $.fn.visible Jquery 사용자 함수 추가끝
