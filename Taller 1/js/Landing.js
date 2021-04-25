function commentBox(){
	var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;
    let today = new Date().toLocaleDateString()

	if(verificar()){
        var parent=document.createElement('div');
		var el_name=document.createElement('h5');
        var el_fecha=document.createElement('h5');
		var el_message=document.createElement('p');
		var el_line=document.createElement('hr');
		var txt_name=document.createTextNode(name);
		var txt_message=document.createTextNode(comment);
        var txt_date=document.createTextNode(today);
		el_name.appendChild(txt_name);
        el_fecha.appendChild(txt_date);
		el_message.appendChild(txt_message);
		el_line.style.border='1px solid #000';
		parent.appendChild(el_name);
        parent.appendChild(el_fecha);
		parent.appendChild(el_line);
		parent.appendChild(el_message);
		parent.setAttribute('class', 'pane');
		document.getElementById('result').appendChild(parent);
 
		document.getElementById('name').value="";
		document.getElementById('comment').value="";
    }
}

function verificar(){
    var name=document.getElementById('name').value;
	var comment=document.getElementById('comment').value;

    if(name =="" || comment ==""){
        alert("Debe ingresar caracteres en ambos campos");
    }else if(name.length<3 || comment.length<3){
        alert("Deben de existir al menos 3 caracteres en los campos");
    }else if(comment.length>200){
        alert("Se exedio en la cantidad de caracteres para los comentarios")
    }else{
        return true;
    }
}