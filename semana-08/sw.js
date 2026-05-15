console.log('Hola desde el SW 👋 17');

self.addEventListener('fetch', (e) => {
    const url = e.request.url;
    console.log(url);
    // Vamos a modificar la respuesta
    e.respondWith(
        fetch( url ).then( res => {
            
            if( res.status == 404){
                return fetch('images/monitor.png');
            } else {
                return res;
            }
           /*  if( url.includes('true.png')){
                return fetch('images/false.png');
            } else {
                return res;
            } */
        })
    )
})