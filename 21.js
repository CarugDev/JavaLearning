
// Arrow functions

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)


aprendiendo ('JavaScript')



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
meses.forEach(mes => {
    if (mes == 'Marzo') {
            console.log('Marzo si existe');
    }
});

let resultado;

//Some ideal apra arreglo de objetos
resultado = carrito.some( producto => producto.nombre == 'Celular');

// Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio , 0)


//Filter
resultado = carrito.filter( producto => producto.nombre !== 'Celular');
console.log(resultado);

