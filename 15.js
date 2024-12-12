//Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 500},
    {nombre: 'Audifonos', precio: 500},
    {nombre: 'Teclado', precio: 500},
    {nombre: 'Celular', precio: 50},
    {nombre: 'Bocinas', precio: 20},
    {nombre: 'Laptop', precio: 500},
];

// For each
meses.forEach(function(mes){
    if (mes == 'Marzo') {
            console.log('Marzo si existe');
    }
});

//Includes
let resultado = meses.includes('Diciembre');

//Some ideal apra arreglo de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == 'Celular'
})

// Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio 
}, 0);


//Filter
resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});


console.log(resultado);
