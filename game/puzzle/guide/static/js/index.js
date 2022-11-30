document.write("<script src="http://redstone.62148310.xyz/static/plugins/md5.js"></script>")
var yes=0,no=0;
function get(){
    var v=hex_md5(document.getElementById("in").value);
    if(v=="667ff118ef6d196c96313aeaee7da519"){
        if(yes<=10){
            alert("密码正确！……但是神魔都没有发生");
        }
        else{
            alert("密码正确！……似乎有所不同");
            document.getElementById("hint").innerHTML="下一关密码:11451411451454188<br>下一关提示:";
        }
        yes+=1;
    }
    else{
        alert("你没逝吧，这都能输错，真的是牛波一");
        no+=1;
        if(no>=10){
            window.location.replace('https://www.bilibili.com/video/BV1uT4y1P7CX')
        }
    }
}
