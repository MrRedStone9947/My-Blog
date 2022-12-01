var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='68a8a7df567c08f6a8ff4'+'f8efa8e1ae6'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='诶呀，上一关那么离谱你都能过来？有两下子啊';
        document.getElementById('t1').innerHTML='提示1:我是小黑子';
        document.getElementById('t2').innerHTML='提示2:我是ikun';
        document.getElementById('t3').innerHTML='提示3:和我们家giegie有关';
        document.getElementById('t4').innerHTML='提示4:是我们家giegie说过的一句话';
        document.getElementById('t5').innerHTML='提示5:!=jntm';
        document.getElementById('t6').innerHTML='提示6:你可以去问Mr_RedStone :D';
        document.getElementById('t7').innerHTML='提示7:中文，必是中文！！';
    }
    else if(v=='63a37'+'708dc1361785a76ef1537c99cf0'&&f==1){
        var ans1='本关秘钥:上上';
        var ans2='下下左右左';
        var ans3='右BABA<b';
        var ans4='r>下一关提示:tr';
        var ans5='uelevels/level3';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
        document.getElementById('in').value='这是真ikun!';
    }
    else{
        if(f==1){
            document.getElementById('in').value='你！你！你个小黑子！居然连我们家giegie说啥都不知道！';
        }
        if(f==0){
            document.getElementById('in').value='这都能输错，你不会上一关没玩吧！';
        }
    }
}
