var ans=[3,5,4,2,4,8];
var cur=[0,0,0,0,0,0];
function plus(index){
    cur[index-1]++;;
}
function check(){
    if(cur.toString()==ans.toString()){
        var ans1='本关秘钥:br,';
        var ans2='lots of b';
        var ans3='r<br>下一关提示';
        var ans4=':truelevels';
        var ans5='/level8';
        document.getElementById('main').innerHTML='';
        document.getElementById('laugh').innerHTML='哇这都被你找到了';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
    }
    else{
        alert("逊诶，太逊了！");
    }
    cur=[0,0,0,0,0,0];
}
var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='721fc44a8db'+'3d13fd9aa775d6e539522'&&f==0){
        f=1;
        var temp=`<h4>找到所有数字并点击相应次数，最后按确定即可过关</h4>
            <font onclick="plus(1)">3</font>
            <font onclick="plus(2)">5</font>
            <font onclick="plus(3)">4</font>
            <font onclick="plus(4)">2</font>
            <font onclick="plus(5)">4</font>
            <br>
            <br>
            <font onclick="plus(6)" color="white">8</font>`;
        for(var i=1;i<=500;i++){
            temp+=`<br>`;
        }
        temp+=`<font oncli`+`ck="check()" id`+`="确定">&nb`+`sp</font>`;
        for(var i=1;i<=500;i++){
            temp+=`<br>`;
        }
        document.getElementById('main').innerHTML=temp;
        document.getElementById('laugh').innerHTML='';
    }

    else{
        if(f==0){
            document.getElementById('laugh').innerHTML='哎，服了，这都错';
        }
    }
}
