function mostrar() {
    var x = document.getElementById("selectorAccion");
    var valor = x.options[x.selectedIndex].value;
    document.getElementById("nada").style.display = "none";
    document.getElementById("regUser").style.display = "none";
    document.getElementById("regPeso").style.display = "none";
    document.getElementById("consulta").style.display = "none";
    document.getElementById(valor).style.display = "block";
}
function mostrar2() {
    var x = document.getElementById("selectorConsulta");
    var valor = x.options[x.selectedIndex].value;
    document.getElementById("nada").style.display = "none";
    document.getElementById("actividades").style.display = "none";
    document.getElementById("evolPeso").style.display = "none";
    document.getElementById("act").style.display = "none";
    document.getElementById("alimentos").style.display = "none";
    document.getElementById(valor).style.display = "block";
}

function buttonRegCliente() {
    var boton = document.getElementById("regCliente");
    boton.addEventListener("click", placeholder);
    //sustituir placeholder por nombre de la funcion registroCliente
}

function buttonlimpiarReg() {
    var boton = document.getElementById("limpiarReg");
    boton.addEventListener("click", placeholder);
    //sustituir placeholder por nombre de la funcion limpiar
}

function placeholder() {
}