// Validacion del Formulario de contacto
const formulario = document.getElementById('formularioContacto');
const inputs = document.querySelectorAll('#formularioContacto input');


const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numero: /^\d{7,14}$/, // 7 a 14 numeros.54
	asunto: /^[^s*$]/, //contener algun caracter	
};

const campos = {
	name: false,
	mail: false,
	numero: false,
	asunto: false,
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.name, e.target, 'name');
		break;
		case "mail":
			validarCampo(expresiones.mail, e.target, 'mail');
		break;
		case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
		break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto');
		break;
	}
};


const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`input_${campo}`).classList.remove('form_input--error');
		document.getElementById(`input_${campo}`).classList.add('form_input--check');
		document.getElementById(`${campo}_error`).classList.remove(`error--active`);
		campos[campo] = true;
	} else {
		document.getElementById(`input_${campo}`).classList.add('form_input--error');
		document.getElementById(`input_${campo}`).classList.remove('form_input--check');
		document.getElementById(`${campo}_error`).classList.add(`error--active`);
		campos[campo] = false;
	};
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('keydown', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	let textarea = document.getElementById('input_mensaje').value;
	if (textarea.length > 0) {
		if(campos.name && campos.mail && campos.numero && campos.asunto){
			document.getElementById('formulario__mensaje--succes').classList.add('formulario__mensaje--succes--activo');
			setTimeout(() => {
				document.getElementById('formulario__mensaje--succes').classList.remove('formulario__mensaje--succes--activo');
			}, 5000);
		}
	} else {
		document.getElementById('input_mensaje').classList.add('form_input--error');
		document.getElementById('mensaje_error').classList.add('error--active');
		setTimeout(() => {	
			document.getElementById('input_mensaje').classList.remove('form_input--error');
			document.getElementById('mensaje_error').classList.remove('error--active');
			}, 3000);
		}
});