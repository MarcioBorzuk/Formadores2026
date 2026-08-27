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


/* Prepara a imagem para girar e indica ao usuário que ela é clicável */
.card-img {
    transition: transform 0.6s ease-in-out;
    cursor: pointer;
};

/* Classe aplicada via JavaScript para fazer o giro de 360 graus */
.rotate-effect {
    transform: rotate(360deg);
};

    
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

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todas as imagens com a classe .card-img
    const cardImages = document.querySelectorAll('.card-img');

    cardImages.forEach(img => {
        img.addEventListener('click', () => {
            // Se já estiver girando, evita múltiplos cliques seguidos
            if (img.classList.contains('rotate-effect')) return;

            // Adiciona a classe da animação
            img.classList.add('rotate-effect');

            // Remove a classe após 600ms (tempo da animação) para poder girar de novo
            setTimeout(() => {
                img.classList.remove('rotate-effect');
            }, 600);
        });
    });

});
