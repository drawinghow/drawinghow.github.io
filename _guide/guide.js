/*=============================================================================+
| Copyright (c) 2015. http://gima.pe.kr. All rights reserved.                  |
+------------------------------------------------------------------------------+
| Ÿ��Ʋ: JavaScript for Coding Guide                                          |
| �۾���: 2009-07-28 ~ 2015-12-06                                              |
| �ۼ���: ������ <gima@gima.pe.kr>                                             |
+-----------------------------------------------------------------------------*/

// ������ üũ (by web)
var appname = navigator.appName;
var useragent = navigator.userAgent;
var IE  = useragent.match( /MSIE/ ) ? useragent.replace( /^.+MSIE ([\d\.]+).+$/, '$1' ) * 1: false; // IE ����
var gimaLib = gimaLib || {};


$(document).ready(function(){
	// �ڵ��ҽ��� ���� ����
	var xmp = $('#layoutGuide > .guideLayer > .source > xmp');
	if( xmp.length ){
		xmp.parent().prev('.viewarea').html( function(){
			return $(this).next('.source').find('xmp').html();
		});
		//lockScrollWheel( xmp );
	}

	// �ڵ��ҽ��� ���� ���� New Version
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

	// ����Ŭ������
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



// F5 Ű�� ������ ��ü�� �ƴ� iFrame�� ���ΰ�ħ
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

		else if( url.match( /\/\/$/ ) ) // Ǯ��� ǥ��
			url = url.replace( /\/\/$/, '' );

		else if( url.match( /\/$/ ) ) // ���丮
			url = "<span style='color:deeppink'>"+ url +"</span>";

		else if( txt.substr( 0, 3 ) == '[D]' ||  txt.substr( 0, 3 ) == '[F]' )
			url = basename;

		else if( txt.substr( 0, 5 ) == '[INC]' ) // ��Ŭ���
			url = basename;

		else if( txt.substr( 0, 5 ) == '[LAY]' ) // ���̾�
			url = basename;

		else if( txt.substr( 0, 5 ) == '[AJX]' ) // ���۽�
			url = basename;

		else if( txt.substr( 0, 5 ) == '[POP]' ){ // �˾�
			var arr = url.split( /,/ );
			if( arr.length <= 4 )
				url = "<a href=\"javascript:win('"+ arr[0] +"',"+  arr[1] +","+  arr[2] +","+  arr[3] +")\">"+ basename +"</a>"; else
				url = "<a href=\"javascript:win('"+ arr[0] +"',"+  arr[1] +","+  arr[2] +","+  arr[3] +",null,'"+ arr[4] +"')\">"+ basename +"</a>";
		}
		else { // ������
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
			this.createTD( tr, _done == 1 ? "�Ϸ�": "-" ).style.textAlign = 'center';
			this.createTD( tr, _confirm == 1 ? "�Ϸ�": "-" ).style.textAlign = 'center';
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
	$(ol).append( li ); // ����� �ϳ� �߰�

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
| �ڵ��ҽ� ���� �� ����
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
		//alert( "�ƽ����� �� ������������\n\nŬ������ �������� �������� �ʽ��ϴ�." );
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
| �˾� ��������â�� ���
| �� �Լ��� â�̸��� �����ϴ� ��İ� �������� �ʴ� ���, 2���� ȣ������ �ִ�.
| â�̸��� �������� ������ ���丮�� ���ϸ��� â�̸����� �ο��ȴ�.
| scroll : ��ũ�ѹٿ���( 0:����, 1:���� )
| position : â��ġ( 0:ȭ���߾�, 1:������� )
| option : window.open()�� ����� �� �ִ� �ɼǵ�
| ex) win( 'myPage.html',300,400 ) // â�̸����� �ڵ�����
|     win( 'myPage.html','myWin',300,400,1 ) // â�̸������ϰ� ��ũ�ѹ� �ְ�
|     win( 'myPage.html',null,null,0,0,'fullscreen=1' ) // ��üȭ������
|*............................................................................*/
function win( url, width, height, scroll, position, option, extra )
{
	var winName, winOption;
	winName = url.replace( /^http:\/\/.[^\/]+\//i, '' ); // ������(http://domain.com/)�� ����
	winName = winName.replace( /[\?#].+$/, '' ); // v2.11 ����ǥ(?)�� ��(#) ���� �� ����
	winName = winName.replace( /[^a-zA-Z0-9]/g, "_" ); // v2.13 �ƽ�Ű �ڵ� �� ���ڴ� "_" ġȯ

	if( typeof(width) == 'string' ){ // â�̸��� �����Ǹ� �ƱԸ�Ʈ ���ġ
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
	try { winGima.focus(); } catch(e){ alert( "�˾����� ������ Ǯ���ּ���." ); } // v2.14
}



/*-------------------------------------------------- by gima/ v1.05/ c2009-07-27
| title='' �ɼ��� ���� ��ҿ� Ŀ���� ��� ���̾� �������� ��ü
| ex) <img src='sample.jpg' title='this is message' onmouseover='hint(this)'>
|.............................................................................*/
function hint( obj, width )
{
	var oHint = document.getElementById( 'scnHint' );
	var obj = typeof(obj) == 'undefined' ? window.event.srcElement: obj;

	if( oHint == null ){ // v1.03: oHint Object�� ������ ����
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
| ��ũ�ѿ������� ���� ������ ���� ��ũ���� �ȵǰ� ��
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
| ��Ű ����
| expire = 1�ϴ���, 0 : ���������� �� �ִ� ���ȸ�
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
| �̹����� ũ�⸦ ������ ����� �°� ����
| kind : 0 = contain, 1 = cover
| ex) <img src='gima.jpg' onload='thumbnail(this,140,100)' alt='' />
| tip) �����̴� GIF�� �� �÷��Ӹ��� onload�� Ž
| tip) <img>�� width, height �� 1���� �����ϸ� �������� ������ �°� �ڵ�������
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
| �� ó���� ���� ���� �Լ�
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
