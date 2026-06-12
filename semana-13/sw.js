const CACHE_NAME = 'mi-cache-v1';
const listaDeArchivos = [
    '/',
    'index.html',
    'style.css',
    'js/app.js',
    'icons/icon-192.png',
    'manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css'
]

self.addEventListener('install', e => {
    const cache = caches.open(CACHE_NAME).then( cache => {
        return cache.addAll( listaDeArchivos);
    })
    e.waitUntil(cache)
})
// 1ro Cache, sino 2 Net
self.addEventListener('fetch', (e) => {
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
