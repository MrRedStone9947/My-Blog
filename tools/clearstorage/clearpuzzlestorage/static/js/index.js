function main(){
    if(document.getElementById('clear_level4')==1){
        alert("清除第4关缓存成功！");
        localStorage.removeItem("redstone.62148310.xyz/game/puzzle/truelevels/level4.vis");
    }
}
setInterval(main,500);
