document.addEventListener('DOMContentLoaded', () => {
    const button = 
    document.getElementById('greetingButton');

    button.addEventListener('click', () => {
        alert('Hola!');
        event.stopPropagation();
    });

    const buttonContainer = 
    document.querySelector('.button-container');

    buttonContainer.addEventListener('click', () => {
        alert('Hola!, soy el div');
    });


});