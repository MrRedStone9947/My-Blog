window.onunload=function(){
    while(true){
        if(document.getElementById('clear_level4')==1){
            localStorage.removeItem("redstone.62148310.xyz/game/puzzle/truelevels/level4.vis");
            console.log("清除第4关缓存成功！");
        }
    }
}
