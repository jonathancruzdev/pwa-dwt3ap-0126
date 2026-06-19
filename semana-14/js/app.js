if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register('sw.js')
    .then( reg => {
        console.log('SW Con exito')
    })
    .catch( error => {
        console.error(error)
    })
} else {
    alert('Tu navegador no soporta esta app 😒');
}

let deferredPrompt;

const dMsg =  document.querySelector('.msg');
const btnLeer = document.querySelector('#btnLeer');
const btnInstall = document.querySelector('#btnInstall');
const pTexto = document.querySelector('#pTexto');
const sVoces = document.querySelector('#sVoces');
let vocesDisponibles = [];

/// Escuchamos el evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
    // Evitamos el mensaje del navegardor
    event.preventDefault();
    console.log('Evento del install');
    deferredPrompt = event;
    btnInstall.classList.remove('hide');

})

// Realizo la instalacion por medio del btn
btnInstall.addEventListener('click', async () => {
    if( !deferredPrompt){
        return;
    }
    // Mostramos el mensaje de instalación de la APP
    deferredPrompt.prompt();
    // Esperamos al respuesta del usuario
    const { outcome} = await deferredPrompt.userChoice;
    console.log( outcome);
    // Limpiamos el evento;
    deferredPrompt =  null;
    // Ocultamos el btnInstall
    btnInstall.classList.add('hide');
})


// Verificamos si estamos SIN conexion
window.addEventListener('offline', (e) => {
    console.log('Sin conexión 😒');
    dMsg.classList.remove('hide');

})
// Veridicamos si estamos con Conexión
window.addEventListener('online', (e) => {
    console.log('Tenemos Conexión 😁');
    dMsg.classList.add('hide');
})



const cargarVoces = () => {
    vocesDisponibles = speechSynthesis.getVoices();

    sVoces.innerHTML = "";

    vocesDisponibles.forEach( (voz, index) => {
        //console.log( index, voz);
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${voz.name} - ${voz.lang}`

        sVoces.appendChild(option)
    });
}



const text = pTexto.textContent;




console.log(text);


btnLeer.addEventListener('click', () => {
    console.log('leer')
    const mensaje = new SpeechSynthesisUtterance(text);
    mensaje.lang = "es-AR";
    mensaje.rate = 0.9;  // Velocidad
    mensaje.pitch = 0;   // Tono
    mensaje.volume = 1;  // Volumen
    // Voz seleccionada
    const index = sVoces.value;
    mensaje.voice =  vocesDisponibles[index];

    speechSynthesis.speak(mensaje)
})


speechSynthesis.onvoiceschanged = cargarVoces

cargarVoces();