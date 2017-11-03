function mone(thid, che, totalMoney) {

    var mon = document.getElementById("mon");

    var bazhe1 = document.getElementById("bazhe1");

    var bazhe2 = document.getElementById("bazhe2");

    var taoshu = document.getElementById("taoshu");

    //var hdmon = document.getElementById("hdmon");
    if (che == 0) {

        mon.innerHTML = 0;

        //hdmon.value = 0;
        bazhe1.style.display = "none";

        bazhe2.style.display = "none";

        taoshu.style.display = "none"

    } else if (che == 1) {

        mon.innerHTML = totalMoney;

        //hdmon.value = totalMoney;
        bazhe1.style.display = "none";

        bazhe2.style.display = "none";

        taoshu.style.display = "none"

    } else {

        totalMoney = Number(totalMoney);

        mon.innerHTML = totalMoney;

        //taoshu.innerHTML = "һ";
        //hdmon.value = totalMoney + "-1";
        bazhe1.style.display = "inline";

        bazhe2.style.display = "inline";

        taoshu.style.display = "inline"

    }

}

function allcp(thid) {

    vals = thid.value.split("|");

    var che = 0;

    var totalMoney = 0;

    var prdAttr = 0;

    jncheck = 0;
    //alert($("input:checkbox").prop("name").length);
    //alert($("input[name='checkb']").length);
    for (var i = 0; i < $(".ck").length; i++) {

        if ($(".ck")[i].checked == true) {

            prdAttr = $(".ck")[i].value.split("|");

            totalMoney = Number(totalMoney) + Number(prdAttr[1]);

            che++

        }

    }
    $("#prices").val(totalMoney);

    var yxsp = document.getElementById("yxsp");

    var yxsp_li = document.createElement("li");

    var yxsp_a = document.createElement("a");

    yxsp_li.appendChild(yxsp_a);

    /*if (thid.parentNode.className=="")

    {

    thid.parentNode.className = "leb_xz";

    }

    else

    {

    thid.parentNode.className = "";

    }*/

    if (thid.checked == true) {

        yxsp_a.innerHTML = vals[2];

        yxsp.appendChild(yxsp_li);

        thid.parentNode.className = "leb_xz";

    }

    else {

        var as = yxsp.getElementsByTagName("li");

        thid.parentNode.className = "";

        for (var i = 0; i < as.length; i++) {

            var txt = as[i].innerText || as[i].textContent;

            if (txt === vals[2]) {

                as[i].parentNode.removeChild(as[i])

            }

        }

    }

    var pd = "";
    var i = 0;
    $('#yxsp li a').each(function () {
        if (i == 0) {
            pd += $(this).html()
        }
        else if (i == 1) {
            pd += $(this).html();
        }
        else {
            pd += "+" + $(this).html();
        }
        i++;
    })
    
    $("#Products").val(pd);
    mone(thid, che, totalMoney);
    jiaqian();
}
var acc=0;
function jiaqian(){

    var a=$("input:[name='sx']:checked");
    var b=$("input:[name='product']:checked").length;
    if(b==1){
        acc= parseInt($("#mon").text());
    }
    if(b==1&&a.length!=0){
       $('#mon').text(acc*a.length);
    }
}
var KuCun=parseInt((Math.random()*1000)+100);
var KuCun_2=parseInt((Math.random()*1000)+100);
var KuCun_3=parseInt((Math.random()*1000)+100);
var KuCun_4=parseInt((Math.random()*1000)+100);
