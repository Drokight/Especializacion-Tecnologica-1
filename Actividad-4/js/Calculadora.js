function suma(){
    if(checkBoxes() == false){
        document.getElementById("error").innerHTML = "Debe ingresar valores a ambos numeros";
    }else{
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        document.getElementById("resultado").innerHTML = a+b;
    }
}

function resta(){
    if(checkBoxes() == false){
        document.getElementById("error").innerHTML = "Debe ingresar valores a ambos numeros";
    }else{
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        document.getElementById("resultado").innerHTML = a-b;
    }
}

function multiplicacion(){
    if(checkBoxes() == false){
        document.getElementById("error").innerHTML = "Debe ingresar valores a ambos numeros";
    }else{
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        document.getElementById("resultado").innerHTML = a*b;
    }
}

function division(){
    if(checkBoxes() == false){
        document.getElementById("error").innerHTML = "Debe ingresar valores a ambos numeros";
    }else{
        var a = parseInt(document.getElementById("a").value);
        var b = parseInt(document.getElementById("b").value);
        if(b==0){
            document.getElementById("error").innerHTML = "El divisor no puede ser 0";
        }else{
            document.getElementById("resultado").innerHTML = a/b;
        }
    }
}

function checkBoxes(){
    if(document.getElementById("a").value.length == 0){
        return false;
    }else if(document.getElementById("b").value.length == 0){
        return false;
    }else{
        return true;
    }
}