let mensajeUsuario = document.querySelector('.mensajeUsuario');
let mensajeEncriptado = document.querySelector('.mensajeEncriptado');
let copiarBtn = document.querySelector('.btnCopiar');
let imagen = document.querySelector('.imagen');
let imagenTexto = document.querySelector('.imagenTexto');

/*La letra "e" es convertida para "enter"
 La letra "i" es convertida para "imes"
 La letra "a" es convertida para "ai"
 La letra "o" es convertida para "ober"
 La letra "u" es convertida para "ufat"*/

 function encriptar(){
    let mensaje = encriptarMensaje(mensajeUsuario.value);
    mensajeEncriptado.value = mensaje;
    mensajeUsuario.value = "";
    copiarBtn.classList.remove('copiar');
    imagen.classList.add('img');
    imagenTexto.classList.add('imagen_texto')

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

 function copiarMensaje() {
    let msg = mensajeEncriptado.value;
    navigator.clipboard.writeText(msg);
 }

 function desencriptar() {
    let mensajeUsuario = document.querySelector('.mensajeUsuario');
    let mensaje = desencriptarMensaje(mensajeUsuario.value);
    mensajeEncriptado.value = mensaje;
    mensajeUsuario.value = "";
    copiarBtn.classList.remove('copiar');
 }

 function desencriptarMensaje(msg) {
    const matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    for(i=0; i < matrizCodigo.length; i++){
        if(msg.includes(matrizCodigo[i][1])){
            msg = msg.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return msg;
 }

 function reiniciarEncriptador(){
    mensajeUsuario.value = "";
    mensajeEncriptado.value = "";
    copiarBtn.classList.add('copiar');
    imagen.classList.remove('img');
    imagenTexto.classList.remove('imagen_texto')
}