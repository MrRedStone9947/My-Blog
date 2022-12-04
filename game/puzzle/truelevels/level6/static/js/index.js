var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='上一关秘钥md5'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='';
    }
    else if(v=='本关密码md5'&&f==1){
        var ans1='';
        var ans2='';
        var ans3='';
        var ans4='';
        var ans5='';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
    }
    else{
        console.log(f);
        if(f==1){
            document.getElementById('').innerHTML='';
        }
        if(f==0){
            document.getElementById('').innerHTML='';
        }
    }
}
