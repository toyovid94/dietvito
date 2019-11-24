window.addEventListener("load",iniciar);
function iniciar(){
    
    var SelectorAcc = document.getElementById("selectorAccion");
    SelectorAcc.addEventListener("change",function(){
        var x = this.value;
        document.getElementById("nada").style.display = "none";
        document.getElementById("regUser").style.display = "none";
        document.getElementById("regPeso").style.display = "none";
        document.getElementById("consulta").style.display = "none";
        document.getElementById(x).style.display = "block";
    });
    
    var SelectorCons = document.getElementById("selectorConsulta");
    SelectorCons.addEventListener("change",function(){
        var x = this.value;
        document.getElementById("nada").style.display = "none";
        document.getElementById("actividades").style.display = "none";
        document.getElementById("evolPeso").style.display = "none";
        document.getElementById("act").style.display = "none";
        document.getElementById("alimentos").style.display = "none";
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

function buttonRegCliente() {
    var boton = document.getElementById("regCliente");
    boton.addEventListener("click",addCliente());
    //sustituir placeholder por nombre de la funcion registroCliente
}

function placeholder() {
}

function saludar() {
    var saludos = document.getElementById("saludo");
    saludos.innerHTML += "Hola, " + getLoggedName();
}

function mostrarTablaAct(){
    var tabla = document.getElementById("activities");
    var todos = mostrarTablaActividades();
}