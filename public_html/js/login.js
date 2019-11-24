 window.addEventListener("load",iniciar);
 function iniciar(){
    var btnLog = document.getElementById("cnc");
    btnLog.addEventListener("click",function(){
        location.href="index.html";
    });
    
    var atr = document.getElementById("atr");
    atr.addEventListener("click",function(){
        window.history.back();
    });
    
    var login = document.getElementById("loguear");
    login.addEventListener("click",logueo);
    
 }
 
 function logueo(){
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readonly");
    var object = data.objectStore("usuarios");
    var request = object.get(document.querySelector("#email").value);
    request.onsuccess = function () {
        if (request.result.contraseña === document.querySelector("#contraseña").value)
        {
            setLoggedMail(request.result.email);
            setLoggedName(request.result.nombre);
            setLoggedImage(request.result.imagen);
            alert(window.loggedName);
            if (request.result.email === "a@a.com")
            {
                location.href = "Dietista.html";
            } else
            {
                location.href = "cliente.html";
            }
        } else
        {
            alert("Contraseña erronea");
        }
    };
    
    request.onerror = function () {
        alert("No se ha encontrado ningun usuario con el email especificado.");
    };
 }


