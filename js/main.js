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
		
		mensaje="Debe ingresar su nombre2"

	} else if (/^[0-9]/.test(name.charAt(0))){
		mensaje="Debe ingresar su nombre3"
		
	} else padreName.removeChild(padreName.childNodes[2]);

	if (mensaje.length>0){
		var textoName = document.createTextNode(mensaje);
		spanName.appendChild(textoName);
	}

	var lastname = document.getElementById("lastname").value;
	if (lastname == ""){
		var spanApellido = document.createElement("span");
		var referenciaApellido= document.getElementById("lastname");
		var padreApellido=referenciaApellido.parentNode;
		padreApellido.insertBefore(spanApellido,referenciaApellido);
		var textoApellido = document.createTextNode("Debe ingresar su apellido");
		spanApellido.appendChild(textoApellido);
		//return spanApellido;
	}

	var correovalidado=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var email = document.getElementById("input-email").value;
	if (email == "" ){
		//alert("llenar el campo correo por favor");
	} else if(!correovalidado.test(email)) {
        //alert("Ingrese un correo válido.");
    }

	var password = document.getElementById("input-password").value;
	if (password == "") {
		//alert("llenar el campo contraseña por favor");
	} else if (password.length < 6){ 
     	//alert("Ingrese  al menos 6 caracteres"); 
     } else if (password == "123456" || password == "password" || password == "098754"){
    	//alert("ingresa contraseña valida");
    }

    var menu = document.querySelector("select").value;
	if (menu == 0) {
		//alert("selecciona un tipo de bici por favor");
	}  
}