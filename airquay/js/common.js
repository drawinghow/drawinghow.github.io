

//팝업
function popup_open(popupId){
    $('#'+popupId).fadeIn(150);
}

function popup_close(popupId){
    $('#'+popupId).fadeOut(150);
}


/*// 스크롤바
$(window).on('load resize', function () {
    $('#gnb .nano').height($(window).height()-205);
});*/




 $(document).ready(function () {


    // scrollbar style
    $(".js-scrollbar").nanoScroller();




    /* GNB Control */
    $('#gnb .btn_gnb_control').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('#gnb_wrap, #contents').addClass('gnb_off');

        }else{
            $(this).addClass('on');
            $('#gnb_wrap, #contents').removeClass('gnb_off');
        }
    });

    //가로 스크롤 사용시 gnb 닫기
    $(window).scroll(function () {
        if($(window).scrollLeft() > 1){
            if($('#gnb .btn_gnb_control').hasClass('on')){
                $('#gnb .btn_gnb_control').removeClass('on');
                $('#gnb_wrap, #contents').addClass('gnb_off');
            }
        }
    });

    //GNB 알림
    $('#gnb .gnb_notice').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('#gnb_notice_box').hide();
        }else{
            $(this).addClass('active');
            $('#gnb_notice_box').show();
        }
    });


    //header 알림 (네트워크목록)
    $('header .btn_notice_sign').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('#top_notice').hide();
        }else{
            $(this).addClass('active');
            $('#top_notice').show();
        }
    });

    //header 로그아웃 (네트워크목록)
    $('header #header_user_area .btn_user').click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('header #header_user_area .btn_logout').slideUp(150);
        }else{
            $(this).addClass('active');
            $('header #header_user_area .btn_logout').slideDown(150);
        }
    });






    //네트워크 목록 - view 스타일
    $('.list_view_type li button').click(function () {
        $(this).parent().addClass('on').siblings().removeClass('on');

        var viewIdx =  $(this).parent().index()+1;
        var viewMode = 'view_mode'+viewIdx;
        $('#networkboxs').removeClass().addClass(viewMode);

        $('#networkboxs .n_box.active').removeClass('active'); //open 된 팝업 닫기
    });

    //네트워크 목록 - view2~view3 상세팝업
    $('#networkboxs .btn_detail').click(function () {
        $(this).parent().parent().parent().addClass('active').siblings($('.n_box')).removeClass('active');
    });
    $('#networkboxs .btn_box_close').click(function () {
        $(this).parent().parent().removeClass('active');
    });
    $('#networkboxs .pop_bg').click(function () {
        $(this).parent().parent().removeClass('active');
    });






    //select-box toggle
    $('.selectbox_area .btn_toggle').on('click',function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('on')){
            $(this).next().stop().slideUp(100).parent().removeClass('on');
        }else{
            $('.selectbox_area.on').removeClass('on').find('ul').stop().slideUp(100);
            $(this).next().stop().slideDown(100).parent().addClass('on');
        }
    });
    $('.selectbox_area ul li button').on('click',function () {
        var txt = $(this).text();
        $(this).parent().addClass('on').siblings().removeClass('on').parent().slideUp(100).parent().removeClass('on').find($('.btn_toggle')).find('span').text(txt);
    });





    // 포트 팝업 : 개발 시 수정하여 사용하세요.
    $('.port_wrap ul.two .port_ic').click(function () {
        //$(this).addClass('on');
        $('.popup_port').css({display: 'block'});

        //팝업내용 로드&세팅
        var port_number = $(this).parent().find($('.num')).text();
        var port_t2 = $(this).data('t2');   //button 의 data 값을 가져옴
        var port_t3 = $(this).data('t3');   //button 의 data 값을 가져옴
        var port_class = $(this).attr('class');

        $('.popup_port .number').text(port_number);
        $('.popup_port .t2').text(port_t2);
        $('.popup_port .t3').text(port_t3);
        $('.popup_port .port_ic').removeClass().addClass(port_class);


        //팝업위치 로드&세팅
        var top = $(this).offset().top-15;
        var left = $(this).position().left;

        if( port_number > 48){
            $('.popup_port').css({left: left-160, top: top});
        }else{
            $('.popup_port').css({left: left, top: top});
        }
    });






     //알림설정 - 박스높이 맞춤
     function matchHeight(){
         $('.alim_con .box_st1_2').matchHeight();
     }

     if( $('.alim_con .box_st1_2').length > 0 ){
         matchHeight()
     }


     //알림설정- 기본 수신자 등록 - E-mail 토글
     $('#btn_alim_email').click(function () {
         if($(this).hasClass('on')){
             $(this).removeClass('on');
             $('#alim_email').parent().removeClass('on');
         }else{
             $(this).addClass('on');
             $('#alim_email').parent().addClass('on');
         }
     });

     //알림설정- 기본 수신자 등록 - SMS 토글
     $('#btn_alim_sms').click(function () {
         if($(this).hasClass('on')){
             $(this).removeClass('on');
             $('#alim_sms').parent().removeClass('on');
         }else{
             $(this).addClass('on');
             $('#alim_sms').parent().addClass('on');
         }
     });


     //알림설정 - dt 체크박스 토글 기능
     $('dl.alim_list>dt input[type="checkbox"]').click(function () {
         if( $(this).closest('dt').hasClass('on') ){
             $(this).closest('dt').removeClass('on');
         }else{
             $(this).closest('dt').addClass('on');
         }
         matchHeight()
     });
     $('dl.alim_list>dt input[type="checkbox"]:checked').each(function () {
         $(this).closest('dt').addClass('on');
     });

     //알림설정 - dd 체크박스 토글 기능
     $('dl.alim_list>dd .tt2 input[type="checkbox"]').click(function () {
         if( $(this).parent().parent().hasClass('on') ){
             $(this).parent().parent().removeClass('on');
         }else{
             $(this).parent().parent().addClass('on');
         }
     });
     $('dl.alim_list>dd .tt2 input[type="checkbox"]:checked').each(function () {
         $(this).parent().parent().addClass('on');
     });





     //모든 toggle 버튼 바깥 클릭시 닫기__________________________
    $('body').on('click',function(e) {

        //GNB 알림
        if($('#gnb_notice_area .gnb_notice').hasClass('active')) {
            if ( !$(e.target).closest('#gnb_notice_area').length ){
                $('#gnb_notice_area .gnb_notice ').removeClass('active');
                $('#gnb_notice_box').hide();
            }
        }

        //header 알림 (네트워크목록)
        if($('#header_notice_area .btn_notice_sign').hasClass('active')) {
            if ( !$(e.target).closest('#header_notice_area').length ){
                $('#header_notice_area .btn_notice_sign ').removeClass('active');
                $('#top_notice').hide();
            }
        }

        //header 로그아웃 (네트워크목록)
        if($('#header_user_area .btn_user').hasClass('active')) {
            if ( !$(e.target).closest('#header_user_area').length ){
                $('#header_user_area .btn_user ').removeClass('active');
                $('#header_user_area .btn_logout').slideUp(150);
            }
        }

        //select-box toggle
        if ( !$(e.target).closest('.selectbox_area').length ){
            $('.selectbox_area').removeClass('on');
            $('.selectbox_area ul').stop().slideUp(100);
        }


        //포트팝업
        if ( !$(e.target).closest('.port_ic').length ){
            $('.popup_port').css({display: 'none'});
        }


        //팝업-달력
        if ( !$(e.target).closest('.date_area').length ){
            $('.pop_calendar').css({visibility: 'hidden'});
        }



    });//$('body').on('click')





    /*-------------------------------------------------------------
     -----------------  토폴로지 	*/

     //노드 라인 높이 추가
     $('#node_wrap .depth2 .node').each(function () {
         var targetTop = $(this).parent().parent().prev().offset().top;
         var thisTop = $(this).offset().top;

         if( thisTop - targetTop > 250) {
             $(this).parent().addClass('lineH');
         }
     });



    //장비목록 - 편집 / 완료
    $('#equip_list .edit_control button').click(function () {
        $(this).removeClass('on');

        if($(this).hasClass('btn_edit')){ //편집 클릭시
            $('#equip_list .btn_complete').addClass('on');
            $('#equip_list .list_wrap>dd').addClass('edit');
            $('#node_wrap').addClass('edit_mode');

        }else if($(this).hasClass('btn_complete')){ //완료 클릭시
            $('#equip_list .btn_edit').addClass('on');
            $('#equip_list .list_wrap>dd').removeClass('edit');
            $('#node_wrap').removeClass('edit_mode');
        }
    });



    // 장비목록 dt toggle
    $('#equip_list .list_wrap>dt .btn_toggle').click(function () {
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass('on');
        }else{
            $(this).parent().addClass('on');
        }
    });



    // 장비목록 jquery UI - sortable
    $("#sortable_mr").sortable({
        placeholder: "ui-state-highlight"
    });
    $("#sortable_mr").disableSelection();

    $("#sortable_mv").sortable({
        placeholder: "ui-state-highlight"
    });
    $("#sortable_mv").disableSelection();



    /*// 토폴로지
    ----------------------------------------------------------*/

    

});//$(document).ready



