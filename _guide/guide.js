/*=============================================================================+
| Copyright (c) 2015. http://gima.pe.kr. All rights reserved.                  |
+------------------------------------------------------------------------------+
| 타이틀: JavaScript for Coding Guide                                          |
| 작업일: 2009-07-28 ~ 2015-12-06                                              |
| 작성자: 이정세 <gima@gima.pe.kr>                                             |
+-----------------------------------------------------------------------------*/

// 브라우져 체크 (by web)
var appname = navigator.appName;
var useragent = navigator.userAgent;
var IE  = useragent.match( /MSIE/ ) ? useragent.replace( /^.+MSIE ([\d\.]+).+$/, '$1' ) * 1: false; // IE 버전
var gimaLib = gimaLib || {};


$(document).ready(function(){
	// 코딩소스를 뷰어로 복사
	var xmp = $('#layoutGuide > .guideLayer > .source > xmp');
	if( xmp.length ){
		xmp.parent().prev('.viewarea').html( function(){
			return $(this).next('.source').find('xmp').html();
		});
		//lockScrollWheel( xmp );
	}

	// 코딩소스를 뷰어로 복사 New Version
	var coding = $('#layoutGuide > ._guidebox > .coding');
	if( coding.length ){
		coding.each( function(){
			var code_xmp = $(this).find('xmp').text();
			$(this).next('.viewer').html( code_xmp );
			$(this).find('xmp').hide();
			_codehighlight( $(this), code_xmp );
			//lockScrollWheel( $(this).find('xmp') );
		});
	}

	// 제로클립보드
	if( !window.clipboardData ){
		var copying = $('#layoutGuide > ._guidebox > dl dd');
		if( copying.length ){
			copying.each( function(){
				if( $(this).attr('onclick') == "_copy(this)" ){
					var tmp = $(this).parent().parent().find(".coding xmp");
					var clip = new ZeroClipboard.Client();
					clip.setText( tmp.html() );
					clip.glue( $(this)[0], $(this)[0] );
				}
			});
		}
	}

	var backcolor = $('#layoutGuide > ._guidebox > .title dd.backcolor');
	if( backcolor.length ){
		backcolor.hover(
			function(){ $(this).parent().nextAll('.viewer').css('background','#edc'); },
			function(){ $(this).parent().nextAll('.viewer').css('background','none'); }
		);
	}
} );



// F5 키를 누르면 전체가 아닌 iFrame만 새로고침
document.onkeydown = function( e ){
	if( window.event.keyCode == 116 ){ // F5
		if( typeof(top.frameReload) == 'function' ){
			window.event.returnValue = false;
			top.frameReload();
		}
	}
}



var _makeCodingTable = {
	add: function( depth, _done, _confirm, txt, pid, url ){
		var tr = this.createTR( this.baseElement );
		var basename = this.getBasename( url );
		var respons = false;
		tr.setAttribute( 'depth', depth );

		if( !_done )
			tr.className = 'off';

		if( _done != 2 && !url.match( /\/$/ ) && url != "" ){
			pageinfo.total++;
			if( _done ) pageinfo.clear++;
			if( _confirm ) pageinfo.check++;
		}

		for( var i = 1; i < depth; i++ )
			this.createTD( tr, "&nbsp;" ).className = "tree3";

		if( url == '' )
			url = '';

		else if( url.match( /\/\/$/ ) ) // 풀경로 표시
			url = url.replace( /\/\/$/, '' );

		else if( url.match( /\/$/ ) ) // 디렉토리
			url = "<span style='color:deeppink'>"+ url +"</span>";

		else if( txt.substr( 0, 3 ) == '[D]' ||  txt.substr( 0, 3 ) == '[F]' )
			url = basename;

		else if( txt.substr( 0, 5 ) == '[INC]' ) // 인클루드
			url = basename;

		else if( txt.substr( 0, 5 ) == '[LAY]' ) // 레이어
			url = basename;

		else if( txt.substr( 0, 5 ) == '[AJX]' ) // 아작스
			url = basename;

		else if( txt.substr( 0, 5 ) == '[POP]' ){ // 팝업
			var arr = url.split( /,/ );
			if( arr.length <= 4 )
				url = "<a href=\"javascript:win('"+ arr[0] +"',"+  arr[1] +","+  arr[2] +","+  arr[3] +")\">"+ basename +"</a>"; else
				url = "<a href=\"javascript:win('"+ arr[0] +"',"+  arr[1] +","+  arr[2] +","+  arr[3] +",null,'"+ arr[4] +"')\">"+ basename +"</a>";
		}
		else { // 페이지
			url = "<a href=\""+ url +"\" target='_blank'>"+ basename +" </a>";
			respons = true;
		}

		txt = txt.replace( /\[D\]/i, "<i class='_icon1'>D</i>" );
		txt = txt.replace( /\[F\]/i, "<i class='_icon2'>F</i>" );
		txt = txt.replace( /\[INC\]/i, "<i class='_icon2'>INCLUDE</i>" );
		txt = txt.replace( /\[POP\]/i, "<i class='_icon1'>POPUP</i>" );
		txt = txt.replace( /\[LAY\]/i, "<i class='_icon2'>LAYER</i>" );
		txt = txt.replace( /\[AJX\]/i, "<i class='_icon2'>AJAX</i>" );
		txt = txt.replace( /\[FRM\]/i, "<i class='_icon1'>IFRAME</i>" );

		this.createTD( tr, txt ).setAttribute( 'colspan', 7 - depth );
		this.createTD( tr, url, "font-family:Verdana,Dotum" ).className = "url";
		if( _done != 2 ){
			//this.createTD( tr, respons ? "<a href='' class='chkres'>RES</a>": "&nbsp" ).style.textAlign = 'center';;
			this.createTD( tr, _done == 1 ? "완료": "-" ).style.textAlign = 'center';
			this.createTD( tr, _confirm == 1 ? "완료": "-" ).style.textAlign = 'center';
		}
	},

	createTR: function( obj ){
		var tr = document.createElement('tr');
		obj.appendChild( tr );
		return tr;
	},

	createTD: function( obj, txt, style ){
		var td = document.createElement('td');
		obj.appendChild( td );
		td.innerHTML = txt;
		if( style != null )
			td.style.cssText = style;
		return td;
	},

	getBasename: function( url ){
		var basename = url;
		var arr = url.split( /\// );
		if( arr.length > 0 ){
			var tmp = arr[ arr.length - 1];
			var arr1 = tmp.split( /,/ );
			basename = arr1.length ? arr1[0]: tmp;
		}
		return basename;
	}
};




jQuery.fn.extend({
	_tableTree: function(){
		var oTRs = this.find('tr');

		for( var j = 0; j < oTRs.length; j++ ){
			var nextDepth = 0;
			var curDepth = get_depth( oTRs[j] );
			var oTDs = oTRs[j].getElementsByTagName('td');

			for( var k = 1; k <= curDepth; k++ ){
				var flag = 0;
				var te = j;

				if( k == curDepth ){
					do {
						nextDepth = get_depth( oTRs[++te] );
						if( nextDepth <  k ) flag = 3;
						if( nextDepth == k ) flag = 2;
					}	while( nextDepth > k );
				}
				else {
					do {
						nextDepth = get_depth( oTRs[++te] );
						if( nextDepth == k ) flag = 1;
					}	while( nextDepth > k );
				}

				if( k == 0 ){
					do	{
						nextDepth = get_depth( oTRs[++te] );
						if( te > oTRs.length ){
							if( flag == 2 ) flag = 3;
							if( flag == 1 ) flag = 0;
						}
					}	while( nextDepth );
				}

				oTDs[k - 1].className = "tree"+ flag;
			}
		}

		function get_depth( oTR ){
			if( oTR == null ) return 0;
			var depth = oTR.getAttribute('depth');
			return depth - 1;
		}
	}
});



function _codehighlight( obj, txt )
{
	var ol = document.createElement('ol');

	txt = txt.replace( /&(nbsp|lt|gt|amp);/g, "&amp;$1;" );
	txt = txt.replace( /</g, "&lt;" );
	txt = txt.replace( />/g, "&gt;" );
	txt = txt.split( /[\r\n]/ );

	var li = document.createElement('li');
	li.value = 0;
	li.innerHTML = '&nbsp;';
	$(ol).append( li ); // 빈라인 하나 추가

	for( var i = 0; i < txt.length; i++ ){
		var li = document.createElement('li');
		var t = txt[i];

		if( i == 0 && t == '' )
			continue;

		t = t.replace( /^\t{2}/g, "" );
		t = t.replace( /\t/g, "\ttab\t" );
		t = t.replace( /&lt;br&gt;/, "&lt;br /&gt;" );
		t = t.replace( /(&lt;\/*(abbr|address|a|bdo|blockquote|br|button|caption|cite|code|colgroup|col|dd|del|dfn|div|dl|dt|em|form|h1|h2|h3|h4|h5|h6|img|input|ins|i|kbd|label|li|ol|option|optgroup|pre|p|q|samp|select|span|strong|style|sub|sup|table|tbody|td|textarea|tfoot|thead|th|tr|ul|var))/g, "\tword1\t$1\tword0\t" );
		t = t.replace( /(\/*&gt;|=)/g, "\tword1\t$1\tword0\t" );
		t = t.replace( / (id|class|style|span|colspan|alt|rowspan|type|value|href|src|name|label|onchange|onclick|onmouseover)/g, " \tword2\t$1\tword0\t" );
		t = t.replace( /(\'.*?\')/g, "\tword3\t$1\tword0\t" );
		t = t.replace( /(\".*?\")/g, "\tword3\t$1\tword0\t" );
		t = t.replace( /\ttab\t/g, "<span style='padding-right:2.5em'></span>" );
		t = t.replace( /\tword0\t/g, "</span>" );
		t = t.replace( /\tword1\t/g, "<span style='color:#1E90FF'>" );
		t = t.replace( /\tword2\t/g, "<span style='color:#FF7F50'>" );
		t = t.replace( /\tword3\t/g, "<span style='color:#6A5ACD'>" );

		li.innerHTML = t + '\n';
		$(ol).append( li );
	}

	obj.append( ol );
	//lockScrollWheel( $(ol) );
}



/*------------------------------------------------------------------------------
| 코딩소스 보기 및 복사
|.............................................................................*/
function view( obj ){
	var oMenu = obj.parentNode.parentNode;
	var oSource = oMenu.getElementsByTagName("xmp")[0];
	oSource.style.display = oSource.style.display != "block" ? "block": "none";
}

function copy( obj ){
	if( clipboardData ){
		var tmp = $(obj).parent().parent().find(".source xmp");
		if( tmp.length ) window.clipboardData.setData( 'Text', tmp.html() );
	} else {
		//alert( "아쉽지만 이 브라우저에서는\n\n클립보드 복사기능이 지원되지 않습니다." );
	}
}

function _view( obj ){
	$(obj).parent().parent().find('.coding')
		.slideToggle( 300, function(){
			var base = $(this).parents('._guidebox');
			var best = base.offset().top - $(window).height() + base.height() + 30;
			var temp = $("html").scrollTop() > 0 ? "html": "body";
			if( $(temp).scrollTop() < best )
				$(temp).stop(true,false).animate({ scrollTop:best }, 300 );
		} );
}

function _copy( obj ){
	if( window.clipboardData ){
		var tmp = $(obj).parent().parent().find(".coding xmp");
		if( tmp.length ) window.clipboardData.setData( 'Text', tmp.html() );
	}
}



/*----------------------------------------------------- by gima/ IE,FF,SF/ v2.14
| 팝업 윈도우즈창을 띄움
| 이 함수는 창이름을 지정하는 방식과 지정하지 않는 방식, 2가지 호출방식이 있다.
| 창이름을 지정하지 않으면 디렉토리와 파일명이 창이름으로 부여된다.
| scroll : 스크롤바여부( 0:없음, 1:있음 )
| position : 창위치( 0:화면중앙, 1:좌측상단 )
| option : window.open()에 사용할 수 있는 옵션들
| ex) win( 'myPage.html',300,400 ) // 창이름으로 자동으로
|     win( 'myPage.html','myWin',300,400,1 ) // 창이름지정하고 스크롤바 있게
|     win( 'myPage.html',null,null,0,0,'fullscreen=1' ) // 전체화면으로
|*............................................................................*/
function win( url, width, height, scroll, position, option, extra )
{
	var winName, winOption;
	winName = url.replace( /^http:\/\/.[^\/]+\//i, '' ); // 도메인(http://domain.com/)은 삭제
	winName = winName.replace( /[\?#].+$/, '' ); // v2.11 물음표(?)나 샵(#) 뒤의 값 삭제
	winName = winName.replace( /[^a-zA-Z0-9]/g, "_" ); // v2.13 아스키 코드 외 문자는 "_" 치환

	if( typeof(width) == 'string' ){ // 창이름이 지정되면 아규먼트 재배치
		winName = width; width = height;
		height = scroll; scroll = position;
		position = option; option = extra;
	}

	winOption  = " top="+ (position ? 0 : (screen.availHeight * .9 - height) / 2 );
	winOption += ",left="+ (position ? 0 : (screen.availWidth - width) / 2 );
	winOption += ',scrollbars='+ (scroll ? 1: 0);
	winOption += width ? ",width="+ width: null;
	winOption += height ? ",height="+ height: null;
	winOption += option ? ","+ option: null;
	winGima = window.open( url, winName, winOption, false );
	try { winGima.focus(); } catch(e){ alert( "팝업차단 설정을 풀어주세요." ); } // v2.14
}



/*-------------------------------------------------- by gima/ v1.05/ c2009-07-27
| title='' 옵션이 붙은 요소에 커서를 대면 레이어 툴팁으로 교체
| ex) <img src='sample.jpg' title='this is message' onmouseover='hint(this)'>
|.............................................................................*/
function hint( obj, width )
{
	var oHint = document.getElementById( 'scnHint' );
	var obj = typeof(obj) == 'undefined' ? window.event.srcElement: obj;

	if( oHint == null ){ // v1.03: oHint Object가 없으면 생성
		oHint = document.createElement( 'div' );
		oHint.id = 'scnHint';
		document.body.appendChild( oHint );
	}

	if( !obj.setPosition ){
		obj.setPosition = function(e){
			var tmpX = e.pageX + 10;
			var tmpY = e.pageY + 10;
			$(oHint).css({ left:tmpX, top:tmpY });
		}
	}

	if( !obj.onmousemove ){
		obj.onmousemove = function(e){
			try { this.setPosition(e); } catch(e){}
		}
	}

	if( !obj.onmouseout ){
		obj.onmouseout = function(e){
			if( this.backupTitle )
				this.title = this.backupTitle;
			oHint.style.display = 'none';
		}
	}

	if( obj.title ){
		obj.backupTitle = obj.title;
		obj.title = '';
		obj.setPosition(event);
		obj.style.cursor = 'default';
		oHint.innerHTML = obj.backupTitle.replace( /;/, '<br />' );
		width ? oHint.style.width = width +'px': '';
		oHint.style.display = 'block';
	}
}



/*-------------------------------------------------- by gima/ c2013-08-12/ v1.00
| 스크롤영역에서 휠을 돌리면 본문 스크롤은 안되게 함
|.............................................................................*/
function lockScrollWheel( objname ){
	$(objname ).bind( 'mousewheel DOMMouseScroll', function(e){
		var scrollTo = null;

		if( e.type == 'mousewheel' )
			scrollTo = (e.originalEvent.wheelDelta * -1);

		else if (e.type == 'DOMMouseScroll')
			scrollTo = 40 * e.originalEvent.detail;

		if( scrollTo ){
			e.preventDefault();
			$(this).scrollTop( scrollTo + $(this).scrollTop() );
		}
	});
}



/*---------------------------------------------------------------------- by gima
| 쿠키 관련
| expire = 1일단위, 0 : 웹브라우저가 떠 있는 동안만
|.............................................................................*/
function setCookie( name, value, expire ){
	var tmpExpire = '';
	var dateobj = new Date();
	if( expire ){
		dateobj.setDate( dateobj.getDate() + expire );
		tmpExpire = '; expires='+ dateobj.toGMTString();
	}

	document.cookie = name + "=" + escape(value) + tmpExpire + ";";
}

function getCookie( name ){
	var begin, end;
	var cname = name + "=";
	var cookie = document.cookie;
	if( cookie.length > 0 ){
		if( ( begin = cookie.indexOf(cname) ) != -1 ){
			begin += cname.length;
			end = cookie.indexOf( ";", begin );
			if( end == -1 ) end = cookie.length;
			return unescape( cookie.substring( begin, end ) );
		}
	}
}



/*-------------------------------------------------- by gima/ c2009-07-27/ v1.31
| 이미지의 크기를 섬네일 사이즈에 맞게 조절
| kind : 0 = contain, 1 = cover
| ex) <img src='gima.jpg' onload='thumbnail(this,140,100)' alt='' />
| tip) 움직이는 GIF는 매 플레임마다 onload를 탐
| tip) <img>는 width, height 중 1개만 설정하면 나머지는 비율에 맞게 자동설정됨
|*............................................................................*/
function thumbnail( img, twidth, theight, kind )
{
	var width  = img.orgWidth = img.orgWidth || img.width; // mod v1.31
	var height = img.orgHeight = img.orgHeight || img.height; // mod v1.31
	var rating = width / twidth > height / theight ? 1: 0;

	if( kind ) // add v1.30
		rating = 1 - rating;

	if( rating ){
		img.width  = Math.min( width, twidth );
		img.height = Math.floor( height * img.width / width );
	}
	else {
		img.height = Math.min( height, theight );
		img.width  = Math.floor( width * img.height / height );
	}

	img.thumbWidth = img.width;
	img.thumbHeight = img.height;
	img.style.marginTop = (theight - img.offsetHeight) / 2 +'px';
	img.style.marginLeft = (twidth - img.offsetWidth) / 2 +'px';
	img.style.marginRight = (twidth - img.offsetWidth - parseInt( img.style.marginLeft, 10 )) +'px'; // add v1.20
	img.style.marginBottom = (theight - img.offsetHeight - parseInt( img.style.marginTop, 10 )) +'px'; // add v1.20
	img.onload = null; // clear for image onload event
}



/*--------------------------------------------------- by gima/ 2011-07-21/ v1.77
| 탭 처리를 위한 범용 함수
| <ul onmouseover="gimaLib.tab(this)">
| <ul onmouseover="gimaLib.tab(this,'.tabCont')">
| <ul onmouseover="gimaLib.tab(this,'#tabCont')">
|.............................................................................*/
gimaLib.tab = function( obj, tabCont )
{
	var $item = $(obj).find('> li');

	obj.onmouseover = null;
	$item.click( function(){
		var cur = $(this).index();
		var atag = $(this).find('a')[0];

		$item.removeClass('on').eq( cur ).addClass('on');

		if( tabCont )
			if( tabCont.substr( 0, 1 ) == '.' )
				$(tabCont).hide().eq( cur ).show(); else
				$(tabCont).find('> *').hide().eq( cur ).show();

		if( atag.href.match( /#$/ ) && atag.onclick == null )
			return false;
	});
};
