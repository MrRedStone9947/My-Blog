var ans_list=['11451411451454188','WDNMDJNTM'];
var href_list=['truelevels/level1','truelevels/level2'];
id=-1;
function get(){
    console.log(id);
    var v=document.getElementById("in").value;
    if(v==ans_list[id-1]){
        window.location.href='http://redstone.62148310.xyz/game/puzzle/'+href_list[id-1];
    }
    else{
        alert("恭喜你，密码错了!")
        window.location.href='http://redstone.62148310.xyz';
    }
}
