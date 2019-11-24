window.addEventListener("load",iniciar);
function iniciar(){
    
    var selectorCons = document.getElementById("seleccionConsulta");
    selectorCons.addEventListener("change",function(){
        var x = this.value;
        document.getElementById("nada").style.display = "none";
        document.getElementById("peso").style.display = "none";
        document.getElementById("regAct").style.display = "none";
        document.getElementById("vistaTablaAct").style.display = "none";
        document.getElementById("vistaActReal").style.display = "none";
        document.getElementById("tablaAlim").style.display = "none";
        document.getElementById("regAlim").style.display = "none";
        document.getElementById("alimConsum").style.display = "none";
        document.getElementById(x).style.display = "block";
    });
    
    var atr = document.getElementById("atr");
    atr.addEventListener("click",function(){
        window.history.back();
    });
    
    var btnLog = document.getElementById("logout");
    btnLog.addEventListener("click",function(){
        location.href="Index.html";
    });
    
    saludar();
}

function saludar() {
    var saludo = document.getElementById("saludando");
    saludo.innerHTML += "Hola, " + getLoggedName();
}

