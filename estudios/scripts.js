document.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido a mi página web!');
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Validación simple
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('¡Gracias por tu mensaje, ' + nombre + '!');
        // Aquí podrías enviar los datos del formulario a un servidor.
    }
});
