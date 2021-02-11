
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



    //필터 select-box toggle
    $('.filter .select-area .current').click(function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).next().stop().slideUp(200).parent().removeClass('on');
        }else{
            $('.filter .select-area.on').removeClass('on').find('ul').stop().slideUp(200);
            $(this).next().stop().slideDown(200).parent().addClass('on');
        }
    });

    //ranking - 필터 모바일 toggle
    $('.js-filter-toggle-btn').on('click', function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');
            $('.filter-area1').stop().slideUp(300);
        }else{
            $(this).parent().addClass('on');
            $('.filter-area1').stop().slideDown(300);
        }
    });

    //solution - 필터 레이어 toggle
    $('.js-filter-layer-toggle-btn').on('click', function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');
            $('.filter-area2').stop().slideUp(300);
        }else{
            $(this).parent().addClass('on');
            $('.filter-area2').stop().slideDown(300);
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



    //ranking table
    $('.my-table .current-th').click(function (e) {
        e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on').next().stop().slideUp(200);
        }else{
            $(this).addClass('on').next().stop().slideDown(200);
        }
    });



    //toggle 닫기
    $('body').on('click',function(e) {
        if ( !$(e.target).closest('.js-togglebtn').length ){
            $('.js-togglebtn').next().stop().slideUp(300).parent().removeClass('on');
        }


        //필터
        if ( !$(e.target).closest('.select-area').length ){
            $('.select-area').removeClass('on');
            $('.select-area ul').stop().slideUp(200);
        }

        if ( !$(e.target).closest('.recommend-box').length ){
            $('.js-filter-layer-toggle-btn').parent().removeClass('on');
            $('.filter-area2').stop().slideUp(300);
        }

        //ranking table
        if ( !$(e.target).closest('.table-filter-mobile').length ){
            $('.table-filter-mobile .current-th').removeClass('on');
            $('.table-filter-mobile .current-th+ul').css({display:'none'});
        }

    });



    //ranking save btn
    $('.my-table .btn-save').on('click', function (e) {
        e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    });



    //CSS-Animation
    try {
        var myAOS = function() {
            AOS.init({
                easing: 'ease-in',
                duration: 450
            });
        };
        myAOS();

    } catch (exception) {
        //에러시 수행
        console.log(  'AOS 사용 안함'  );
    }



}); //jQuery




//ranking table
function viewEffect() {
    $('.my-table .col-effect').css({display: 'table-cell'});
    $('.my-table .col-follower').css({display: 'none'});
    $('.my-table .select-list').stop().slideUp(200);
}
function viewFollower() {
    $('.my-table .col-follower').css({display: 'table-cell'});
    $('.my-table .col-effect').css({display: 'none'});
    $('.my-table .select-list').stop().slideUp(200);
}
