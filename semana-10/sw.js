const CACHE_NAME = 'mi-cache-v1';
const listaDeArchivos = [
    '/',
    'index.html',
    'style.css',
    'app.js',
    'notas.txt',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css'
]

self.addEventListener('install', e => {
    // Abro el caché
    const cache = caches.open(CACHE_NAME).then( cache => {
        return cache.addAll( listaDeArchivos);
    })
    // Espero a que termine
    e.waitUntil(cache)
})

/// III. Primero Net y luego Cache
self.addEventListener('fetch', (e) => {
    // 1 Net

    const respuesta = fetch( e.request)
        .then( resNet => {
            // Guardar en el cache lo nuevo
            return caches.open(CACHE_NAME).then( cache => { 
                //cache.put( e.request, resNet.clone());
                return resNet;
            })
        // Si no hay conexión
        }).catch( error => {
            return caches.match( e.request)
        })
    e.respondWith( respuesta );
})



// II. Primero cache y luego net
/*
self.addEventListener('fetch', (e) => {
    //const url = e.request.url;
    // 1ro Cache, sino 2 Net
    const respuesta = caches.match( e.request).then( resCache => {
        if( resCache){
            return resCache;
        } else {
            return fetch( e.request).then( resNet => {
                return resNet
            })
        }
    })
   
    e.respondWith( respuesta );
})
*/

// I. Solo caché
/*
self.addEventListener('fetch', (e) => {
    const url = e.request.url;
    const respustaCache = caches.match( e.request);
    e.respondWith( respustaCache );
})
    */