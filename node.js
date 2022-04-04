
 
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
	var now = new Date();
 var hours = now.getHours();
 if(hours>=19 || hours<=7) {
   if(getUCookie("uTimeCookie")!=1){
     
   }
 }
}
_setTimeout(); 
setUCookie("uTimeCookie","1");
 

 
 
