function main(){
    if(document.getElementById('clear_level4').value==1){
        alert("清除第4关缓存成功！");
        localStorage.removeItem("redstone.62148310.xyz/game/puzzle/truelevels/level4.vis");
    }
}
const loopId=setInterval(main,500);
