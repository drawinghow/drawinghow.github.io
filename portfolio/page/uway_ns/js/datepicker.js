$(document).ready(function() {
	$(".datepicker").datepicker({ 
		inline: true
		, dateFormat: "yy-mm-dd"	// ��¥ ����
		, prevText: 'prev' 
		, nextText: 'next' 
		, showButtonPanel: true		// ��ư �г� ���
		, changeMonth: true			// �� ���ùڽ� ���
		, changeYear: true			// �� ���ùڽ� ��� 
		, showOtherMonths: true		// ����/���� �� �ϼ� ���̱�
		, selectOtherMonths: true	// ����/���� �� �� �����ϱ�
		, showOn: "button" 
		, buttonImage: "/admission/_cms/images/icon/icon_calendar.gif"
		, buttonImageOnly: true
		, minDate: '-30y' 
		, closeText: '�ݱ�' 
		, currentText: '����' 
		, showMonthAfterYear: true	// ��� ���� ��ġ �ٲٱ�
		, monthNames : ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��']
		, monthNamesShort : ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��']
		, dayNames : ['��', '��', 'ȭ', '��', '��', '��', '��']
		, dayNamesShort : ['��', '��', 'ȭ', '��', '��', '��', '��']
		, dayNamesMin : ['��', '��', 'ȭ', '��', '��', '��', '��']
		, showAnim: 'slideDown'		
		, onClose: function(selectedDate) { $('#fromDate').datepicker("option","minDate", selectedDate); }	// ��¥ ��ȿ�� üũ
		, onSelect: function(dateText, inst) { /* alert(dateText); */ }	// ����Ŭ���� �̺�Ʈ
	}); 

	$(".datepicker2").datepicker({ 
		inline: true
		, dateFormat: "yy-mm-dd"	// ��¥ ����
		, prevText: 'prev' 
		, nextText: 'next' 
		, showButtonPanel: true		// ��ư �г� ���
		, changeMonth: true			// �� ���ùڽ� ���
		, changeYear: true			// �� ���ùڽ� ��� 
		, showOtherMonths: true		// ����/���� �� �ϼ� ���̱�
		, selectOtherMonths: true	// ����/���� �� �� �����ϱ�
		, showOn: "button" 
		, buttonImage: "/img/common/ico_schedule.gif"
		, buttonImageOnly: true
		, minDate: '-0y' 
		, closeText: '�ݱ�' 
		, currentText: '����' 
		, showMonthAfterYear: true	// ��� ���� ��ġ �ٲٱ�
		, monthNames : ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��']
		, monthNamesShort : ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��']
		, dayNames : ['��', '��', 'ȭ', '��', '��', '��', '��']
		, dayNamesShort : ['��', '��', 'ȭ', '��', '��', '��', '��']
		, dayNamesMin : ['��', '��', 'ȭ', '��', '��', '��', '��']
		, showAnim: 'slideDown'		
		, onClose: function(selectedDate) { $('#fromDate').datepicker("option","minDate", selectedDate); }	// ��¥ ��ȿ�� üũ
		, onSelect: function(dateText, inst) { /* alert(dateText); */ }	// ����Ŭ���� �̺�Ʈ
	}); 

	$("img.ui-datepicker-trigger").attr("style","margin-left:2px; vertical-align:middle; cursor:pointer;");	// datepicker���� ����� �̹��� ��ư style����
});