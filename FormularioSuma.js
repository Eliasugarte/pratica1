document.getElementById("multiplicar").onclick = multiplicar;

function multiplicar(){
    var input1 = document.getElementById('multiplicando');
    var input2 = document.getElementById('multiplicador');
    var res = document.getElementsByClassName('resultado')[0];
    if(isNaN(input1.value)||isNaN(input2.value)){//is not a numeric
        res.style.background = "#ff0000"; //rgb
        res.innerHTML = "Error";
    }
    else{
        var total = parseInt(input1.value) * parseInt(input2.value);
        res.innerHTML = total;
    }
    return false;
}

document.getElementById("calcular").onclick = function(){
    var N = document.getElementById("numero").value;
    var lista = document.createElement("ul");
    for(var i=1;i<=N;i++){
        var item = document.createElement("li");
        item.innerHTML = parseInt(Math.random()*100)+1;
        lista.appendChild(item);
    }
    document.getElementsByClassName("aleatorio")[0].appendChild(lista);
    return false;
}
document.getElementById("color").onchange = function(event){
    var valor = event.target.value;
    var nuevoColor = "linear-gradient("+valor+", #fff)";
    document.getElementsByTagName("body")[0].style.background = nuevoColor;
}
