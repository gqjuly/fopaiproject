//消息弹窗
document.writeln("<style>");
document.writeln("#fixed{line-height:40px;height:40px;overflow:hidden; position:fixed; left:0%; bottom:50%; overflow:hidden;opacity:0;");
document.writeln(" font-size:11px; z-index:99999;}");
document.writeln("#fixed img,#fixed a{float:left;}");
document.writeln("#fixed a{background:#282828;font-size:11px !important;color:#FFF !important;}");
document.writeln("</style>");
document.writeln("<div id=\"fixed\">");
document.writeln(" <img src=\""+"images/x1.png\" style=\"width:22px;\">");
document.writeln("<a id=\"f1\">3</a>");
document.writeln("<img src=\""+"images/x2.png\" style=\"width:11px;\">");
document.writeln("</div>");

var yuan=["湖南长沙李缘主奉请了三尊","云南昆明林缘主奉请了一尊","广东汕尾林缘主奉请了三尊","广东广州萧缘主奉请了一尊 ","广西程缘主奉请了三尊 ","北京东城刘缘主奉请了一尊 ","重庆林缘主奉请了两尊 ","湖南长沙钱缘主奉请了四尊 ","福建福州林缘主奉请了一尊 ","北京昌平朱缘主奉请了一尊 ","广东深圳李缘主奉请了三尊 ","广东广州柳缘主奉请了三尊 ","江西南昌乎缘主奉请了一尊 ","广东潮汕于缘主奉请了两尊 ","北京牛缘主奉请了两尊","河北石家庄司徒缘主奉请了一尊","吉林白山王缘主奉请了一尊","湖北武汉范缘主奉请了一尊","湖北孝感李缘主奉请了两尊","黑龙江哈尔滨汤缘主奉请了一尊","四川广安李缘主奉请了两尊","广东汕头庄缘主奉请了一尊","黑龙江牡丹江张缘主奉请了两尊","江苏南京全缘主奉请了四尊","甘肃兰州谢缘主奉请了一尊","福建南平程缘主奉请了两尊","河南郑州李缘主奉请了一尊","贵州贵阳潘缘主奉请了三尊","海南海口温缘主奉请了一尊","海南昌江赵缘主奉请了一尊"];

var y=window.innerHeight/2;

	
function fixed1(){
				var n=parseInt(Math.random()*(29-0+1)+0)
			$("#f1").html(yuan[n]);
			$("#fixed").css({"display":"block"}).animate({"bottom":"65%","opacity":"0.5"},1500).animate({"bottom":"65%","opacity":"0.9"},2000,function(){
				$(this).animate({"bottom":"80%","opacity":"0"},2000,function(){
						$(this).css({"bottom":"50%"});
					})
				})
				
}
  				
window.setInterval(fixed1,18000);