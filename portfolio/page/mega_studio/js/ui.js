

/**************
 브라우저 Loaing 시 실행  ____*/
$(window).load(function(){
	if( $(this).width() <= 1024){
		//Mobile 에서만 실행
		$('#wrap').removeClass('pc').addClass('mobile');
		startSlide();
		studioTitle_m();

	}else {
		//PC 에서만 실행
		$('#wrap').removeClass('mobile').addClass('pc');
		portfolioImgView();
		studioTitle_pc();
	}
});


/**************
 브라우저 Resize 시 실행 ____*/
var mql = window.matchMedia('screen and (max-width: 1024px)');
mql.addListener(function(e) {
	if (e.matches) {
		//1024px 이하에서만 실행
		console.log('1024px 이하');
		$('#wrap').removeClass('pc').addClass('mobile');
		startSlide();
		studioTitle_m();

	} else {
		//1025px 이상 실행
		console.log('1025px 이상');
		$('#wrap').removeClass('mobile').addClass('pc');
		portfolioImgView();
		studioTitle_pc();
	}
});


/**************
 PC, Mobile 모두 실행 ____*/
$(document).ready(function () {
	headerBgOn();
	gnbMenu();
	inputType1();
	typingAni();
});

//Focus
function fnSetFocus(type, type_nm, add_top) {
	if (type.toUpperCase() != 'ID') {
		var focus_id = '.'+ type_nm;
	} else {
		var focus_id = '#'+ type_nm;
	}

	//Target 고정 처리 S
	var intOffset = $(focus_id).offset();
	var intOffsetTop = intOffset.top - add_top;
	var intOffsetLeft = intOffset.left;

	$('body, html').stop();
	$('body, html').animate({ scrollTop: intOffsetTop }, '1000');
	//Target 고정 처리 E
}


//Header-bg  (scroll on-off)
function	headerBgOn(){
	$(window).on('scroll', function () {
		$header = $('#header');
		if( $(window).scrollTop() > 20 ){
			$header.addClass('scroll');
		}else {
			$header.removeClass('scroll');
		}
	});
}

//Gnb Menu
function gnbMenu(){
	$gnbbt = $('#header .gnb_area .gnb a');

	//click action
	$gnbbt.click(function (e) {
		e.preventDefault();
		var targetId = $(this).attr("href");
		var target = targetId.split('#');
		$(this).parent('li').addClass('on').siblings().removeClass('on');
		if($(window).width() > 1024 ){
			//PC gnb menu
			fnSetFocus('id', target[1], 80);
		}else{
			//Mobile gnb menu
			fnSetFocus('id', target[1], 0);
			mobileGnb();
		}
	});

	//scroll action
	$(window).scroll(function(){
		var section = [ '#about' , '#portfolio', '#studio', '#client',  '#contactus']; //메인 섹션
		$(section).each(function (i) {
			if ($(window).scrollTop() > ($(section[i]).offset().top) - 100) {
				$gnbbt.parent().eq(i).addClass('on').siblings('li').removeClass('on');
			}
		});
	});
}//Gnb

//Layer popup
function layerPopup( layerId , open ){
	$layerwrap = $('#'+layerId);
	$layer = $layerwrap.find($('.ly_inner'));

	if( open === '0'){
		//layer 닫기
		$layerwrap.fadeOut(200);

	}else if( open === '1' ){
		//layer 열기
		$layerwrap.fadeIn(200,function (){
			var layerTop = $(window).scrollTop()+ ($(window).height() - $layer.height())/2 ;
			$layer.css({top : layerTop});
		});
	}
}

//placeholder
function inputType1(){
	$input_type1 = $('.input_type1 .input input,  .input_type1 .input textarea');
	if( $input_type1.length > 0){
		$input_type1.focus(function () {
			$(this).next('label').hide();
		});
		$input_type1.blur(function () {
			if( $(this).val().length < 1 ){
				$(this).next('label').show();
			}
		});
	}
}


//main - 타이핑 모션
function typingAni(){
	$mainVisualText = $('#main_content .main_visual .visualtxt');
	if( $mainVisualText.length > 0 ){
		$mainVisualText.t({
			delay: .5,                   // start delay in seconds [default:0]
			speed: 70,                  // typing speed (ms) [default:50]
			speed_vary: false,          // 'human like' speed variation [default:false]
			beep: false,                 // beep while typing (Web Audio API) [default:false]
			mistype: false,                 // mistype rate: 1:N per char [default:false]
			locale: 'en',               // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']
			caret: '\u258F',            // caret content; can be html too [default:true (\u258e)]
			blink: true,                // blink-interval in ms; if TRUE, speed*3  [default:true]
			blink_perm: false,          // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
			repeat: 0,                  // repeat typing: if TRUE, infinite or N times [default:0]
			tag: 'span',                // wrapper tag (.t-container, .t-caret) [default:'span']
			pause_on_click: false,       // pauses/continues typing on click/tap (elm) [default:false]
			pause_on_tab_switch: false  // pauses typing if window is inactive (Page Visibility API) [default:false]
		});
	}
}
//___PC+Mobile 모두실행




/**************************************************************************
 함수
																														 ____*/
/**************************************************************************
 함수 : PC 에서만 실행    _____*/
//main_section2
function portfolioImgView(){
	$portfolio_Img = $('#main_content .main_section2 .portfolio_list li>a');
	if( $portfolio_Img.length > 0 ){
		$portfolio_Img.hover(function () {
			$(this).parent().addClass('on');
		},function () {
			$(this).parent().removeClass('on');
		});
	}
}


/**************************************************************************
 함수 : Mobile 에서만 실행    _____*/

//Mobile GNB
function mobileGnb(){
	$toggleBtn = $('#header .m_nav_area .menu a');
	$mGnb = $('#header .gnb_area');

	if($toggleBtn.hasClass('on')){
		$toggleBtn.removeClass('on');
		$mGnb.fadeOut().removeClass('open');

	}else{
		$toggleBtn.addClass('on');
		$mGnb.fadeIn().addClass('open');
	}
}

//main_section3
function startSlide() {
	$process = $('.process_list_mobile');
	var processSlider;
	if( $process.length > 0 ){
		processSlider =$process.bxSlider({
			auto: true,
			pause: 3000,
			controls: false,
			pager: true,
			autoHover: true,
			onSlideBefore: function (slide, oldIndex, newIndex) {
				processSlider.startAuto();  //버튼 클릭 후 자동롤링(auto) 재실행
			}
		});
		processSlider.reloadSlider();
	}
}

//main_section4
function studioTitle_m (){
	$(window).resize(function () {
		var section4conH = $('.main_section4 .thumbnail').height();
		$('.main_section4 .inner').css({height: section4conH });
	});
}
function studioTitle_pc (){
	$('.main_section4 .inner').css({height: 'auto' });
}