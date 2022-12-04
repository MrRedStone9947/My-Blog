var ans=[1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0];
var cur=[];
var cnt=0;
function check(){
    if(cnt==16){
        if(cur.toString()==ans.toString()){
            var ans1='本关秘钥:Bin';
            var ans2='aryCode<br>';
            var ans3='下一关提示:truel';
            var ans4='evels';
            var ans5='/level6';
            document.getElementById("laugh").innerHTML='WOC你居然过了？！！';
            document.getElementById("hint").innerHTML=ans1+ans2+ans3+ans4+ans5;
        }
        else{
            document.getElementById("laugh").innerHTML="弱诶，拜托，你很弱诶！";
        }
        cur=[];
        cnt=0;
    }
}

var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='cd95bc3e2'+'f2101bd1499d7e313b18f28'&&f==0){
        f=1;
        document.getElementById('main').innerHTML=`<h2>来，开心选选乐:)</h2>
            <h6><font color="white">第一个选右边好吧</font></h6>
            <div id="line1"><font color="red">右</font>
                <button onclick="l1()">选我!</button>
                <button onclick="r1()">选我!</button>
            </div>
            <div id="line2">
                <font color="#00E1FF">左</font>
                <button onclick="l2()">选我!</button>
                <button onclick="r2()">选我!</button>
            </div>
            <div id="line3">
                <font color="red">左</font>
                <button onclick="l3()">选我!</button>
                <button onclick="r3()">选我!</button>
            </div>
            <div id="line4">
                <font color="#00E1FF">左</font>
                <button onclick="l4()">选我!</button>
                <button onclick="r4()">选我!</button>
            </div>
            <div id="line5">
                <font color="red">左</font>
                <button onclick="l5()">选我!</button>
                <button onclick="r5()">选我!</button>
            </div>
            <div id="line6">
                <font color="red">左</font>
                <button onclick="l6()">选我!</button>
                <button onclick="r6()">选我!</button>
            </div>
            <div id="line7">
                <font color="#00E1FF">左</font>
                <button onclick="l7()">选我!</button>
                <button onclick="r7()">选我!</button>
            </div>
            <div id="line8">
                <font color="#00E1FF">左</font>
                <button onclick="l8()">选我!</button>
                <button onclick="r8()">选我!</button>
            </div>
            <div id="line9">
                <font color="red">右</font>
                <button onclick="l9()">选我!</button>
                <button onclick="r9()">选我!</button>
            </div>
            <div id="line10">
                <font color="red">左</font>
                <button onclick="l10()">选我!</button>
                <button onclick="r10()">选我!</button>
            </div>
            <div id="line11">
                <font color="#00E1FF">左</font>
                <button onclick="l11()">选我!</button>
                <button onclick="r11()">选我!</button>
            </div>
            <div id="line12">
                <font color="#00E1FF">右</font>
                <button onclick="l12()">选我!</button>
                <button onclick="r12()">选我!</button>
            </div>
            <div id="line13">
                <font color="#00E1FF">左</font>
                <button onclick="l13()">选我!</button>
                <button onclick="r13()">选我!</button>
            </div>
            <div id="line14">
                <font color="#00E1FF">左</font>
                <button onclick="l14()">选我!</button>
                <button onclick="r14()">选我!</button>
            </div>
            <div id="line15">
                <font color="red">左</font>
                <button onclick="l15()">选我!</button>
                <button onclick="r15()">选我!</button>
            </div>
            <div id="line16">
                <font color="red">左</font>
                <button onclick="l16()">选我!</button>
                <button onclick="r16()">选我!</button>
            </div>`;
        setInterval(check,100);
    }
    else{
        if(f==0){
            document.getElementById('in').value='真的是，不玩上一关？？';
        }
    }
}

function l1(){
    if(cur[0]==null) cnt++;
    cur[0]=0;
}
function r1(){
    if(cur[0]==null) cnt++;
    cur[0]=1;
}

function l2(){
    if(cur[1]==null) cnt++;
    cur[1]=0;
}
function r2(){
    if(cur[1]==null) cnt++;
    cur[1]=1;
}

function l3(){
    if(cur[2]==null) cnt++;
    cur[2]=0;
}
function r3(){
    if(cur[2]==null) cnt++;
    cur[2]=1;
}

function l4(){
    if(cur[3]==null) cnt++;
    cur[3]=0;
}
function r4(){
    if(cur[3]==null) cnt++;
    cur[3]=1;
}

function l5(){
    if(cur[4]==null) cnt++;
    cur[4]=0;
}
function r5(){
    if(cur[4]==null) cnt++;
    cur[4]=1;
}

function l6(){
    if(cur[5]==null) cnt++;
    cur[5]=0;
}
function r6(){
    if(cur[5]==null) cnt++;
    cur[5]=1;
}

function l7(){
    if(cur[6]==null) cnt++;
    cur[6]=0;
}
function r7(){
    if(cur[6]==null) cnt++;
    cur[6]=1;
}

function l8(){
    if(cur[7]==null) cnt++;
    cur[7]=0;
}
function r8(){
    if(cur[7]==null) cnt++;
    cur[7]=1;
}

function l9(){
    if(cur[8]==null) cnt++;
    cur[8]=0;
}
function r9(){
    if(cur[8]==null) cnt++;
    cur[8]=1;
}

function l10(){
    if(cur[9]==null) cnt++;
    cur[9]=0;
}
function r10(){
    if(cur[9]==null) cnt++;
    cur[9]=1;
}

function l11(){
    if(cur[10]==null) cnt++;
    cur[10]=0;
}
function r11(){
    if(cur[10]==null) cnt++;
    cur[10]=1;
}

function l12(){
    if(cur[11]==null) cnt++;
    cur[11]=0;
}
function r12(){
    if(cur[11]==null) cnt++;
    cur[11]=1;
}

function l13(){
    if(cur[12]==null) cnt++;
    cur[12]=0;
}
function r13(){
    if(cur[12]==null) cnt++;
    cur[12]=1;
}

function l14(){
    if(cur[13]==null) cnt++;
    cur[13]=0;
}
function r14(){
    if(cur[13]==null) cnt++;
    cur[13]=1;
}

function l15(){
    if(cur[14]==null) cnt++;
    cur[14]=0;
}
function r15(){
    if(cur[14]==null) cnt++;
    cur[14]=1;
}

function l16(){
    if(cur[15]==null) cnt++;
    cur[15]=0;
}
function r16(){
    if(cur[15]==null) cnt++;
    cur[15]=1;
}
