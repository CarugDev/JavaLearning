//For loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`El numero ${i} es par`);
//     }   else {
//         console.log(`El numero ${i} es impar`);
//     } 
// }

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}
// While loop

// let i = 0; //Indice

// while (i < carrito.length) { //Condicion 

//     console.log(carrito[i].nombre);
//     i++; //Incremento
// }

// Do while loo

let i = 0;

do {
    console.log(i);

    i++;
} while (i < 10);