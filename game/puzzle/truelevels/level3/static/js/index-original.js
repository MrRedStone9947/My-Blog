var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='016f1a9be'+'21f0d9b8d2dd060a6e08efa'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='看来你是个ikun，那我就不黑你家giegie了';
        document.getElementById('t1').innerHTML='话说你有啥喜欢听的阴乐';
        document.getElementById('t2').innerHTML='我喜欢听狂妄之人';
        document.getElementById('t3').innerHTML='我喜欢把阴乐放在./static/assets/music/下的某个txt里';
        document.getElementById('t4').innerHTML='你问我为神魔是txt？我也不到啊~';
    }
    else if(v=='3023c3b060d48794e4c'+'30c66d76a99e3'&&f==1){
        var ans1='本关秘钥:NYEH HE';
        var ans2='H HEH HE';
        var ans3='H<br>下一关';
        var ans4='提示:truelev';
        var ans5='els/level4';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
    }
    else{
        if(f==1){
            document.getElementById('in').value='NYEH HEH HEH HEH';
        }
        if(f==0){
            document.getElementById('in').value='不是吧不是吧，这都6606年了！还有人不玩上一关？？？';
        }
    }
}
