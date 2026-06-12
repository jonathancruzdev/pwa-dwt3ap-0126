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


const dMsg =  document.querySelector('.msg');
const btnLeer = document.querySelector('#btnLeer');
const pTexto = document.querySelector('#pTexto');
const sVoces = document.querySelector('#sVoces');
let vocesDisponibles = [];

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
        console.log( index, voz);
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