// ==========================================================================
//                    CARROSSEL DE IMAGENS
// ==========================================================================

const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.carousel-dots span');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;

// Função para mostrar o slide
function showSlide(slideIndex) {
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }
    const offset = currentSlide * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Atualiza os pontos indicativos
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Eventos dos botões
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

//  Evento dos pontos indicativos
dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        const slideIndex = parseInt(event.target.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});

// Troca automática de slides a cada 5 segundos
setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
// OBS: Retirado, mas pode ser ativado conforme a necessidade

// ==========================================================================
//                           PRODUTO  
// ==========================================================================

function scrollToDetails() {
    document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================================================
//                           SOBRE O CRIADOR  
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.history-text p');
    elements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            el.style.color = 'var(--corBotoesHover)';
            el.style.transition = 'color 0.3s ease';
        });
        el.addEventListener('mouseleave', () => {
            el.style.color = '#333';
        });
    });
});