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
            //$(this).parent().siblings('dd').stop().slideUp(300).siblings('dt').removeClass('on');
        }
    });




    //CSS-Animation
    try {
        var myAOS = function() {
            AOS.init({
                easing: 'ease-out-back', //'ease-in'
                duration: 1300
            });
        };
        myAOS();

    } catch (exception) {
        //에러시 수행
        console.log(  'AOS 사용 안함'  );
    }



    //Count-Up 숫자 카운팅
    try {
        counter = $('.js-counter').counterUp({
            delay: 10,
            time: 2000
        });
    } catch (exception) {
        //에러시 수행
        console.log(  'count 사용 안함 / js-counter 클래스 없음'  );
    }





}); //jQuery





/* 참고
var mql = window.matchMedia('screen and (max-width: 1024px)');
mql.addListener(function(e) {
    if (e.matches) {
        //1024px 이하 (tablet & mobile)
        console.log('1024px 이하');
        $('#container').removeClass('pc').addClass('mobile');

    } else {
        //1025px 이상 (PC)
        console.log('1025px 이상');
        $('#container').removeClass('mobile').addClass('pc');
    }
});



//Focus 함수
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
    $('body, html').animate({ scrollTop: intOffsetTop }, "slow");
    //Target 고정 처리 E
}




$(document).ready(function () {

    //Mobile GNB
    $('#header_m .toggle a').click(function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $('#header_m .gnb_area').removeClass('on').stop().slideUp(100);
            $(this).parent().removeClass('on');
            $('#header_m').removeClass('fixed');
            $('#header_m .logo_area h1').removeClass('wide');
        }else{
            $('#header_m .gnb_area').addClass('on').stop().slideDown();
            $(this).parent().addClass('on');
            $('#header_m').addClass('fixed');
            $('#header_m .logo_area h1').addClass('wide');
        }
    });

    $('#header_m .gnb_area .gnb>li>a').click(function (e) {
        if($(this).next().hasClass('dep2')){
            e.preventDefault();
            if($(this).parent().hasClass('on')){
                $(this).next().stop().slideUp(200).parent().removeClass('on');
            }else{
                $(this).next().stop().slideDown().parent().addClass('on');
            }
        }
    });



    //체크박스-다중선택시
    $('label.checkbox input').click(function(){
        if( $(this).prop('checked') ){ //개발중 [input:checked]값이 제대로 넘어 오지 않을경우 [prop->attr]로 변경하여 작업해주세요.
            $(this).parent().addClass('on');
        }else{
            $(this).prop('checked',false).parent().removeClass('on'); //개발중 [input:checked]값이 제대로 넘어 오지 않을경우 [prop->attr]로 변경하여 작업해주세요.
        }
    });




    //라디오 버튼
    $('label.radio input').click(function(){
        var name = $(this).attr("name");
        var radio_input = $('label.radio input[name='+ name +']');
        radio_input.parent().removeClass('on');
        radio_input.prop('checked',false); //개발중 [input:checked]값이 제대로 넘어 오지 않을경우 [prop->attr]로 변경하여 작업해주세요.
        $(this).parent().addClass('on');
        $(this).prop('checked',true); //개발중 [input:checked]값이 제대로 넘어 오지 않을경우 [prop->attr] 로 변경하여 작업해주세요.
    });




    //탭
    $('.js_tab_bt li a').on('click', function (e) {
        var targetId = $(this).attr("href");
        e.preventDefault();
        $(this).parent('li').siblings().removeClass('on');
        $(this).parent('li').addClass('on');
        $(targetId).addClass('on').siblings().removeClass('on');
    });


}); //$(document).ready
*/