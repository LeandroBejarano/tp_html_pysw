const btnDark = document.getElementById('dark-toggle');

btnDark.addEventListener('click', () => {
    // 1. Cambia el color de la página
    document.body.classList.toggle('dark-mode');
    
    // 2. Cambia el dibujito del botón
    if (document.body.classList.contains('dark-mode')) {
        btnDark.textContent = '☀️'; // Si está oscuro, pone el sol
    } else {
        btnDark.textContent = '🌙'; // Si está claro, pone la luna
    }
});