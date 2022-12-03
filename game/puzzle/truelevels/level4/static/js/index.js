var f=0;
if(localStorage.getItem("redstone.62148310.xyz/game/puzzle/truelevels/level4.vis")==1){
    window.location.replace('http://redstone.62148310.xyz');
}
localStorage.setItem("redstone.62148310.xyz/game/puzzle/truelevels/level4.vis",1);
window.onunload=function(){
    window.location.replace('https://www.bilibili.com/video/BV1uT4y1P7CX');
}
function jump(){
    window.location.replace('https://www.bilibili.com/video/BV1uT4y1P7CX');
}
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='7e875d74f951240406'+'46c0038384e14f'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='好的请再输入前面某一关的秘钥';
        document.getElementById('t1').innerHTML='本页面将于2分钟后过期，快点输入！！';
        document.getElementById('t2').innerHTML='不要刷新，后果自负！';
        document.getElementById('t3').innerHTML='不要关闭页面，后果自负！！';
        document.getElementById('laugh').innerHTML='';
        document.getElementById('in').value='';
        setTimeout(jump,2*60*1000);
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
        if(f==1){
            document.getElementById('laugh').innerHTML='恭喜你，密钥可太正确了，都没对！！';
        }
        if(f==0){
            document.getElementById('laugh').innerHTML='我真服了，这能输错，牛波一';
        }
    }
}
