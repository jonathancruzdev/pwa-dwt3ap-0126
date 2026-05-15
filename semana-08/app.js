const worker = new Worker('worker.js');


let valor = 1;
worker.postMessage( valor );

worker.onmessage = ( e ) => {
    console.log('Dato recibido desde el worker', e.data)
    console.log('Dato recibido desde el web Worker')
}
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    console.log('Se hizo click')
})

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
