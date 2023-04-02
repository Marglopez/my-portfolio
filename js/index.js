const traduccionIdiomas = {

    // Seccion navegación
    "barra-navegacion__sobre-mi": {
        "es": "Sobre mí",
        "en": "About me"
    },

    "barra-navegacion__portafolio": {
        "es": "Portafolio",
        "en": "Portfolio"
    },

    "barra-navegacion__habilidades": {
        "es": "Habilidades",
        "en": "Skills"
    },

    "barra-navegacion__educacion": {
        "es": "Educacion",
        "en": "Education"
    },

    "barra-navegacion__contacto": {
        "es": "Contacto",
        "en": "Contact"
    },

    // Seccion sobre mi
    "sobre-mi__titulo": {
        "es": `<i class="bi bi-person-fill"></i> Sobre mí`,
        "en": `<i class="bi bi-person-fill"></i> About me`
    },

    "sobre-mi__descripcion": {
        "es": `Soy un ingeniero en tecnologías de la Información con 5+ años de experiencia trabajando con tecnologías como <span class="fw-bold color-primario">HTML, CSS, SASS, Bootstrap, Tailwind CSS, JavaScript, React, Angular, PHP, Python, SQL</span>. Realmente disfruto lo que hago y estoy en busca de una oportunidad laboral donde pueda aportar mis conocimientos y crecer tanto personal como profesionalmente.`,
        "en": `I am an IT Engineer with 5+ years of experience working with technologies like <span class="fw-bold color-primario"> HTML, CSS, SASS, Bootstrap, Tailwind CSS, JavaScript, React, Angular, PHP, Python, SQL</span>. I really enjoy what I do and I am looking for a job opportunity where I can contribute with my knowledge and grow personally and professionally.`
    },

    "boton-cv": {
        "es": `<i class="bi bi-file-earmark-arrow-down-fill"></i> Descargar CV`,
        "en": `<i class="bi bi-file-earmark-arrow-down-fill"></i> Download CV`
    },

    "boton-cv__espanol": {
        "es": `Español`,
        "en": `Spanish`
    },

    "boton-cv__ingles": {
        "es": `Inglés`,
        "en": `English`
    },

    // Seccion portafolio
    "portafolio__titulo": {
        "es": `<i class="bi bi-briefcase-fill"></i> Portafolio</h2>`,
        "en": `<i class="bi bi-briefcase-fill"></i> Portfolio</h2>`
    },

    "proyecto__nombre--muebles": {
        "es": `Eccommerce Muebles`,
        "en": `Furniture Eccomerce`
    },

    "proyecto__descripcion--muebles": {
        "es": `Diseño de sitio web para ver y comprar diferentes modelos de muebles.`,
        "en": `Website design to see and buy different types of home furniture.`
    },

    "proyecto__nombre--citas": {
        "es": `Administración de citas veterinaria`,
        "en": `veterinary appointments management`
    },

    "proyecto__descripcion--citas": {
        "es": `Aplicación web para administrar las citas de los pacientes de una veterinaria.`,
        "en": `Web App to manage the appointments of the patients of a veterinary.`
    },

    "proyecto__descripcion--delivery": {
        "es": `Diseño de sitio web de una aplicación de entrega de comida a domicilio.`,
        "en": `Website design for a food delivery application.`
    },

    // Habilidades
    "habilidades__titulo": {
        "es": `<i class="bi bi-star-fill"></i> Habilidades`,
        "en": `<i class="bi bi-star-fill"></i> Skills`
    },

    "lenguajes__titulo": {
        "es": `Lenguajes`,
        "en": `Languages`
    },

    "frameworks__titulo": {
        "es": `Frameworks, librerías y entornos`,
        "en": `Frameworks, libraries and environments`
    },

    "lenguajes-programacion__titulo": {
        "es": `Lenguajes de programación`,
        "en": `Programming languages`
    },

    "bases-datos__titulo": {
        "es": `Bases de datos`,
        "en": `Databases`
    },

    // Educacion
    "educacion__titulo": {
        "es": `Educación`,
        "en": `Education`
    },

    "educacion__grado": {
        "es": `<i class="bi bi-mortarboard-fill"></i> 2017 - Ingeniero en Tecnologías de la Información.`,
        "en": `<i class="bi bi-mortarboard-fill"></i> 2017 - Information Technology Engineer.`
    },

    // Contacto
    "contacto__titulo": {
        "es": `<i class="bi bi-phone"></i> Contacto`,
        "en": `<i class="bi bi-phone"></i> Contact`
    },

    "contacto__telefono": {
        "es": `Teléfono`,
        "en": `Cell phone`
    },
    
}

function CambiarIdioma(idioma) {
    // if(idioma === "en"){
    // Iteramos el objeto de traduccion cada que se presiona uno de los botones para cambiar de idioma
    for (let [key, value] of Object.entries(traduccionIdiomas)) {
        // console.log(`${key}: ${value}`);

        // Por cada iteracion obtenemos cada uno de los elementos del HTML que se traducirán
        let elemento = document.querySelector('.' + key);

        // Le asignamos al elemento el texto en el idioma seleccionado
        elemento.innerHTML = value[idioma];
    }
    // }
}