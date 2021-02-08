

//Focus 함수
function fnSetFocus(type, type_nm, add_top) {
    if (type.toUpperCase() != 'ID') {
        var focus_id = '.'+ type_nm;
    } else {
        var focus_id = '#'+ type_nm;
    }

    //Target 고정 처리 S
    var headerH = $('header').height();
    var intOffset = $(focus_id).offset();
    var intOffsetTop = intOffset.top - add_top - headerH;

    $('body, html').stop();
    $('body, html').animate({ scrollTop: intOffsetTop }, 500);
    //Target 고정 처리 E
}





$(document).ready(function () {

    //PC GNB
    $('header .gnb-area .gnb>li>a').on('mouseover',function(){
        $(this).parent().addClass('on').siblings().removeClass('on');

        if($(this).parent().hasClass('has-sub')){ //2depts 있을 때
            $(this).next().stop().slideDown(300).parent().siblings().find('ul').stop().slideUp(300);
        }else{
            $('header .gnb-area .gnb>li ul').stop().slideUp(300);
        }
    });
    $('header .gnb-area .gnb>li').mouseleave(function(){
        $('header .gnb-area .gnb>li').removeClass('on');
        $('header .gnb-area .gnb>li ul').stop().slideUp(300);
    });




    //필터 레이어 toggle
    $('.js-filter-toggle-btn').on('click', function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');
            $('.filter-area.layer').stop().slideUp(300);
        }else{
            $(this).parent().addClass('on');
            $('.filter-area.layer').stop().slideDown(300);
        }
    });


    //toggle 버튼
    $('.js-togglebtn').on('click', function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');
            $(this).next().stop().slideUp(300);
        }else{
            $(this).parent().addClass('on');
            $(this).next().stop().slideDown(300);
        }
    });


    //dl toggle 버튼
    $('.js-toggle-content dt>.btn-toggle').on('click', function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on').next('dd').stop().slideUp(300);
        }else{
            $(this).parent().addClass('on').next('dd').stop().slideDown(300);
        }
    });
    /*
    //dl toggle 버튼 닫기
    $('body').on('click',function(e) {
        if ( !$(e.target).closest('.js-toggle-content').length ){
            $('.js-toggle-content dd').stop().slideUp(300);
            $('.js-toggle-content dt').removeClass('on');
        }
    });*/


    //toggle 닫기
    $('body').on('click',function(e) {
        if ( !$(e.target).closest('.js-togglebtn').length ){
            $('.js-togglebtn').next().stop().slideUp(300).parent().removeClass('on');
        }

        if ( !$(e.target).closest('.recommend-box').length ){
            $('.js-filter-toggle-btn').parent().removeClass('on');
            $('.filter-area.layer').stop().slideUp(300);
        }
    });






    //CSS-Animation
    try {
        var myAOS = function() {
            AOS.init({
                easing: 'ease-in',
                duration: 500
            });
        };
        myAOS();

    } catch (exception) {
        //에러시 수행
        console.log(  'AOS 사용 안함'  );
    }





}); //jQuery


