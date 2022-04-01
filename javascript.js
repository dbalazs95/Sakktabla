window.addEventListener("load",init);

function ID(elem) {
    return document.getElementById(elem);
}

function Class(elem){
    return document.getElementsByClassName(elem);
}

function init() {
   sakktabla();
}

function sakktabla(){
    var meret = 8;
    var txt = "";
    var szamlalo = 0;
    for (let index = 0; index < meret; index++) {
        for (let i = 0; i < meret; i++) {
            szamlalo++
            if ((index+i)%2==0) {
                txt += "<div id="+szamlalo+" class=\"vilagos\" onclick=klikk(this.id)></div>";
            } else {
                txt += "<div id="+szamlalo+" class=\"sotet\" onclick=klikk(this.id)></div>";
            }
        }
    }
    ID("tabla").innerHTML = txt;
}

function klikk(clicked_id){
    ID(clicked_id).innerHTML="<img src=\"paraszt.png\" alt=\"\"></img>";
    }