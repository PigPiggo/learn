window.onload = function(){
    //修改背景
    function addBgc(selec){
        var ele = document.querySelectorAll(selec);
        for(i = 1 ; i < ele.length ; i++){
            ele[i].style.backgroundPosition = - i * 112 + "px";
        } 
    }
    addBgc(".front"); 
    addBgc(".back"); 
    addBgc(".top"); 
    addBgc(".bottom");
    
    //动画
    function roll(ele){
        var v = 1;
        ele.time = setInterval(function(){
            ele.style.transform = "rotateX(" + v + "deg)" 
            v++;
            console.log(v);
            if(v>90){
                clearInterval(ele.time);
            }
        },100)
    }
            
    //轮播
    var flag = 1;
    var rollPlay = setInterval(function(){
        var allLi = document.getElementsByTagName("li");
        //roll(allLi[0]);
       /*  roll(allLi[1]);
        roll(allLi[2]);
        roll(allLi[3]); */
    },300)
    
    //单机响应
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var one = document.getElementById("one");
    prev.onclick = function(){
        roll(allLi[0]);
    }
}