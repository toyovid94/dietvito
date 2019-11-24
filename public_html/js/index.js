 window.addEventListener("load",iniciar);
 function iniciar(){
    var btnLog = document.getElementById("login");
    btnLog.addEventListener("click",function(){
        location.href="Login.html";
    });
    
    var atr = document.getElementById("atr");
    atr.addEventListener("click",function(){
        window.history.back();
    });
 }

