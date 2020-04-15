//스크롤 애니
//var s = skrollr.init();
var headHeight = $("#head").height();
$(window).load( function(){
	$("#head").delay(800).animate({ height : 0 }).css({ 'border' : '0 none'});
});
$(document).ready(function() {
	//.top 스크롤다운 버튼
	$('.top a').click(function(){
		$('#fp-nav ul li a').eq(1).trigger('click') ;
	});

	var TimelineLite1 = new TimelineLite();
	var TimelineLite2 = new TimelineLite();
	var iconTimeline1 = new TimelineMax();
	var TimelineLite4 = new TimelineLite();
	var TimelineLite5 = new TimelineLite();
	var TimelineLite6 = new TimelineLite();
	var TimelineLite7 = new TimelineLite();
	var TimelineLite8 = new TimelineLite();
	var TimelineLite9 = new TimelineLite();
	var TimelineLite10 = new TimelineLite();
	var TimelineLite11 = new TimelineLite();
	var TimelineLite12 = new TimelineLite();
	var TimelineLite13 = new TimelineLite();
	var TimelineLite14 = new TimelineLite();
	var myBox1 = myBox1_play();
	var myBox2 = myBox2_play();
	var iconTimeline = iconTimeline_play();
	var myBox4 = myBox4_play();
	var myBox5 = myBox5_play();
	var myBox6 = myBox6_play();
	var myBox7 = myBox7_play();
	var myBox8 = myBox8_play();
	var myBox9 = myBox9_play();
	var myBox10 = myBox10_play();
	var myBox11 = myBox11_play();
	var myBox12 = myBox12_play();
	var myBox13 = myBox13_play();
	var myBox14 = myBox14_play();
	function myBox1_play(){
		TimelineLite1.pause();
		return TimelineLite1.to(".top .t1", 0.7, {opacity:1 , width:811})
			.to(".top .t2", 1.5, {opacity:1})
			.to(".top .scroll_btn", 0.2, {opacity:1 ,delay:-0.5});
	}
	function myBox2_play(){ /*con2(진료는 의사/ 약은 약사)*/
		TimelineLite2.pause();
		return TimelineLite2.to(".con2 .t1", 0.5, {opacity: 1})
			.to(".con2 .t2", 0.3, {opacity: 1})
			.to(".con2 .t3", 0.4, {opacity: 1, width: 266})
			.to(".con2 .t4", 0.6, {opacity: 1, delay:0.5})
			.to(".con2 .t5", 0.4, {opacity: 1})
			.to(".con2 .t6", 0.4, {opacity: 1, width: 266})
			.to(".con2 .t7", 0.7, {opacity: 1 ,delay:1.5})
			.to(".con2 .t8", 0.7, {opacity: 1, width: 455})
			.to(".con2 .t9", 0.7, {opacity: 1})
			.to(".con2 .t10", 0.7, {opacity: 1, width: 455})
			.to(".con2 .txt1", 0.1, {opacity: 0})
			.to(".con2 .t7", 0.2, {scale: 0, opacity: 0, delay:1, ease:Power0.easeNone})
			.to(".con2 .t8", 0.2, {scale: 0, opacity: 0, ease:Power0.easeNone})
			.to(".con2 .t10", 0.2, {scale: 0, opacity: 0, ease:Power0.easeNone, delay:-0.1})
			.to(".con2 .t11", 0.2, {scale: 0, opacity: 0, ease:Power0.easeNone, delay:-0.1})
			.to(".con2 .t9", 0.6, {x:200,y:-120, delay:0.5})
			.to(".con2 .scroll_btn", 0.2, {opacity:1 ,delay:-0.5});
	}
	function iconTimeline_play(){ /*con3(이벤트 페이지이미지 / 코딩소스)*/
		var icons = $(".con3 .obj");
		iconTimeline1.pause();
		return iconTimeline1.to(icons[0], 7, {top:-1700, ease:Power0.easeNone, delay:1})
		.to(icons[0], 0.6, {scaleX:0, opacity:0.4, ease:Power2.easeIn, delay:0.5})
		//.set(icons[0], {visibility:"hidden"})
		.fromTo(icons[1], 0.4, {scaleX:0, opacity:0.4}, {autoAlpha:1, scaleX:1, ease:Power2.easeOut})
		.to(icons[1], 0.6, {scaleX:1, opacity:1, ease:Power2.easeIn})
		.to(icons[1], 10, {top:-2300, ease:Power0.easeNone, delay:.5})
		.to(".con3 .scroll_btn", 0.2, {opacity:1 ,delay:-0.5});
	}
	function myBox4_play() { /*con4(애로사항 + 핵심)*/
		TimelineLite4.pause();
		return TimelineLite4.to(".con4", .1, {background: '#fff'})
			.to(".con4 .t1", .5, {top: -100, opacity: 1, delay: -1})
			.to(".con4 .t1", 4, {top: -405, ease: Power0.easeNone, delay: 1})
			.to(".con4 .t1", .2, {opacity: 0, delay: 5})
			.to(".con4", .1, {background: '#1d1f21', delay: -0.2})
			.to(".con4 .t2", .7, {opacity: 1, delay: 0.2, delay: -0.2})
			.to(".con4 .t3", .5, {opacity: 1, delay: 0.2})
			.to(".con4 .t4", .5, {opacity: 1, delay: 0.2})
			.to(".con4 .t5", .5, {opacity: 1, delay: 0.2})
			.to(".con4 .t6", .5, {opacity: 1, delay: 0.2})
			.to(".con4 .t7", .5, {opacity: 1, delay: 0.2})
			.to(".con4 .scroll_btn", 0.2, {opacity:1 ,delay:-0.5});
	}
	function myBox5_play() { /*con5(2019년 3월 이전/이후 / 업무프로세스)*/
		TimelineLite5.pause();
		return TimelineLite5.to(".con5 .bg1", 1, {opacity:1, left : 0, ease:Power0.easeNone})
			.to(".con5 .t1", 0.3, {opacity:1, left : 520, delay:-0.1})
			.to(".con5 .t2", 0.4, {opacity:1, width : 1610, ease:Power2.easeIn, delay:-0.1})
			.to(".con5 .txt1", 0.3,{ scale: 0, opacity: 0, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
					TweenMax.staggerTo($('.con5 .txt1'), .5, { scale: 1, opacity: 1 }, .7)
				}
			})
			.to(".con5 .bg1", 1, {opacity:1, left : -10000, ease:Power0.easeNone, delay:7})
			.to(".con5 .t6", 0.3, {opacity:1, width:240,delay:-0.5})
			.to(".con5 .t4", 0.3, {opacity:1, left : 610, ease:Power4.easeOut})
			.to(".con5 .t5", 0.3, {opacity:1, left : 1280, ease:Power4.easeOut,delay:-0.3})
			.to(".con5 .t7", 0.3,{ scale: 0, opacity: 0, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
					TweenMax.staggerTo($('.con5 .t7'), .3, { scale: 1, opacity: 1 }, -0.2)
				}
			})
			.to(".con5 .scroll_btn", 0.2, {opacity:1 ,delay:2});
	}
	function myBox6_play() { /*con6(퍼블리싱 파트가 생긴후 / 어떤변화가?)*/
		TimelineLite6.pause();
		return TimelineLite6.to(".con6 .t1", 0.3,{ scale: 4, opacity: 0, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
				TweenMax.staggerTo($('.con6 .t1'), .2, { scale: 1, opacity: 1 }, -0.2)
				}
			})
			.to(".con6 .t1", 0.4,{ top: 180, delay:0.5})
			.to(".con6 .t2", 0.2,{ width:675, opacity: 1,delay:-0.2})
			.to(".con6 .scroll_btn", 0.2, {opacity:1 ,delay:1});
	}
	function myBox7_play() { /*con7(업무시간)*/
		TimelineLite7.pause();
		return TimelineLite7.to(".con7 .bg1", 1, {opacity:1, left : '-50%', ease:Power0.easeNone, delay:-0.5})
			.to(".con7 .set1 .t1", 0.4, {opacity:1, delay:0.6})
			.to(".con7 .set1 .t2", 0.2, {opacity:1, onComplete: function () {
					$('.set1 .t2 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set1 .t2 .counter');
					counterUp('.set1 .t2 .counter1');
				}
			})
			.to(".con7 .t7", 0.4, {opacity:1})
			.to(".con7 .set1 .t3", 0.2, {opacity:1, onComplete: function () {
					$('.set1 .t3 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set1 .t3 .counter2');
				}
			})
			.to(".con7 .set1 .t4", 0.4, {opacity:1, delay:0.6})
			.to(".con7 .set1 .t5", 0.2, {opacity:1, onComplete: function () {
					$('.set1 .t5 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set1 .t5 .counter');
					counterUp('.set1 .t5 .counter1');
				}
			})
			.to(".con7 .set1 .t6", 0.2, {opacity:1, onComplete: function () {
					$('.set1 .t6 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set1 .t6 .counter2');
				}
			})

			/* set2 */
			.to(".con7 .set1 .t1", 0.2, {rotationX:180, z:-10, opacity: 0, delay:3})
			.to(".con7 .set1 .t4", 0.2, {rotationX:180, z:-10, opacity: 0})

			.to(".con7 .set2 .t1", 0.4, {opacity:1})
			.to(".con7 .set2 .t4", 0.4, {opacity:1, delay:-0.4})
			.to(".con7 .set2 .t2", 0.2, {opacity:1, delay:-0.7, onComplete: function () {
					$('.set1 .t2 .counter_box').animate({ opacity : 0 }, 0);
					$('.set2 .t2 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set2 .t2 .counter');
					counterUp('.set2 .t2 .counter1');
				}
			})
			.to(".con7 .set2 .t5", 0.2, {opacity:1, delay:-0.7, onComplete: function () {
					$('.set1 .t5 .counter_box').animate({ opacity : 0 }, 0);
					$('.set2 .t5 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set2 .t5 .counter');
					counterUp('.set2 .t5 .counter1');
				}
			})
			.to(".con7 .set2 .t3", 0.2, {opacity:1, onComplete: function () {
					$('.set1 .t3 .counter_box1').animate({ opacity : 0 }, 0);
					$('.set2 .t3 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set2 .t3 .counter2');
				}
			})
			.to(".con7 .set2 .t6", 0.2, {opacity:1, onComplete: function () {
					$('.set1 .t6 .counter_box1').animate({ opacity : 0 }, 0);
					$('.set2 .t6 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set2 .t6 .counter2');
				}
			})

			/* set3 */
			.to(".con7 .set2 .t1", 0.2, {rotationX:180, z:-10, opacity: 0, delay:3})
			.to(".con7 .set2 .t4", 0.2, {rotationX:180, z:-10, opacity: 0})

			.to(".con7 .set3 .t1", 0.4, {opacity:1})
			.to(".con7 .set3 .t4", 0.4, {opacity:1, delay:-0.4})
			.to(".con7 .set3 .t2", 0.2, {opacity:1, delay:-0.7, onComplete: function () {
					$('.set2 .t2 .counter_box').animate({ opacity : 0 }, 0);
					$('.set3 .t2 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set3 .t2 .counter');
					counterUp('.set3 .t2 .counter1');
				}
			})
			.to(".con7 .set3 .t5", 0.2, {opacity:1, delay:-0.7, onComplete: function () {
					$('.set2 .t5 .counter_box').animate({ opacity : 0 }, 0);
					$('.set3 .t5 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set3 .t5 .counter');
					counterUp('.set3 .t5 .counter1');
				}
			})
			.to(".con7 .set3 .t3", 0.2, {opacity:1, onComplete: function () {
					$('.set2 .t3 .counter_box1').animate({ opacity : 0 }, 0);
					$('.set3 .t3 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set3 .t3 .counter2');
				}
			})
			.to(".con7 .set3 .t6", 0.2, {opacity:1, onComplete: function () {
					$('.set2 .t6 .counter_box1').animate({ opacity : 0 }, 0);
					$('.set3 .t6 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set3 .t6 .counter2');
				}
			})

			/* set4 */
			.to(".con7 .set3 .t1", 0.2, {rotationX:180, z:-10, opacity: 0, delay:5})
			.to(".con7 .set3 .t4", 0.2, {rotationX:180, z:-10, opacity: 0})

			.to(".con7 .set4 .t0", 0.4, {opacity:1})
			.to(".con7 .set4 .t1", 0.4, {opacity:1, x:-200})
			.to(".con7 .set4 .t2", 0.2, {opacity:1, delay:-0.4, onComplete: function () {
					$('.set3 .t2 .counter_box').animate({ opacity : 0 }, 0);
					$('.set4 .t2 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set4 .t2 .counter');
					counterUp('.set4 .t2 .counter1');
				}
			})
			.to(".con7 .set4 .t3", 0.2, {opacity:1, delay:-0.2, onComplete: function () {
					$('.set3 .t3 .counter_box1').animate({ opacity : 0 }, 0);
					$('.set4 .t3 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set4 .t3 .counter2');
				}
			})

			.to(".con7 .set4 .t4", 0.4, {opacity:1, x:200, delay:0.8})
			.to(".con7 .set4 .t5", 0.2, {opacity:1, delay:-0.4, onComplete: function () {
					$('.set3 .t5 .counter_box').animate({ opacity : 0 }, 0);
					$('.set4 .t5 .counter_box').animate({ opacity : 1 }, 10);
					counterUp('.set4 .t5 .counter');
					counterUp('.set4 .t5 .counter1');
				}
			})
			.to(".con7 .set4 .t6", 0.2, {opacity:1, delay:-0.2, onComplete: function () {
					$('.set3 .t6 .counter_box1').animate({ opacity : 0 }, 0);
					$('.set4 .t6 .counter_box1').animate({ opacity : 1 }, 10);
					counterUp('.set4 .t6 .counter2');
				}
			})
			.to(".con7 .scroll_btn", 0.2, {opacity:1 ,delay:0.5});
	}
	function myBox8_play() { /*con8(업무시간 평균)*/
		TimelineLite8.pause();
		return TimelineLite8.to(".con8 .t1", 0.5, {opacity:1})
			.to(".con8 .t2", 0.5, {opacity:1,y:500, ease:Power4.easeOut})
			.to(".con8 .t3", 0.5, {opacity:1})
			.to(".con8 .t4", 0.5, {opacity:1,y:-500, ease:Power4.easeOut})
			.to(".con8 .scroll_btn", 0.2, {opacity:1});
	}
	function myBox9_play() { /*con9(퍼블리싱 파트가 생긴 후 / 어째서?)*/
		TimelineLite9.pause();
		return TimelineLite9.to(".con9 .t1", 0.3,{ scale: 4, opacity: 0, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
				TweenMax.staggerTo($('.con9 .t1'), .2, { scale: 1, opacity: 1 }, -0.2)
			}
		})
			.to(".con9 .t1", 0.4,{ top: 180, delay:0.5})
			.to(".con9 .t2", 0.2,{ width:410, opacity: 1,delay:-0.2})
			.to(".con9 .scroll_btn", 0.2, {opacity:1});
	}
	function myBox10_play() { /*con10(감소요인)*/
		TimelineLite10.pause();
		return TimelineLite10.to(".con10 .t1", 0.3,{ scale: 1.2, opacity: 0, top:0, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
				TweenMax.staggerTo($('.con10 .t1'), .2, { scale: 1, opacity: 1, top:600 }, -0.2)
			}
		})
			.to('.con10 .obj1 .t2', .5, { opacity: 1, y:200, ease: Power1.easeOut, delay:0.5})
			.to('.con10 .obj1 .t3', .5, { opacity: 1, y:200, ease: Power1.easeOut })
			.to('.con10 .obj1 .t4', .5, { opacity: 1, y:200, ease: Power1.easeOut })
			.to('.con10 .obj1 .t5', .5, { opacity: 1, y:200, ease: Power1.easeOut })
			.to(".con10 .scroll_btn", 0.2, {opacity:1});
	}
	function myBox11_play() { /*con11(증가요인)*/
		TimelineLite11.pause();
		return TimelineLite11.to(".con11 .t1", 0.3,{ scale: 1.2, opacity: 0, top:600, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
				TweenMax.staggerTo($('.con11 .t1'), .2, { scale: 1, opacity: 1, top:50 }, -0.2)
			}
		})
			.to('.con11 .obj1 .t2', .5, { opacity: 1, y:-200, ease: Power1.easeOut, delay:0.5})
			.to('.con11 .obj1 .t3', .5, { opacity: 1, y:-200, ease: Power1.easeOut })
			.to('.con11 .obj1 .t4', .5, { opacity: 1, y:-200, ease: Power1.easeOut })
			.to('.con11 .obj1 .t5', .5, { opacity: 1, y:-200, ease: Power1.easeOut })
			.to(".con11 .scroll_btn", 0.2, {opacity:1});
	}
	function myBox12_play() { /*con12(퍼블리싱 파트가 생긴 후 / 개발 업무에 영향은?)*/
		TimelineLite12.pause();
		return TimelineLite12.to(".con12 .t1", 0.3,{ scale: 4, opacity: 0, transformOrigin:"center center", ease: Power1.easeOut, onComplete: function(){
				TweenMax.staggerTo($('.con12 .t1'), .2, { scale: 1, opacity: 1 }, -0.2)
			}
		})
			.to(".con12 .t1", 0.4,{ top: 311, delay:0.5})
			.to(".con12 .t2", 0.2,{ width:1063, opacity: 1,delay:-0.2})
			.to(".con12 .bg1", 0.8,{ opacity: 1,delay:5})

			.to(".con12 .t4", 0.5,{ width:1048, opacity: 1,delay:0.7})
			.to(".con12 .t5", 0.3,{ width:544, opacity: 1,delay:0.7})
			.to(".con12 .t6", 0.4,{ width:965, opacity: 1,delay:0.7})
			.to(".con12 .t7", 0.4,{ width:709, opacity: 1,delay:0.7})
			.to(".con12 .t8", 0.4,{ width:775, opacity: 1,delay:0.7})
			.to(".con12 .t9", 0.4,{ width:922, opacity: 1,delay:0.7})
			.to(".con12 .t10", 0.5,{ width:1101, opacity: 1,delay:0.7})
			.to(".con12 .t11", 0.4,{ width:888, opacity: 1,delay:0.7})
			.to(".con12 .t12", 0.3,{ width:416, opacity: 1,delay:0.7})
			.to(".con12 .t13", 0.2,{ width:464, opacity: 1,delay:0.7})
			.to(".con12 .scroll_btn", 0.2, {opacity:1});
	}
	function myBox13_play() { /*con13(코딩은 퍼블리셔)*/
		TimelineLite13.pause();
		return TimelineLite13.to(".con13 .t1", 0.5, {opacity: 1})
			.to(".con13 .t2", 0.3, {opacity: 1})
			.to(".con13 .t3", 0.4, {opacity: 1, width: 455})
			.to(".con13 .t4", 0.6, {opacity: 1, delay:0.5})
			.to(".con13 .t5", 0.4, {opacity: 1})
			.to(".con13 .t6", 0.4, {opacity: 1, width: 455})
			.to(".con13 .t7", 0.5, {opacity: 1, delay:0.5})
			.to(".con13 .t8", 0.6, {opacity: 1, width: 455})
			.to(".con13 .scroll_btn", 0.2, {opacity:1});
	}
	function myBox14_play() { /*con14(감사합니다.)*/
		TimelineLite14.pause();
		return TimelineLite14.to(".con14 .t1", 0.4, {opacity: 1, width: 600})
	}

	//풀페이지
	$('#full_wrap').fullpage({
		navigation: true,
		navigationPosition: 'left',
		scrollOverflow: true,
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);
			//header 높이조절
			if(index == 2 && direction =='up'){  //슬라이드 1에서 위로 올라갈때
				$('#fp-nav').hide();
			}else if(index == 1 && direction == 'down'){  //슬라이드 1에서 down 방향일때
				$('#fp-nav').show();
			}
			myBox1.pause();
			myBox2.pause();
			iconTimeline.pause();
			myBox4.pause();
			myBox5.pause();
			myBox6.pause();
			myBox7.pause();
			myBox8.pause();
			myBox9.pause();
			myBox10.pause();
			myBox11.pause();
			myBox12.pause();
			myBox13.pause();
			myBox14.pause();
			//애니메이션 투명도 0
			$('#full_wrap .h2 > .obj, #full_wrap .obj1 p, #full_wrap .obj p, #full_wrap .obj3 p, #full_wrap .obj, #full_wrap .h2 > div,#full_wrap .imgWrap,#full_wrap .imgWrap > li, #full_wrap .tWrap,#full_wrap .tWrap > li,#full_wrap .tt').stop().animate({opacity : 0})
			$('#full_wrap .overflow').stop().css({width : 0})
			$('#full_wrap .con3 .t1').stop().css({top : 0})
			$('#full_wrap .con4').stop().css({background : '#fff'})
			$('#full_wrap .con7 .bg1').stop().css({left : -10000})
			$('#full_wrap .con12 .bg1').stop().css({opacity : 0})
			$('.scroll_btn').stop().css({opacity : 0})
		}, //onLeave
		afterLoad  : function(anchorLink, index){
			if( index == 1 ){   //top
				myBox1.restart({delay:-0.5});
			}else if( index == 2 ) {   //con2 (진료는 의사/ 약은 약사)
				myBox2.restart({delay:-0.5});
			}else if( index == 3 ) {   //con3 (이벤트 페이지이미지 / 코딩소스)
				iconTimeline.restart();
			}else if( index == 4 ) {   //con4 (애로사항 + 핵심)
				myBox4.restart();
			}else if( index == 5 ) {   //con5 (2019년 3월 이전/이후 / 업무프로세스)
				myBox5.restart();
			}else if( index == 6 ) {   //con6 (퍼블리싱 파트가 생긴후 / 어떤변화가?)
				myBox6.restart();
			}else if( index == 7 ) {   //con7 (업무시간)
				myBox7.restart();
			}else if( index == 8 ) {   //con8 (업무시간 평균)
				myBox8.restart();
			}else if( index == 9 ) {   //con9 (퍼블리싱 파트가 생긴 후 / 어째서?)
				myBox9.restart();
			}else if( index == 10 ) {   //con10 (감소요인)
				myBox10.restart();
			}else if( index == 11 ) {   //con11 (증가요인)
				myBox11.restart();
			}else if( index == 12 ) {   //con12 (퍼블리싱 파트가 생긴 후 / 개발 업무에 영향은?)
				myBox12.restart();
			}else if( index == 13 ) {   //con13 (코딩은 퍼블리셔)
				myBox13.restart();
			}else if( index == 14 ) {   //con14 (감사합니다.)
				myBox14.restart();
			}
		}
	});//fullpage()
	function counterUp(obj){
		$(obj).counterUp({
			delay: 1,
			time: 100
		});
	}
});//제이쿼리


