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


