var f=0;
var ans=[13,15,19,23,28];
var cur=[0,0,0,0,0];
function plus(num,line){
    cur[line-1]+=num;
    if(cur.toString()==ans.toString()){
        var ans1='1';
        var ans2='1';
        var ans3='2';
        var ans4='3';
        var ans5='5';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
    }
    else if(cur[line-1]>ans[line-1]){
        alert("芭比Q了:(");
        window.location.replace('https://www.bilibili.com/video/BV1uT4y1P7CX');
    }
}

function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='0069934'+'193'+'ffb38a6d2'+'13ffc3'+'e7611ca'&&f==0){
        f=1;
        document.getElementById('main').innerHTML=`<h2>点下面数字合成上面的数字</h2>
                                                <div id="line1">
                                                    <p>13 15 19 23 28</p>
                                                    <font onclick="plus(2,1)">&nbsp2&nbsp</font>
                                                    <font onclick="plus(2,2)">&nbsp2&nbsp</font>
                                                    <font onclick="plus(3,3)">&nbsp3&nbsp</font>
                                                    <font onclick="plus(5,4)">&nbsp5&nbsp</font>
                                                    <font onclick="plus(8,5)">&nbsp8&nbsp</font>
                                                    <br>
                                                    <font onclick="plus(3,1)">&nbsp3&nbsp</font>
                                                    <font onclick="plus(7,2)">&nbsp7&nbsp</font>
                                                    <font onclick="plus(4,3)">&nbsp4&nbsp</font>
                                                    <font onclick="plus(8,4)">&nbsp8&nbsp</font>
                                                    <font onclick="plus(6,5)">&nbsp6&nbsp</font>
                                                </div>`;
    }
    else{
        if(f==0){
            document.getElementById('in').value='………………';
        }
    }
}
