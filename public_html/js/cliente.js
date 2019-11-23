function mostrar() {
    var x = document.getElementById("seleccionConsulta");
    var valor = x.options[x.selectedIndex].value;
    document.getElementById("nada").style.display = "none";
    document.getElementById("peso").style.display = "none";
    document.getElementById("regAct").style.display = "none";
    document.getElementById("vistaTablaAct").style.display = "none";
    document.getElementById("vistaActReal").style.display = "none";
    document.getElementById("tablaAlim").style.display = "none";
    document.getElementById("regAlim").style.display = "none";
    document.getElementById("alimConsum").style.display = "none";
    document.getElementById(valor).style.display = "block";
}
