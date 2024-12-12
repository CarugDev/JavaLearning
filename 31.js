
const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission  == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/02.png',
        body: 'Codigo con Uriel, los mejores tutoriales'
    })
}