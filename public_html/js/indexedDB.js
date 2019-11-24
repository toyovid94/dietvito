var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;
window.loggedMail = null;
window.loggedName = null;
window.loggedImage = null;
window.addEventListener("load", startDB);
function startDB() {
    dataBase = indexedDB.open("dietVito07", 1);
    dataBase.onupgradeneeded = function (e) {
        var active = dataBase.result;
        //cliente
        var cliente = active.createObjectStore("usuarios", {keyPath: 'email', unique: true});
        cliente.createIndex('contraseña', 'contraseña', {unique: false});
        cliente.createIndex('nombre', 'nombre', {unique: false});
        cliente.createIndex('imagen', 'imagen', {unique: false});
        //pesocliente
        var pesocliente = active.createObjectStore("pesos", {autoincrement: true});
        pesocliente.createIndex('email', 'email', {unique: false});
        pesocliente.createIndex('peso', 'peso', {unique: false});
        pesocliente.createIndex('fecha','fecha', {unique:false});
        //actividad
        var actividad = active.createObjectStore("actividades", {keyPath: 'codAct', autoIncrement: true});
        actividad.createIndex('actividad', 'actividad', {unique: true});
        actividad.createIndex('calorias', 'calorias', {unique: false});
        
        //actividadDiaria
        var actDiaria = active.createObjectStore("actDiarias",{autoIncrement:true});
        actDiaria.createIndex('email', 'email', {unique: false});
        actDiaria.createIndex('peso', 'peso', {unique: false});
        actDiaria.createIndex('fecha','fecha', {unique:false});
    };
    dataBase.onsuccess = function (e) {
        //alert('Database loaded');
        addDietista();
        addEjCliente();
    };
    dataBase.onerror = function (e) {
        alert('Error al cargar la base de datos');
    };
}

function addCliente() {
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");
    var request = object.put({
        email: document.querySelector("#email").value,
        contraseña: document.querySelector("#pwd").value,
        nombre: document.querySelector("#nombreCliente").value,
        imagen: document.querySelector("#imagenCliente").value
    });
    request.onsuccess = function () {
        alert("Usuario Registrado con exito");
    };
    request.onerror = function () {
        alert(request.error.name + '\n\n' + request.error.message);
    };
}
function addActividades()
{
    var active = dataBase.result;
    var data = active.transaction(["actividades"], "readwrite");
    var object = data.objectStore("actividades");
    var request = object.add({
        actividad: "abdominales",
        calorias: "64"
    },{
        actividad: "aerobic",
        calorias: "64"
    },{
        actividad:"MTB",
        calorias: "1734"
    },{
        actividad:"crossfit",
        calorias: "136"
    },{
        actividad:"lucha",
        calorias:"70"
    });
    request.onsuccess = function () {
        
    };
    request.onerror = function () {
        alert(request.error.name + '\n\n' + request.error.message);
    };
}
function addEjCliente() {
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");
    var request = object.add({
        email: "b@b.com",
        contraseña: "bbbb",
        nombre: "Lucia Fernanda",
        imagen: "../img/imgDietista.png"
    });
    request.onsuccess = function () {
        
    };
    request.onerror = function () {
        alert(request.error.name + '\n\n' + request.error.message);
    };
}

function addDietista() {
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");
    var request = object.add({
        email: "a@a.com",
        contraseña: "aaaa",
        nombre: "MCO",
        imagen: "../img/imgDietista.png"
    });
    request.onerror = function (e) {
        alert(request.error.name + '\n\n' + request.error.message);
    };
    data.oncomplete = function (e) {
        //alert('Object successfully added');
    };
}

function setLoggedMail(a){
    this.loggedMail=a;
}
function setLoggedName(a){
    this.loggedName=a;
}
function setLoggedImage(a){
    this.loggedImage=a;
}
function getLoggedMail(){
    return this.loggedMail;
}
function getLoggedName(){
    return this.loggedName;
}
function getLoggedImage(){
    return this.loggedImage;
}

