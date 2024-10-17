<script>
    import { FaTwitter, FaEnvelope, FaLinkedin } from 'svelte-icons/fa';
    import { submitForm } from './js/contactForm.js'; // Importa la función

    let email = '';
    let message = '';
    let showMessage = false; // Control para mostrar el mensaje de éxito
    let countdown = 0; // Temporizador de cuenta regresiva
    let successMessage = ''; // Mensaje de éxito
    let countdownMessage = '';

    // Mensajes de éxito en diferentes idiomas
    const messages = {
        en: "I've received your message!",
        es: "¡He recibido tu mensaje!",
    };

    const countdownText = {
        en: "You can send a new message in...",
        es: "Podrás enviar otro mensaje en...",
    };

    async function handleSubmit(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Intentar leer el idioma del select existente
        let selectedLanguage = 'en'; // Valor por defecto en inglés
        try {
            const languageDropdown = document.getElementById('language');
            selectedLanguage = languageDropdown.value; // Intenta obtener el valor seleccionado
        } catch (error) {
            console.error('Error al leer el idioma:', error);
        }

        try {
            const result = await submitForm(email, message); // Llama a la función importada
            console.log(result); // Maneja la respuesta del servidor
            
            // Vaciar los campos del formulario
            email = '';
            message = '';

            // Mostrar mensaje de éxito según el idioma seleccionado
            successMessage = messages[selectedLanguage];
            countdownMessage = countdownText[selectedLanguage];
            showMessage = true;
            countdown = 15; // Iniciar cuenta regresiva de 15 segundos - Comprobación paralela debe hacerse en el backend.
            
            const timer = setInterval(() => {
                if (countdown > 0) {
                    countdown -= 1;
                } else {
                    clearInterval(timer);
                    showMessage = false; // Ocultar mensaje
                }
            }, 1000); // Actualizar cada segundo
        } catch (error) {
            // Maneja el error aquí
            console.error('Error al enviar el mensaje:', error);
        }
    }
</script>

<section id="contact" class="contact">
    <div class="contact-info">
        <p>Correo: 
            <a href="mailto:leomaureira.dev@gmail.com">
                <FaEnvelope size="0.2" style="margin-right: 5px;" /> leomaureira.dev@gmail.com
            </a>
        </p>
        <p>Redes Sociales:
            <a href="https://twitter.com/DEV_LII" target="_blank" rel="noopener">
                <FaTwitter class="icon" size="0.2" style="margin-right: 5px;" /> Twitter
            </a> |
            <a href="https://www.linkedin.com/in/leandro-maureira-769b82186/" target="_blank" rel="noopener">
                <FaLinkedin style="width: 1.5rem; height: 1.5rem; fill: white; margin-right: 5px;" /> LinkedIn
            </a>
        </p>
    </div>

    <h2 class="section-title" id="contact-title">Contacto</h2>

    <form on:submit={handleSubmit}>
        <label for="email" class="form-label" id="contact-email-label">Correo Electrónico:</label>
        <input type="email" id="email" name="email" bind:value={email} placeholder="Tu correo" required class="form-input" aria-required="true">

        <label for="message" class="form-label" id="contact-message-label">Mensaje:</label>
        <textarea id="message" name="message" bind:value={message} placeholder="Tu mensaje" required class="form-input" aria-required="true" maxlength="3000"></textarea>
        <div class="character-count">
            {message.length} / 3000 caracteres
        </div>
        <button type="submit" class="btn btn-primary" id="contact-submit" disabled={countdown > 0}>Enviar</button>
    </form>

    {#if showMessage}
        <div class="success-message">
            {successMessage}
            {#if countdown > 0}
                <span> ({countdownMessage} {countdown}s)</span>
            {/if}
        </div>
    {/if}

    <style>
        .character-count {
            font-size: 0.9rem; /* Tamaño de letra para el contador */
            color: #666; /* Color del texto */
        }
        .success-message {
            background-color: #d4edda; /* Color de fondo verde claro */
            color: #155724; /* Color del texto */
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #c3e6cb; /* Color del borde */
            border-radius: 5px;
        }
    </style>
</section>
