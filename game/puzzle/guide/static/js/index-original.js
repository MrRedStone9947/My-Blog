var yes=0,no=0;
function get(){
    var v=hex_md5(document.getElementById("in").value);
    if(v=="667ff118ef6d196c96313aeaee7da519"){
        if(yes<=10){
            alert("密码正确！……但是神魔都没有发生");
        }
        else{
            alert("密码正确！……似乎有所不同");
            var ans1="本关秘钥:114";
            var ans2="5141145";
            var ans3="1454188<b";
            var ans4="r>下一关提示:"
            var ans5="/level1/"
            document.getElementById("hint").innerHTML=ans1+ans2+ans3+ans4+ans5;
        }
        yes+=1;
    }
    else{
        alert("你没逝吧，这都能输错，真的是牛波一");
        no+=1;
        if(no>=10){
            window.location.replace('https://www.bilibili.com/video/BV1uT4y1P7CX');
        }
    }
}
