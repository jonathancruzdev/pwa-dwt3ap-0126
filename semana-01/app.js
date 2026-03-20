console.log('PWA');

function chau( ){
    console.log('Chau!')
}

const p1 = {
    // Atributos
    nombre: 'Sofia',
    apellido: 'Herrera',
    edad: 25,
    admin: false,
    lenguajes: ['HTML', 'CSS', 'PHP'],
    domicilio: {
        calle: 'Siempre viva 123',
        cp: 1203
    },
    mostrarLenguajes(){
        console.table(this.lenguajes)
    },
    agregarLenguaje(lenguaje){
        this.lenguajes.push(lenguaje);
    },
    // Metodos
    saludar: function(){
        alert('Hola');
    },
    saludar2: function chau( ){
        console.log('Chau!')
    }
}



const p2 = {
    nombre: 'Juan',
    apellido: 'Ruiz'
}

p1.nombre = 'Maria';
console.log(p1.nombre);
console.log(p1.domicilio.calle);
p1.agregarLenguaje('JavaScript')
p1.mostrarLenguajes();


const persona = new Persona('Juan','Juan@dv.edu.ar' );

console.log(persona)


const h1 = document.querySelector('h1');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');

h1.textContent = "Semana 01";

persona.showEmail(email)


localStorage.setItem('nombre', 'Juilia');
localStorage.getItem('nombre')