/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');

/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = inputEmail.value;
    const password = inputPassword.value;


    const datos = { 
        email,
        password
    }

    realizarLogin(datos);
});


/* -------------------------------------------------------------------------- */
/*                     FUNCIÓN 2: Realizar el login [POST]                    */
/* -------------------------------------------------------------------------- */
function realizarLogin(settings) {
       
    const endPoint = 'https://api-tasks-50dt.onrender.com/api/auth/login';
    const config = {
        method: 'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(settings)
    };
    fetch(endPoint, config).then( respsonse => {
        console.log( respsonse );
        return respsonse.json();
    }).then( json => {
        console.log( json );
        // Guardamos el token en el localstorage
        if( json.token){
            localStorage.setItem('jwt', json.token);
            location.replace('tareas.html');
        }

    }).catch( error => {
        console.error(error);
    }).finally( () => {
        
    })

};
