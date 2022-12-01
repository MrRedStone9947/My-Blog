var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='68a8a7df567c08f6a8ff4'+'f8efa8e1ae6'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='诶呀，上一关那么离谱你都能过来？有两下子啊';
    }
    else if(v=='63a37'+'708dc1361785a76ef1537c99cf0'&&f==1){
        var ans1='1';
        var ans2='1';
        var ans3='2';
        var ans4='3';
        var ans5='5';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
    }
    else{
//        if(f==1){
//            document.getElementById('').innerHTML='';
//        }
        if(f==0){
            document.getElementById('in').value='这都能输错，你不会上一关没玩吧！';
        }
    }
}
