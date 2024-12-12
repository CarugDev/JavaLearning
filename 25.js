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

//For each  
carrito.forEach(producto => console.log(producto.nombre));

//Map 
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo2);