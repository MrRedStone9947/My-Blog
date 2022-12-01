var f=0;
function get(){
    var v=hex_md5(document.getElementById('in'));
    console.log(v,document.getElementById('in'));
    if(v=='8139ca2f8d66'+'2f052a5b9eff9a344e7e'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='恭喜你通过了前面的小关卡，现在来开始第一关吧！';
    }
    else if(v=='bcc2f57d3913ab43ccaa0'+'4d92503e9ba'&&f==1){
        document.getElementById('hint').innerHTML='asdasd';
    }
    else{
        document.getElementById('in').value='这都错了，你不会没做上一关吧:)';
    }
}
