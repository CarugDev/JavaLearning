//This

const reservacion = {
    nombre: 'Juan',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Uriel',
    apellido: 'De la torre',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();