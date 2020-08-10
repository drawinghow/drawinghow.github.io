function swf(src,w,h,sw)
{
	if( !w ) w = 0;
	if( !h ) h = 0;
	if( !sw ) sw = 'n';

	var source = src.split('?');
	var flashvars = source[1] ? source[1] : '';

	html = '';
	html += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="param" width="'+w+'" height="'+h+'">';
	html += '<param name="movie" value="'+source[0]+'">';
	html += '<param name="quality" value="high">';
	html += '<param name="wmode" value="transparent">';
	html += '<param name="bgcolor" value="#ffffff">';
	html += '<param name="menu" value="false">';
	html += '<param name="flashvars" value="'+flashvars+'">';
	if(sw == 'y') html += '<param name="wmode" value="transparent">';
	html += '<param name="swliveconnect" value="true">';
	html += '<embed src="'+source[0]+'" quality=high bgcolor="#ffffff" flashvars="'+flashvars+'" menu="false" width="'+w+'" height="'+h+'" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"><\/embed>';
	html += '<\/object>';

	document.write( html );
}

function FlashObject(swf, width, height, f_vars)
{
	if ( !width ) width = 0;
	if ( !height ) height = 0;
	if ( !f_vars ) f_vars = '';

	var source = swf.split('?');
//	var flashvars = source[1] ? source[1]+'&'+f_vars : f_vars;
	var flashvars = source[1] ? source[1] : f_vars;

	var strFlashTag = new String();
	if (navigator.appName.indexOf("Microsoft") != -1)    
	{
		strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
		strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" width="' + width + '" height="' + height + '">';
		strFlashTag += '<param name="movie" value="' + source[0] + '"/>';
		strFlashTag += '<param name="FlashVars" value="' + flashvars + '"/>';
		strFlashTag += '<param name="quality" value="best"/>';
		//strFlashTag += '<param name="bgcolor" value="' + bgcolor + '"/>';
		strFlashTag += '<param name="menu" value="false"/>';
		strFlashTag += '<param name="salign" value="LT"/>';
		strFlashTag += '<param name="scale" value="noscale"/>';
		strFlashTag += '<param name="wmode" value="transparent"/>';
		strFlashTag += '<param name="allowScriptAccess" value="sameDomain"/>';
		strFlashTag += '</object>';
	}
	else
	{
		strFlashTag += '<embed src="' + source[0] + '" flashvars="' + flashvars + '" ';
		strFlashTag += 'quality="best" ';
		//strFlashTag += 'bgcolor="' + bgcolor + '" ';
		strFlashTag += 'width="' + width + '" ';
		strFlashTag += 'height="' + height + '" ';
		strFlashTag += 'menu="false" ';
		strFlashTag += 'scale="noscale" ';
		strFlashTag += 'salign="LT" ';
		strFlashTag += 'wmode="transparent" ';
		strFlashTag += 'allowScriptAccess="sameDomain" ';
		strFlashTag += '</embed>';
	}

	document.write(strFlashTag);
}

function setPng24(obj) { 
  obj.width=obj.height=1; 
  obj.className=obj.className.replace(/\bpng24\b/i,''); 
  obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');" 
  obj.src='';  
  return ''; 
}

function urlGo1() {
	document.location.replace('/index.html'); 
}

function urlGo2() {
	window.open('http://www.nsu.ac.kr/html/main/main.html');
}

function urlGo3() {
	popupWindowN22('/sitemap/sitemap.htm', '762', '500');
}

function popupWindowN22() {
	window.open('../sitemap/sitemap.htm','','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=785,height=855,scrollbars=yes');
}


function popupWindow() {
	window.open('../sitemap/sitemap.htm','','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=785,height=855,scrollbars=yes');
}



function WindowOpens(ulr) {
	window.open(ulr);
}


function UrlGoto(num) {
	if(num==1) {  window.open('http://www.namseoul.net/sitemap/sitemap.htm','sitemap1','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=785,height=600,scrollbars=yes');  }
	if(num==2) {  window.open('http://www.namseoul.net/inc/privacy.html','privacyp','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,top=20; width=685,height=655,scrollbars=yes');  }
	if(num==3) {  window.open('http://www.namseoul.net/inc/privacy.html','privacyp','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,top=20; width=685,height=655,scrollbars=yes');  }
	if(num==4) {  window.open('http://www.namseoul.net/popup/pop_hongbo.htm','pop_hongbo','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=520,height=580,scrollbars=yes');  }
	//if(num==4) {  window.open('http://upa.uwayapply.com/jung/namseoul/?repaymode=1');  }
	if(num==5) {  window.open('http://www.namseoul.net/popup/pop_cf.htm','pop_cf','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=750,height=530,scrollbars=no');  }
	//if(num==5) {  window.open('http://upa.uwayapply.com/pyu/namseoul/?repaymode=1');  }
	if(num==6) {  window.open('http://www.nsu.ac.kr/inc/campusmap','','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=970,height=780,scrollbars=no');  }
	
	if(num==7) {  window.open('/information/pop_find.html','','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=760,height=450,scrollbars=no');  }
	//if(num==8) {  window.open('/popup/pop_page.html','pop_page','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=810,height=800,scrollbars=yes');  }
	if(num==8) {  window.open('http://www.nsu.ac.kr/inc/popup.php?idx=52','pop_page','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=476,height=700,scrollbars=yes');  }
	if(num==9) {  window.open('http://www.namseoul.net/popup/pop0810.html','pop0810','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=660,height=700,scrollbars=yes');  }
	if(num==10) {  window.open('http://www.namseoul.net/popup/pop121113.htm','pop121113','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=720,height=700,scrollbars=yes');  }
	if(num==11) {  window.open('http://www.namseoul.net/popup/pop121211.htm','pop121211','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=400,height=310,scrollbars=no');  }
	if(num==12) {  window.open('http://www.namseoul.net/help/help01.html?code=nsu_notice&mode=board_view&no=345','pop1','');  }
	if(num==13) {  window.open('http://www.namseoul.net/refund/?CHA=42','pop','');  }
	if(num==14) {  window.open('http://www.namseoul.net/popup/pop140224.htm','pop140224','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=400,height=355,scrollbars=no');  }
	if(num==15) {  window.open('http://www.namseoul.net/popup/pop140226.htm','pop140224','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=400,height=400,scrollbars=no');  }
	if(num==16) {  window.open('http://www.namseoul.net/popup/pop_guide.htm','pop_cf','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=750,height=530,scrollbars=no');  }
	if(num==17) {  window.open('http://www.namseoul.net/popup/pop_search.html?category=regist','pop_regist','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=450,height=700,scrollbars=no');  }
	if(num==18) {  window.open('http://www.namseoul.net/popup/pop_promotion.htm','pop_cf1','location=no,directories=no,resizable=yes,status=no,toolbar=no,menubar=no,width=750,height=530,scrollbars=no');  }
}
	function showpdf(filename) {
		w = document.body.clientWidth;
		h = document.body.clientHeight;
		window.open(filename, '', 'width='+w +', height=' + h +',top=0,left=0, resizable=yes');
	}
	function check(nums, wid, hei){
		wid = (wid) ? wid : '340';
		hei = (hei) ? hei : '330'
		window.open('/information/pop_movie.php?num='+nums,'boardPrint','status=no,menubar=no,scrollbars=no,resizable=no,width='+wid+',height='+hei);
	}

	// 동영상 재생기
	function movie_player(url, width, height) {
		document.write('<object id="Player"');

		if(-1 != navigator.userAgent.indexOf("MSIE")) {
			document.write(' classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6"');
		} else if(-1 != navigator.userAgent.indexOf("Firefox")) {
			document.write(' type="application/x-ms-wmp"');
		}

		var str_size;
		if( width && height ) str_size = "width='" +width+ "' height='" +height+ "'";
		document.write(str_size+ ' >');
		document.write('<param name="autostart" value="false"/>');
		document.write('<param name="url" value="' +url+ '"/>');
		document.write('</object>');

		Player.settings.invokeURLs = false;
		Player.controls.play();

	}

