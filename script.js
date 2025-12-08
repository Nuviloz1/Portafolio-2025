// Este código JavaScript es para añadir una pequeña interactividad a la página.

document.addEventListener('DOMContentLoaded', function() {
    // 1. Mostrar un mensaje en la consola del navegador
    console.log("Portfólio de Nuvia Lozada carregado com sucesso!");

    // 2. Ejemplo de interactividad: Al hacer clic en un enlace del menú,
    //    podemos cambiar ligeramente el color del cabeçalho (Header)

    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Un pequeño cambio visual al hacer clic
            header.style.backgroundColor = '#16a085'; // Cambia el color a un verde oscuro
            
            // Revertir el color después de 0.5 segundos (500 milisegundos)
            setTimeout(() => {
                header.style.backgroundColor = '#3498db'; // Vuelve al azul original
            }, 500);
        });
    });
});
// Este código JavaScript es para añadir una pequeña interactividad a la página.

document.addEventListener('DOMContentLoaded', function() {
    // 1. Mostrar un mensaje en la consola del navegador
    console.log("Portfólio de Nuvia Lozada carregado com sucesso!");

    // 2. Ejemplo de interactividad: Al hacer clic en un enlace del menú,
    //    podemos cambiar ligeramente el color del cabeçalho (Header)

    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Un pequeño cambio visual al hacer clic
            header.style.backgroundColor = '#16a085'; // Cambia el color a un verde oscuro
            
            // Revertir el color después de 0.5 segundos (500 milisegundos)
            setTimeout(() => {
                header.style.backgroundColor = '#3498db'; // Vuelve al azul original
            }, 500);
        });
    });
});