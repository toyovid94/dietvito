function mostrar() {
    var x = document.getElementById("consultar");
    var valor = x.options[x.selectedIndex].value;
    document.getElementById("nada").style.display = "none";
    document.getElementById("actividades").style.display = "none";
    document.getElementById("alimentos").style.display = "none";   
    document.getElementById(valor).style.display = "block";
}


