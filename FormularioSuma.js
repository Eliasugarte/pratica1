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
