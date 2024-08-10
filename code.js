let mensajeEncriptado = document.querySelector('.mensajeEncriptado');
copiarBtn = document.querySelector('.btnCopiar');

/*La letra "e" es convertida para "enter"
 La letra "i" es convertida para "imes"
 La letra "a" es convertida para "ai"
 La letra "o" es convertida para "ober"
 La letra "u" es convertida para "ufat"*/

 function encriptar(){
    let mensajeUsuario = document.querySelector('.mensajeUsuario');
    let mensaje = encriptarMensaje(mensajeUsuario.value);
    mensajeEncriptado.value = mensaje;
    mensajeUsuario.value = "";
    copiarBtn.classList.remove('copiar');
 }

 function encriptarMensaje(msg) {
    const matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    for(i=0; i < matrizCodigo.length; i++){
        if(msg.includes(matrizCodigo[i][0])){
            msg = msg.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return msg;
 } 