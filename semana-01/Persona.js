class Persona {
    // Atributos
    nombre = '';
    email = '';
    constructor(nombre, email){
        this.nombre=nombre;
        this.email=email;
    }

    // methods
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
}
