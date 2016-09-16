function validateForm(){
	var spanName = document.createElement("span");
	var referenciaName= document.getElementById("name");
	var padreName=referenciaName.parentNode;
	padreName.insertBefore(spanName,referenciaName);
	var mensaje="";

	var name = document.getElementById("name").value;
	if (name == ""){
		mensaje="Debe ingresar su nombre"
		
	} else if (/^[a-z]/.test(name.charAt(0))){
		
		mensaje="Debe ingresar la primera letra en mayuscula"

	} else if (/^[0-9]/.test(name.charAt(0))){
		mensaje="No debe ingresar numeros"
		
	} 

	if (mensaje.length>0){
		var textoName = document.createTextNode(mensaje);
		spanName.appendChild(textoName);
	} else spanName.style.display ="none";

	var lastname = document.getElementById("lastname").value;
	if (lastname == ""){
		var spanApellido = document.createElement("span");
		var referenciaApellido= document.getElementById("lastname");
		var padreApellido=referenciaApellido.parentNode;
		padreApellido.insertBefore(spanApellido,referenciaApellido);
		var textoApellido = document.createTextNode("Debe ingresar su apellido");
		spanApellido.appendChild(textoApellido);
	}

	var spanCorreo = document.createElement("span");
	var referenciaCorreo= document.getElementById("input-email");
	var padreCorreo=referenciaCorreo.parentNode;
	padreCorreo.insertBefore(spanCorreo,referenciaCorreo);
	var mensajeCorreo="";

	var correovalidado=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var email = document.getElementById("input-email").value;
	if (email == "" ){
		mensajeCorreo="Llenar el campo correo por favor";
	} else if(!correovalidado.test(email)) {
        mensajeCorreo="Verifique su email"
    }

    if (mensajeCorreo.length>0) {
    var textoCorreo = document.createTextNode(mensajeCorreo);
	spanCorreo.appendChild(textoCorreo);
    } else spanCorreo.style.display ="none";


    var spanPass = document.createElement("span");
	var referenciaPass= document.getElementById("input-password");
	var padrePass=referenciaPass.parentNode;
	padrePass.insertBefore(spanPass,referenciaPass);
	var mensajePass="";

	var password = document.getElementById("input-password").value;
	if (password == "") {
		mensajePass="llenar el campo contraseña por favor";
	} else if (password.length < 6){ 
     	mensajePass="Ingrese  al menos 6 caracteres"; 
     } else if (password == "123456" || password == "password" || password == "098754"){
    	mensajePass="ingresa contraseña valida";
    }

    if (mensajePass.length>0) {
    var textoPass = document.createTextNode(mensajePass);
	spanPass.appendChild(textoPass);
    }else spanPass.style.display ="none";

    var spanTipo = document.createElement("span");
	var referenciaTipo= document.querySelector("select");
	var padreTipo=referenciaTipo.parentNode;
	padreTipo.insertBefore(spanTipo,referenciaTipo);
	var mensajeTipo="";

    var menu = document.querySelector("select").value;
	if (menu == 0) {
		mensajeTipo="selecciona un tipo de bici por favor";
	}

	if (mensajeTipo.length>0) {
    var textoTipo = document.createTextNode(mensajeTipo);
	spanTipo.appendChild(textoTipo);
    }else spanTipo.style.display ="none";  
}