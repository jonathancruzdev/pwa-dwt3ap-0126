import { getUsers, getProductsByIds, getCartsByUser } from './data/ecommerce.js';

const btnIniciar = document.querySelector('#btn-iniciar');


btnIniciar.addEventListener('click', async () => {

    const users = await getUsers();
    const carts = await getCartsByUser( users[0].id);
    console.table(users);
    console.table(carts);


/* 
   getUsers().then( users => {
        return users

   }).then(users => {
        getCartsByUser(users[0]);

   }). catch( res => {
    console.error('Error al obtener los')
   })
 */
  
    //saludar('Juan', algo)
})


function mostrarUsuarios ( usuarios){
    console.table(usuarios)
}

function saludar( nombre, fn){
    console.log('Hola ' + nombre);
    fn();
}

function algo(){
    console.log('Algo');
}

const promesa = new Promise( (resolve, reject) => {
    const exito =  true;
    if( exito) {
        resolve('Todo Ok 👍');
    } else {
        reject('Falle 😒');
    }

} )


promesa
    .then( res => {
        console.log( res)
    }).catch( res => {
        console.error('Fallo');
    })


const endpoint = 'https://jsonplaceholder.typicode.com/users';

fetch( endpoint )
    .then( response => response.json())
    .then( json => {
        console.log( json);
    }).catch( () => {
        console.error('Ups tenemos un error 😒');
    })