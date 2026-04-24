/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');   

const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');


    

/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = inputEmail.value;
    const password1 = inputPassword.value;
    const password2 = inputPasswordRepetida.value;
    
    console.log('Envio de formulario');

    if ( !compararContrasenias( password1, password2 )){
        alert('Las contraseñas No son iguales');
        return;
    }

    const datos = {
        email: email,
        password: password1
    }

    console.log(datos);

    realizarRegister(datos);
});

/* -------------------------------------------------------------------------- */
/*                    FUNCIÓN 2: Realizar el signup [POST]                    */
/* -------------------------------------------------------------------------- */
function realizarRegister(datos) {
    const endPoint = 'https://api-tasks-50dt.onrender.com/api/auth/register';
    const config = {
        method: 'POST',
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(datos)
    };
    fetch(endPoint, config).then( respsonse => {
        console.log( respsonse );
        return respsonse.json();
    }).then( json => {
        console.log( json );
        // Cambiamos la URL
        location.replace('index.html');
        
    }).catch( error => {
        console.error(error);
    })


};
