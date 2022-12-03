function main(){
    console.log("FUCK");
    document.getElementById('clear_level4').onclick=function(){
        alert("清除第4关缓存成功！");
        localStorage.removeItem("redstone.62148310.xyz/game/puzzle/truelevels/level4.vis");
    }
}
const loopId=setInterval(main,500);
