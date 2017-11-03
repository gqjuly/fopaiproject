var adUrl = window.location.href;
console.log('adUrl='+adUrl);
function getParam(param){ 
	var request = {
		QueryString : function(val) { 
			var uri = window.location.search; 
			var re = new RegExp("" +val+ "=([^&?]*)", "ig"); 
			return ((uri.match(re))?(decodeURI(uri.match(re)[0].substr(val.length+1))):''); 
		} 
	} 
	return request.QueryString(param); 
}
var adId=getParam("cid"); 
console.log('adId='+adId);
//手机m没有验证码
$(function () {
    $("#submit").click(function () {
        if (verifyFormData()){            
            var u = navigator.userAgent;
            var wSys = "";
            if (u.indexOf('Android') > 0) {//安卓手机
                wSys = "安卓手机";
            }
            if (u.indexOf('Mac') > 0) {//苹果电脑
                if (u.indexOf('iPhone') > 0)//苹果手机 
                {
                    wSys = "苹果手机";
                }
                else {
                    wSys = "苹果电脑";
                }
            }
            if (u.indexOf('Windows Phone') > 0) {//winphone手机
                wSys = "winphone手机";
            }
            if (u.indexOf('Windows NT') > 0) {//Windows电脑pc
                wSys = "Windows电脑";
            }
			
            $('#fromurl').val(adUrl);
            var formData = $("#form").serialize();
            $.ajax({
                async: false,
                url: "http://120.76.72.90:8999/crm/gzfz/Order.do?"+adId+"&system=" + wSys,
            	dataType: "jsonp",
                jsonp:'callback',
                jsonpCallback:"handleOrder",
                data: formData,
                contentType: "application/jsonp; charset=utf-8",
                success: function (data) {
                    if (data.result == "true") {
                    	window.parent.location.href='success.html?'+formData;
                    }
                    else {
                    	if(data.msg && data.msg!='') {
                    		alert(data.msg);
                    	} else {
                    		alert('对不起，您添加的订单失败，请重新添加！');
                    	}
                        $('#submit').attr("disabled", false);
                        $('#submit').val("提交");
                    }
                },
                error: function () { alert('连接服务器失败') }
            })
            return false;
        }
    })
    function verifyFormData()
    {

        if ($("#name").val().trim() == "") {
            alert('请填写收货人姓名！');
            $("#name").focus();
            return false;
        }
        if (!$("#name").val().match(/^[\u4e00-\u9fa5]{2,6}\s*$/)) {
            alert('姓名格式不正确，请重新填写！');
            $("#name").focus();
            return false;
        }
        if ($("#mobile").val().trim() == "") {
            alert('请填写手机号码！');
            $("#mobile").focus();
            return false;
        }
        if (!$("#mobile").val().match(/^0*(13|15|17|18)\d{9}$/)) {
            alert('手机号码格式不正确，请重新填写！');
            $("#mobile").focus();
            return false;
        }
        var sx = $("input:[name='sx']:checked");
        if (sx.val()==null) {
            alert('请选择生肖及本命佛！');
            return false;
        }
        var product = $("input:[name='product']:checked");
    	if (product.val()==null) {
            alert('请选择圣品！');
            return false;
        }
		if($('#province').val().trim() == "" || $('#province').val().trim() == "所属省份")
	    {
			alert('请选择所在省份！');
			$("#province").focus();
			return false;
	    }
		if($('#city').val().trim() == "" || $('#city').val().trim() == "所属地级市")
	    {
			alert('请选择所在城市！');
			$("#city").focus();
			return false;
	    }
		if($('#area').val().trim() == "" || $('#area').val().trim() == "所属市、县级市")
	    {
			alert('请选择所在区县！');
			$("#area").focus();
			return false;
	    }
        if ($("#address").val().trim() == "") {
            alert('请输入详细地址！');
            $("#address").focus();
            return false;
        }
        if ($("#address").val().length > 50) {
            alert('输入的详细地址长度过长！');
            $("#address").focus();
            return false;
        }
        if ($("#msg").val() && $("#msg").val().length > 300) {
            alert('输入的留言长度过长！');
            $("#msg").focus();
            return false;
        }
        
        return true;
    }
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    } 
})


function setPrice(price) {
	document.getElementById('price').value=price;
}

function selectnum(num) {
	var price = document.getElementById('price');
	if(num==1) {
		price.value=199;
	}
}