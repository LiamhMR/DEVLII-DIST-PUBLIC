async function loadTranslations(language = 'es') {
    try {
        const response = await fetch('/json/translation.json');
        const translations = await response.json();

        const selectedTranslations = translations[language];

        //MENU
        document.querySelector('#home-link').textContent = selectedTranslations.menu[0];
        document.querySelector('#projects-link').textContent = selectedTranslations.menu[1];
        document.querySelector('#xp-link').textContent = selectedTranslations.menu[2];
        document.querySelector('#contact-link').textContent = selectedTranslations.menu[3];

        // Título de proyectos
        document.querySelector('#projects-title').textContent = selectedTranslations.projects.title;

        // Limpiar el contenedor de proyectos antes de agregar nuevos elementos
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';

        // Iterar sobre la lista de proyectos del JSON
        selectedTranslations.projects.list.forEach((project, index) => {
            // Crear los elementos de cada proyecto
            const projectElement = document.createElement('article');
            projectElement.classList.add('project');

            const titleElement = document.createElement('h3');
            titleElement.classList.add('project-title');
            titleElement.textContent = project.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.classList.add('project-description');
            descriptionElement.textContent = project.description;

            const linkElement = document.createElement('a');
            linkElement.classList.add('btn', 'btn-secondary');
            linkElement.href = project.link;
            linkElement.textContent = project.linktext;

            // Añadir los elementos al artículo del proyecto
            projectElement.appendChild(titleElement);
            projectElement.appendChild(descriptionElement);
            projectElement.appendChild(linkElement);

            // Añadir el proyecto a la lista
            projectList.appendChild(projectElement);
        });

        // Aplicar las traducciones a otros elementos
        document.querySelector('#hero-title').textContent = selectedTranslations.home.title;
        document.querySelector('#hero-description').textContent = selectedTranslations.home.description;
        document.querySelector('#explore-projects-btn').textContent = selectedTranslations.home.button;
        document.querySelector('#contact-title').textContent = selectedTranslations.contact.title;
        document.querySelector('#contact-email-label').textContent = selectedTranslations.contact.email_label;
        document.querySelector('#contact-message-label').textContent = selectedTranslations.contact.message_label;
        document.querySelector('#contact-submit').textContent = selectedTranslations.contact.submit_button;

        //SECCIÓN DE XP

        // Limpiar el contenedor de experiencia antes de agregar nuevos elementos
        const experienceList = document.querySelector('#xp');
        experienceList.innerHTML = '';

        // Título de la sección de experiencia
        const experienceTitle = document.createElement('h2');
        experienceTitle.textContent = selectedTranslations.experience.title;
        experienceList.appendChild(experienceTitle);

        // Iterar sobre la lista de experiencias del JSON
        selectedTranslations.experience.list.forEach((experience) => {
            // Crear los elementos de cada experiencia
            const experienceElement = document.createElement('div');
            experienceElement.classList.add('experience-item');

            const roleElement = document.createElement('h3');
            roleElement.textContent = `${experience.role} - ${experience.company}`;

            const dateElement = document.createElement('p');
            dateElement.innerHTML = `<strong>${experience.date}</strong> | ${experience.location}`;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = experience.description;

            const skillsList = document.createElement('ul');
            experience.skills.forEach(skill => {
                const skillItem = document.createElement('li');
                skillItem.textContent = skill;
                skillsList.appendChild(skillItem);
            });

            // Crear el elemento de imagen
            const imgElement = document.createElement('img');
            imgElement.src = experience.img; // Usar la URL de la imagen del JSON
            imgElement.alt = `${experience.role} en ${experience.company}`; // Texto alternativo para la imagen
            imgElement.classList.add('experience-image'); // Añadir clase para el estilo

            // Añadir los elementos al artículo de experiencia
            experienceElement.appendChild(imgElement);
            experienceElement.appendChild(roleElement);
            experienceElement.appendChild(dateElement);
            experienceElement.appendChild(descriptionElement);
            experienceElement.appendChild(skillsList);

            // Añadir la experiencia a la lista
            experienceList.appendChild(experienceElement);
        });

    } catch (error) {
        console.error('Error al cargar las traducciones:', error);
    }
}
