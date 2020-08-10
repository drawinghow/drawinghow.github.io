$(document).ready(function() {
	$(".datepicker").datepicker({ 
		inline: true
		, dateFormat: "yy-mm-dd"	// 날짜 포맷
		, prevText: 'prev' 
		, nextText: 'next' 
		, showButtonPanel: true		// 버튼 패널 사용
		, changeMonth: true			// 월 선택박스 사용
		, changeYear: true			// 년 선택박스 사용 
		, showOtherMonths: true		// 이전/다음 달 일수 보이기
		, selectOtherMonths: true	// 이전/다음 달 일 선택하기
		, showOn: "button" 
		, buttonImage: "/admission/_cms/images/icon/icon_calendar.gif"
		, buttonImageOnly: true
		, minDate: '-30y' 
		, closeText: '닫기' 
		, currentText: '오늘' 
		, showMonthAfterYear: true	// 년과 달의 위치 바꾸기
		, monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
		, monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
		, dayNames : ['일', '월', '화', '수', '목', '금', '토']
		, dayNamesShort : ['일', '월', '화', '수', '목', '금', '토']
		, dayNamesMin : ['일', '월', '화', '수', '목', '금', '토']
		, showAnim: 'slideDown'		
		, onClose: function(selectedDate) { $('#fromDate').datepicker("option","minDate", selectedDate); }	// 날짜 유효성 체크
		, onSelect: function(dateText, inst) { /* alert(dateText); */ }	// 일자클릭시 이벤트
	}); 

	$(".datepicker2").datepicker({ 
		inline: true
		, dateFormat: "yy-mm-dd"	// 날짜 포맷
		, prevText: 'prev' 
		, nextText: 'next' 
		, showButtonPanel: true		// 버튼 패널 사용
		, changeMonth: true			// 월 선택박스 사용
		, changeYear: true			// 년 선택박스 사용 
		, showOtherMonths: true		// 이전/다음 달 일수 보이기
		, selectOtherMonths: true	// 이전/다음 달 일 선택하기
		, showOn: "button" 
		, buttonImage: "/img/common/ico_schedule.gif"
		, buttonImageOnly: true
		, minDate: '-0y' 
		, closeText: '닫기' 
		, currentText: '오늘' 
		, showMonthAfterYear: true	// 년과 달의 위치 바꾸기
		, monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
		, monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
		, dayNames : ['일', '월', '화', '수', '목', '금', '토']
		, dayNamesShort : ['일', '월', '화', '수', '목', '금', '토']
		, dayNamesMin : ['일', '월', '화', '수', '목', '금', '토']
		, showAnim: 'slideDown'		
		, onClose: function(selectedDate) { $('#fromDate').datepicker("option","minDate", selectedDate); }	// 날짜 유효성 체크
		, onSelect: function(dateText, inst) { /* alert(dateText); */ }	// 일자클릭시 이벤트
	}); 

	$("img.ui-datepicker-trigger").attr("style","margin-left:2px; vertical-align:middle; cursor:pointer;");	// datepicker에서 사용한 이미지 버튼 style적용
});