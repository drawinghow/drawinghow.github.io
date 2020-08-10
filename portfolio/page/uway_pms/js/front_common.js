// 작성자 팝업
function jaksungja(){
	$(".jaksungja .jak").click(function(){
		$(this).next().toggle();
		return false;
	});
	$(".jaksungja .close").click(function(){
		$(this).closest(".box").hide();
		return false;
	});
}





//new,modified 아이콘 표시
function iconView(){
	$('.tit .new img').hover(function(){
		$(this).attr('src','./img/new.png');
	},function(){
		$(this).attr('src','./img/n.png');
	})
	$('.tit .modified img').hover(function(){
		$(this).attr('src','./img/modified.png');
	},function(){
		$(this).attr('src','./img/m.png');
	})
}




// 넓게 보통 좁게
function contentSpace(){
	var body = $("body");
	var li = $("#s_menu .box .show ul li");
	var nClass;
	var pClass;

	li.click(function(){
		var t = $(this);
		var c = t.get(0).className;

		nClass = c;
		if(pClass == nClass){return false;}
		pClass = nClass;
	
		
		body.removeClass();
		if(nClass == "big"){
			body.addClass("big");
		}else if(nClass == "small"){
			body.addClass("small");
		}
		return false;
	});
}




//캘린더1
$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	showMonthAfterYear: true,
	//yearSuffix: '년'
    });
$( function() {
	$( "#datepicker" ).datepicker({
		showOn: "button",
		buttonImage: "./img/calendar.png",
		buttonImageOnly: true,
		buttonText: "Select date"
	});
  } );

/* 캘린더2 ( A ~ B ) */
$( function() {
	var dateFormat = "mm/dd/yy",
	from = $( "#from" )
	.datepicker({
		showOn: "button",
		buttonImage: "./img/calendar.png",
		buttonImageOnly: true,
		buttonText: "Select date"
		//defaultDate: "+1w",
		// changeMonth: true,
		//numberOfMonths: 3
	})
	.on( "change", function() {
		to.datepicker( "option", "minDate", getDate( this ) );
	}),
	to = $( "#to" ).datepicker({
		showOn: "button",
		buttonImage: "./img/calendar.png",
		buttonImageOnly: true,
		buttonText: "Select date"
		//defaultDate: "+1w",
		//changeMonth: true,
		//numberOfMonths: 3
	})
	.on( "change", function() {
		from.datepicker( "option", "maxDate", getDate( this ) );
	});
	 
	function getDate( element ) {
			var date;
		try {
		        date = $.datepicker.parseDate( dateFormat, element.value );
		} catch( error ) {
			date = null;
		}
 
		return date;
	}
} );




// 개인정보수정  레이어팝업
function geinjungbo(){
	$("#header .modify").click(function(){
		$("body").append("<div class='darkBg'></div>");
		$(".geinLayer").show();
		return false;
	});
	$(".geinLayer .close").click(function(){
		$(".darkBg").remove();
		$(".geinLayer").hide();
		return false;
	});
}




//웹관리자 등록 레이어팝업
function register(){
	$(".register_btn").click(function(){
		$("body").append("<div class='darkBg'></div>");
		$(".registerLayer").show();
		return false;
	});
	$(".registerLayer .close").click(function(){
		$(".darkBg").remove();
		$(".registerLayer").hide();
		return false;
	});
}




//프로젝트 등록 레이어팝업
function project(){
	$(".project_btn").click(function(){
		$("body").append("<div class='darkBg'></div>");
		$(".projectLayer").show();
		return false;
	});
	$(".projectLayer .close").click(function(){
		$(".darkBg").remove();
		$(".projectLayer").hide();
		return false;
	});
}




//담당자 관리 레이어팝업
function charge(){
	$(".btn_chargePop").click(function(){
		$("body").append("<div class='darkBg'></div>");
		$(".chargeLayer").show();
		return false;
	});
	$(".chargeLayer .close").click(function(){
		$(".darkBg").remove();
		$(".chargeLayer").hide();
		return false;
	});
}










$(function(){
	jaksungja();
	geinjungbo();
	contentSpace();
	register();
	project();
	iconView();
	charge();



});