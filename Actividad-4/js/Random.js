function randomInt(){
    var a = parseInt(document.getElementById("min").value);
    var b = parseInt(document.getElementById("max").value);
    var random = Math.floor(Math.random() * (a - b - 1)) + b + 1;
    alert(random);
}