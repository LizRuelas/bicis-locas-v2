function validateForm(){
	var name = document.getElementById("name").value;
	if (name == ""){
		var span = document.createElement("span");
		var referencia= document.getElementById("name");
		var padre=referencia.parentNode;
		padre.insertBefore(span,referencia);
		var texto = document.createTextNode("Debe ingresar su nombre");
		span.appendChild(texto);
		return span;
	} else if (/^[a-z]/.test(name.charAt(0))){
		alert("Por favor ingrese la primera letra en mayuscula");
	} else if (/^[0-9]/.test(name.charAt(0))){
		alert("Por favor no ingrese numeros");
	}

	var lastname = document.getElementById("lastname").value;
	if (lastname == ""){
		alert("llenar el campo apellido por favor");
	}

	var correovalidado=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var email = document.getElementById("input-email").value;
	if (email == "" ){
		alert("llenar el campo correo por favor");
	} else if(!correovalidado.test(email)) {
        alert("Ingrese un correo válido.");
    }

	var password = document.getElementById("input-password").value;
	if (password == "") {
		alert("llenar el campo contraseña por favor");
	} else if (password.length < 6){ 
     	alert("Ingrese  al menos 6 caracteres"); 
     } else if (password == "123456" || password == "password" || password == "098754"){
    	alert("ingresa contraseña valida");
    }

    var menu = document.querySelector("select").value;
	if (menu == 0) {
		alert("selecciona un tipo de bici por favor");
	}  
}