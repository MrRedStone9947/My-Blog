var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    console.log(v);
    if(v=='4a4b95e23'+'784821549837819d97cbfe2'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='恭喜你通过了前面的小关卡，现在来开始第一关吧！';
        document.getElementById('laugh').innerHTML='';
        document.getElementById('in').value='';
        document.getElementById('t0').innerHTML='提示:找规律';
        document.getElementById('t1').innerHTML='AB+CD=WDNM';
        document.getElementById('t2').innerHTML='CD+EF=DJNTM';
        document.getElementById('t3').innerHTML='(AB+2CD)/EF*AB*EF/AB=';
    }
    else if(v=='bcc2f57d3913ab43ccaa0'+'4d92503e9ba'&&f==1){
        document.getElementById('hint').innerHTML='asdasd';
        document.getElementById('laugh').innerHTML='';
    }
    else{
        document.getElementById('laugh').innerHTML='这都错了，您不会没做上一关吧！';
    }
}
