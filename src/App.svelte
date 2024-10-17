<script>
    import { FaTwitter, FaEnvelope } from 'svelte-icons/fa';
    import ContactForm from './lib/ContactForm.svelte';
    import MyXP from './lib/MyXP.svelte';
</script>

<!-- Navbar -->
<header>
    <nav id="navbar" aria-label="Menú principal">
        <ul id="menu-lista" class="nav-list">
            <li><a href="#home" class="nav-link" aria-label="Ir a inicio" id="home-link">Home</a></li>
            <li><a href="#projects" class="nav-link" aria-label="Ver proyectos" id="projects-link">Proyectos</a></li>
            <li><a href="#xp" class="nav-link" aria-label="Conocer mi experiencia" id="xp-link">experiencia</a></li>
            <li><a href="#contact" class="nav-link" aria-label="Ir a contacto" id="contact-link">Contacto</a></li>
            <li>
                <select id="language" class="language-dropdown" aria-label="Seleccionar idioma">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </li>
        </ul>
        <div id="menu-mobile" class="menu-toggle">
            <span class="menu-icon"></span>
        </div>
    </nav>
</header>

<!-- Hero Section -->
<section id="home" class="hero">
    <div class="hero-content">
        <h1 class="hero-title" id="hero-title">Hola, soy DEVLII</h1>
        <p class="hero-description" id="hero-description">Desarrollador RPA, Creador de Soluciones Digitales.</p>
        <a href="#projects" class="btn btn-primary" id="explore-projects-btn">Explorar mis proyectos</a>
    </div>
</section>

<!-- Proyectos -->
<section id="projects" class="projects">
    <h2 class="section-title" id="projects-title">Proyectos Destacados</h2>
    <div class="project-list">
        <!-- Los proyectos serán agregados aquí por el JavaScript -->
    </div>
</section>

<MyXP />

<ContactForm />
