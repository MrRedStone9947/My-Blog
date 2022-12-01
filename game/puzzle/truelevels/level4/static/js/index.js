var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='7e875d74f951240406'+'46c0038384e14f'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='好的请再输入前面某一关的秘钥';
        document.getElementById('laugh').innerHTML='';
        document.getElementById('in').value='';
    }
    else if(v=='68a8a'+'7df567c08f6a8ff4f8efa8e1ae6'&&f==1){
        var ans1='1';
        var ans2='1';
        var ans3='2';
        var ans4='3';
        var ans5='5';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
        document.getElementById('laugh').innerHTML='';
    }
    else{
        console.log(f);
        if(f==1){
            document.getElementById('laugh').innerHTML='恭喜你，密钥可太正确了，都没对！！';
        }
        if(f==0){
            document.getElementById('laugh').innerHTML='我真服了，这能输错，牛波一';
        }
    }
}
