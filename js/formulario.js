const mail = /[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]/;
const palabra = /\w{3}\w+/;
const hola = document.querySelectorAll('#formulario input');
const texto = document.querySelector(`#formulario textarea`);
var campos = {
    correo: false,
    asunto: false,
    txtarea: false
};

formulario = document.getElementById('formulario');

const validarCampo = (expresion, campo, e) => {
    if ((expresion.test(e.target.value)) || (e.target.value == "")){
        document.getElementById(campo).classList.replace('formulario__campo-incorrecto','formulario__campo-correcto');
        document.getElementById('aviso-formulario').classList.replace(`div-formulario__incorrecto`,`div-formulario__correcto`);
        campos[campo] = true;
    }   else{
        document.getElementById(campo).classList.replace('formulario__campo-correcto','formulario__campo-incorrecto');
        document.getElementById('aviso-formulario').classList.replace(`div-formulario__correcto`,`div-formulario__incorrecto`);
        document.getElementById('aviso-enviado').classList.replace(`div-formulario__enviado`,`div-formulario__no-enviado`);
        campos[campo] = false;
    }
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "mail":
            validarCampo(mail, "correo", e);
            break;
        case "asunto":
            validarCampo(palabra, "asunto", e);
            break;
        case "text":
            validarCampo(palabra, "txtarea", e);
    }
        

};

hola.forEach((input)  => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

texto.addEventListener('keyup', validarFormulario);
texto.addEventListener('blur', validarFormulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(campos);
    if(campos.correo && campos.asunto && campos.txtarea){
        formulario.reset();
        document.getElementById('aviso-enviado').classList.replace('div-formulario__no-enviado','div-formulario__enviado');
        setTimeout(() =>{
            document.getElementById('aviso-enviado').classList.replace(`div-formulario__enviado`,`div-formulario__no-enviado`);
        },3000);
    }   else{
        document.getElementById('aviso-formulario').classList.replace(`div-formulario__correcto`,`div-formulario__incorrecto`);
    }

});