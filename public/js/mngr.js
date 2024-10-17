document.addEventListener('DOMContentLoaded', () => {
    // Desplazamiento suave para la barra de navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        // Obtiene el destino al que se debe hacer scroll
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Desplazamiento suave hacia la sección correspondiente
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        });
    });
    
    // Animación suave de aparición para las secciones visibles
    const sections = document.querySelectorAll('.projects, .contact, .hero');

    const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    // Añadir clases de animación cuando la sección se haga visible en pantalla
    const animateOnScroll = () => {
    sections.forEach(section => {
        if (isInViewport(section)) {
        section.classList.add('animate-fade-in');
        }
    });
    };

    // Llamar a la función al hacer scroll
    window.addEventListener('scroll', animateOnScroll);

    // Desplazamiento suave en clic de botones
    const buttons = document.querySelectorAll('.btn, .btn-secondary');

    buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
        this.style.transform = 'scale(1)';
        }, 200); // El efecto de escalado dura 200ms
    });
    });

    // Efecto de transición suave para los enlaces de la barra de navegación
    document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'color 0.3s ease';
        this.style.color = '#9b59b6'; // Cambia el color al pasar el mouse
    });

    link.addEventListener('mouseleave', function() {
        this.style.color = 'white'; // Vuelve a su color original
    });
    });

    // Animación de gradiente de fondo (opcional)
    let body = document.querySelector('body');
    let gradientDirection = 1;

    const animateBackgroundGradient = () => {
    let gradientColors = ['#9b59b6', '#8e44ad', '#2ecc71', '#9b59b6'];
    gradientDirection = (gradientDirection + 0.01) % 1;
    body.style.background = `linear-gradient(${135 * gradientDirection}deg, ${gradientColors.join(', ')})`;
    requestAnimationFrame(animateBackgroundGradient);
    };

    animateBackgroundGradient();

    // Efecto parpadeo de la hero-title
    document.querySelector('.hero-title').addEventListener('mouseenter', function () {
    this.style.animation = 'pulse 2s infinite ease';
    });

    document.querySelector('.hero-title').addEventListener('mouseleave', function () {
    this.style.animation = '';
    });

    // Animación para que los textos se vayan revelando mientras se hace scroll
    document.querySelectorAll('.animate-fade-in').forEach(item => {
    item.style.transition = 'opacity 0.5s ease-in-out';
    item.style.opacity = '0'; // Inicialmente invisible
    });

    // Cargar idioma por defecto
    loadTranslations('es');  // Cambia 'es' a 'en' para ver el idioma en inglés

    // Cambiar idioma al seleccionar del dropdown
    document.getElementById("language").addEventListener("change", function(event) {
        const selectedLanguage = event.target.value;
        loadTranslations(selectedLanguage);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');  // Alterna la clase 'show' para mostrar u ocultar el menú
        menuToggle.classList.toggle('active');  // (Opcional) Cambia el estado activo del ícono
    });

    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");
    const threshold = 10; // Mínimo desplazamiento antes de cambiar el estado del nav
    let isScrollingDown = false;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        // Detectar si estamos desplazándonos hacia abajo o hacia arriba
        if (scrollTop > lastScrollTop + threshold) {
            // Desplazamiento hacia abajo
            if (!isScrollingDown) {
                navbar.classList.add("hidden-nav");
                isScrollingDown = true;
            }
        } else if (scrollTop < lastScrollTop - threshold) {
            // Desplazamiento hacia arriba
            if (isScrollingDown) {
                navbar.classList.remove("hidden-nav");
                isScrollingDown = false;
            }
        }

        lastScrollTop = scrollTop;
    });




});


  