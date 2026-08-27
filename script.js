document.addEventListener('DOMContentLoaded', () => {
    // Menu Responsivo Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Rolar suavemente para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function rotacionarImagem(elemento) {
    // Adiciona a classe que faz girar
    elemento.classList.add('rotate-effect');
    
    // Remove a classe após a animação (600ms) para permitir clicar e girar de novo
    setTimeout(() => {
        elemento.classList.remove('rotate-effect');
    }, 600);
}
