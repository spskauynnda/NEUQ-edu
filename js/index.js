var  _$=function(node){
    if(document.getElementById('id')){
        return document.getElementById('id')
    }else{
        return false;
    }
}
function myParseInt(s) {
    var ret = parseInt(s);
    return (isNaN(ret) ? 0 : ret);
}
window.onload = function () {
    var oBanleft = document.getElementById("banner_left");
    var oBanright = document.getElementById("banner_right");
    var oScr = document.getElementById("scroll");
    oScr.style.position = "absolute";
    oBanleft.onclick = function() {
        oScr.style.left = (myParseInt(oScr.style.left) + 1200) + "px";
    }
    oBanright.onclick = function(){
        oScr.style.left = (myParseInt(oScr.style.left) - 1200) + "px" ;
    }
                // wrong：
                // oBanleft.style.left = myParseInt(oBanleft.style.left) + "100px"; 之前用来和不带left初值的scroll作对比的
                // oScr.offsetLeft= oScr.offsetLeft + "100px";          貌似这是ie的写法
                // oScr.getLeft+=getLeft(oScr.offsetParent);            。。。
                // oScr.style.marginLeft+="100px";                      。。。。。。瞎想的












}