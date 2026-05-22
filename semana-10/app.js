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

/* 
const listaDeArchivos = [
    '/',
    'index.html',
    'style.css',
    'app.js',
    'notas.txt'
]
// Primero abrimos el cache
caches.open('mi-cache').then( cache => {
    // Guardamos una archivo ->  cache.add('notas.txt');
    cache.addAll( listaDeArchivos );
    // Verificamos si existe en el cache
    cache.match('app.js').then( resp => {
        console.log(resp);
    })
})

// Verificamos si existe el cache
caches.has('mi-cache-v2').then( resp => {
    console.log(resp);
}) */