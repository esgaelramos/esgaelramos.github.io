// LANGUAGE FUNCTIONS
const translations = {
  es: {
    // SECTION 2 - EXPERIENCE
    experience: "Experiencia",
    "experience-job1-title": "Desarrollador Python Junior",
    "experience-job1-time": "Abril 2022 - Noviembre 2022",
    "experience-job1-company": "Podemos Progresar / MicroFinance",
    "experience-job2-title": "Desarrollador Python",
    "experience-job2-time": "Febrero 2023 - Septiembre 2023",
    "experience-job2-company": "Insignia Life | Seguros",
    "experience-job3-title": "Consultor Fullstack",
    "experience-job3-time": "Septiembre 2023 - Presente",
    "experience-job3-company": "Independiente / Native Labs",
    "experience-job1-details": `
            <ul>
                <li>Mantenimiento y soporte de sistemas heredados con PostgreSQL.</li>
                <li>Implementación de lógica de negocios en Django y pruebas con Unit Tests.</li>
                <li>Aplicación de TDD, GitFlow, Code Reviews y SonarQube en un entorno GitLab.</li>
            </ul>
        `,
    "experience-job2-details": `
            <ul>
                <li>Automatización de procesos con Selenium, Pandas y OpenPyXL.</li>
                <li>Desarrollo de un sistema de tickets con Django-HelpDesk & Docker Grafana/Loki.</li>
                <li>Sincronización de bases de datos MySQL y OracleDB.</li>
                <li>Despliegue con CI/CD en BitBucket.</li>
            </ul>
        `,
    "experience-job3-details": `
            <ul>
                <li>Desarrollo de microservicios con FastAPI y React.</li>
                <li>Gestión de servidores en AWS, DigitalOcean y Azure.</li>
                <li>Documentación de APIs y gestión de bases de datos.</li>
            </ul>
        `,
    "experience-more-btn": "Conocer Más",
    "experence-tech-used": "Tencnologías Usadas",
    // === === === === === === === ===  
    // SECTION 4 - ABOUT
    about: "Sobre Mí",
    "about-title": "Desarrollador Python BackEnd",
    "about-typewriter": "Te cuento",
    experience: "Experiencia",
    "experience-text": "He trabajado en diversos proyectos de backend, desde APIs hasta microservicios escalables.",
    skills: "Habilidades",
    "skills-text": "Python, FastAPI, Django, AWS, Docker, CI/CD, PostgreSQL, Redis.",
    contact: "Contacto",
    "contact-wa": "Mi WhatsApp",
    "contact-mail": "Envíame un Correo",
    "contact-github": "Mi GitHub",
    "contact-cv": "Descargar CV",
    "contact-pre-science": "LA CIENCIA QUE NO ENTENDEMOS, PARECE MAGIA.",
    "contact-pos-science": "LA QUE ENTENDEMOS, PUEDE HACER MAGIA.",
    "contact-footer": "¡Cada Día es un Día!",
    // === === === === === === === ===  
  },
  en: {
    // SECTION 2 - EXPERIENCE
    experience: "Experience",
    "experience-job1-title": "Python Junior Developer",
    "experience-job1-time": "April 2022 - November 2022",
    "experience-job1-company": "Podemos Progresar / MicroFinance",
    "experience-job2-title": "Python Developer",
    "experience-job2-time": "February 2023 - September 2023",
    "experience-job2-company": "Insignia Life | Insurance",
    "experience-job3-title": "Fullstack Consultant",
    "experience-job3-time": "September 2023 - Present",
    "experience-job3-company": "Self-Employed / Native Labs",
    "experience-job1-details": `
            <ul>
                <li>Maintained and supported legacy systems with PostgreSQL.</li>
                <li>Implemented business logic in Django and tested with Unit Tests.</li>
                <li>Applied TDD, GitFlow, Code Reviews, and SonarQube in GitLab.</li>
            </ul>
        `,
    "experience-job2-details": `
            <ul>
                <li>Automated processes with Selenium, Pandas, and OpenPyXL.</li>
                <li>Developed a ticketing system with Django-HelpDesk & Docker Grafana/Loki.</li>
                <li>Synchronized MySQL and OracleDB databases.</li>
                <li>Deployment using CI/CD in BitBucket.</li>
            </ul>
        `,
    "experience-job3-details": `
            <ul>
                <li>Developed microservices with FastAPI & React.</li>
                <li>Managed cloud servers on AWS, DigitalOcean, and Azure.</li>
                <li>API documentation and database management.</li>
            </ul>
        `,
    "experience-more-btn": "Learn More",
    "experence-tech-used": "Technologies Used",
    // === === === === === === === ===  
    // SECTION 4 - ABOUT
    about: "About Me",
    "about-title": "Python BackEnd Developer",
    "about-typewriter": "I say",
    experience: "Experience",
    "experience-text": "I have worked on various backend projects, from APIs to scalable microservices.",
    skills: "Skills",
    "skills-text": "Python, FastAPI, Django, AWS, Docker, CI/CD, PostgreSQL, Redis.",
    contact: "Contact",
    "contact-wa": "My WhatsApp",
    "contact-mail": "Send me an Email",
    "contact-github": "My GitHub",
    "contact-cv": "Download CV",
    "contact-pre-science": "THE SCIENCE YOU DON'T KNOW, LOOKS LIKE MAGIC.",
    "contact-pos-science": "SCIENCE YOU KNOW, CAN DO MAGIC.",
    "contact-footer": "Every Day is a Day!",
    // === === === === === === === ===  
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.getAttribute("data-lang");
    element.innerText = translations[lang][key] || "";
  });

  localStorage.setItem("lang", lang);
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));


// SCROLL FUNCTIONS
const targets = document.querySelectorAll('[data-observer]');
const images = document.querySelectorAll('[data-img]');
const options = { rootMargin: '0px', threshold: 1.0 };

const addClass = (el) => el.classList.add('is-visible');
const removeClass = (el) => el.classList.remove('is-visible');

const doThings = (entries) => {
  entries.forEach(entry => {
    entry.isIntersecting ? addClass(entry.target) : removeClass(entry.target);
  });
};

const observer = new IntersectionObserver(doThings, options);
const observer2 = new IntersectionObserver(doThings, { ...options, threshold: 0.4 });

targets.forEach(target => observer.observe(target));
images.forEach(target => observer2.observe(target));


// EXPERIENCE FUNCTIONS
function toggleExperience(id) {
  const modal = document.getElementById("experience-modal");
  const details = document.getElementById("modal-details");

  if (!id) {
      modal.classList.remove("active");
      return;
  }

  const title = translations[currentLang][`experience-job${id}-title`] || "No Title";
  const company = translations[currentLang][`experience-job${id}-company`] || "No Company";
  const time = translations[currentLang][`experience-job${id}-time`] || "No Time";
  const detailsText = translations[currentLang][`experience-job${id}-details`] || "<p>No details available.</p>";

  const experienceTechnologies = {
      1: ["Python", "Django", "PostgreSQL", "Git", "GitHub"],
      2: ["Python", "Selenium", "Pandas", "Docker", "MySQL"],
      3: ["FastAPI", "React", "AWS", "PostgreSQL", "Docker"]
  };

  const usedTechnologies = experienceTechnologies[id] || [];

  const techList = usedTechnologies.map(tech => {
      const techData = listTechnologies.find(t => t.name === tech);
      return techData ? `
          <div class="tech-item">
              <img src="${techData.img}" alt="${techData.name}" class="tech-icon">
              <span>${techData.name}</span>
          </div>
      ` : "";
  }).join("");

  details.innerHTML = `
      <h2>${title}</h2>
      <h3>${company}</h3>
      <p class="experience-time-modal">${time}</p>
      <div class="experience-description">${detailsText}</div>
      <div class="experience-tech">
          <h4>${translations[currentLang]["experence-tech-used"]}:</h4>
          <div class="tech-list">${techList}</div>
      </div>
  `;

  modal.classList.add("active");
}


document.getElementById("experience-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    toggleExperience();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleExperience();
  }
});


// SKILLS FUNCTIONS SECTION
const listTechnologies = [
  {
    name: "AWS", yearStart: 2023,
    img: "../assets/tech/aws.svg", colors: ["#FF9900", "#232F3E"],
    description: {
      en: "Includes Architecting, Deploying, and Managing AWS Cloud Services like EC2, S3, RDS, Lambda, API Gateway, and more.",
      es: "Incluye Arquitectura, Implementación y Gestión de Servicios en la Nube de AWS como EC2, S3, RDS, Lambda, API Gateway, y más."
    },
    experience: {
      en: ["Deployed scalable applications with EC2 and RDS.", "Integrated API Gateway with Lambda functions.", "Optimized cloud storage with S3 and CloudFront."],
      es: ["Implementación de aplicaciones escalables con EC2 y RDS.", "Integración de API Gateway con funciones Lambda.", "Optimización de almacenamiento en la nube con S3 y CloudFront."]
    }
  },
  {
    name: "Django", yearStart: 2021,
    img: "../assets/tech/django.svg", colors: ["#092E20", "#44B78B"],
    description: {
      en: "Strong experience in building web applications using Django, Django REST Framework, and MonoRepo Architecture.",
      es: "Experiencia sólida en la construcción de aplicaciones web utilizando Django, Django REST Framework y Arquitectura MonoRepo."
    },
    experience: {
      en: ["Developed RESTful APIs with Django REST Framework.", "Implemented authentication with JWT and OAuth.", "Managed complex queries using Django ORM."],
      es: ["Desarrollé APIs RESTful con Django REST Framework.", "Implementé autenticación con JWT y OAuth.", "Gestioné consultas complejas utilizando Django ORM."]
    },
  },
  {
    name: "GitHub", yearStart: 2020,
    img: "../assets/tech/github.svg", colors: ["#181717", "#6e5494"],
    description: {
      en: "Experience in using Git and GitHub with CI/CD pipelines for GitHub Actions.",
      es: "Experiencia en el uso de Git y GitHub con tuberías CI/CD para GitHub Actions."
    },
    experience: {
      en: ["Managed repositories with branching strategies.", "Automated workflows with GitHub Actions.", "Collaborated on open-source projects."],
      es: ["Gestioné repositorios con estrategias de ramificación.", "Automaticé flujos de trabajo con GitHub Actions.", "Colaboré en proyectos de código abierto."]
    }
  },
  {
    name: "Linux", yearStart: 2018,
    img: "../assets/tech/linux.svg", colors: ["#FCC624", "#333333"],
    description: {
      en: "Experience in using Linux for development and deployment of applications since 2018.",
      es: "Experiencia en el uso de Linux para el desarrollo e implementación de aplicaciones desde 2018."
    },
    experience: {
      en: ["Configured servers with Nginx and Gunicorn.", "Managed services with Systemd and Supervisor.", "Automated tasks with Bash and Cron."],
      es: ["Configuré servidores con Nginx y Gunicorn.", "Gestioné servicios con Systemd y Supervisor.", "Automatizé tareas con Bash y Cron."]
    }
  },
  {
    name: "Tailwind", yearStart: 2024,
    img: "../assets/tech/tailwind.svg", colors: ["#38BDF8", "#06B6D4"],
    description: {
      en: "Adaptable in using Tailwind CSS for building responsive web applications with scalable design.",
      es: "Adapatabilidad en el uso de Tailwind CSS para la construcción de aplicaciones web responsivas con diseño escalable."
    },
    experience: {
      en: ["Designed interfaces with utility-first classes.", "Customized themes with configuration files.", "Optimized performance with CN library."],
      es: ["Diseñé interfaces con clases de utilidad en primer lugar.", "Personalicé temas con archivos de configuración.", "Optimicé el rendimiento con CN library."]
    }
  },
  {
    name: "Docker", yearStart: 2022,
    img: "../assets/tech/docker.svg", colors: ["#2496ED", "#0E4976"],
    description: {
      en: "Experience in using Docker for containerizing with Docker Compose, Volumes, and Networks.",
      es: "Experiencia en el uso de Docker para la contenerización con Docker Compose, Volúmenes y Redes."
    },
    experience: {
      en: ["Containerized applications with Docker Compose.", "Managed data with Docker Volumes.", "Connected containers with Docker Networks."],
      es: ["Contenericé aplicaciones con Docker Compose.", "Gestioné datos con Volúmenes de Docker.", "Conecté contenedores con Redes de Docker."]
    }
  },
  {
    name: "FastAPI", yearStart: 2022,
    img: "../assets/tech/fastapi.svg", colors: ["#009688", "#004D40"],
    description: {
      en: "Familiarized with the use of PyDantic, SQLAlchemy, Starlette, and Uvicorn for building APIs with FastAPI.",
      es: "Familiarizado con el uso de PyDantic, SQLAlchemy, Starlette, and Uvicorn for building APIs with FastAPI."
    },
    experience: {
      en: ["Documented APIs with OpenAPI and Swagger UI.", "Validated data with PyDantic models.", "Tested endpoints with PyTest and Requests."],
      es: ["Documenté APIs con OpenAPI y Swagger UI.", "Validé datos con modelos PyDantic.", "Probé puntos finales con PyTest y Requests."]
    }
  },
  {
    name: "Git", yearStart: 2020,
    img: "../assets/tech/git.svg", colors: ["#F1502F", "#E44C29"],
    description: {
      en: "Solid foundations in using Advanced Git (Stash, Cherry-Pick, Rebase, Remote, etc.).",
      es: "Fundamentos sólidos en el uso de Git Avanzado (Stash, Cherry-Pick, Rebase, Remote, etc.)."
    },
    experience: {
      en: ["Managed branches with Git Flow and GitHub Flow.", "Resolved conflicts with Git Merge and Rebase.", "Collaborated on projects with Git Fork and Pull Request."],
      es: ["Gestioné ramas con Git Flow y GitHub Flow.", "Resolví conflictos con Git Merge y Rebase.", "Colaboré en proyectos con Git Fork y Pull Request."]
    }
  },
  {
    name: "MySQL", yearStart: 2021,
    img: "../assets/tech/mysql.svg", colors: ["#00758F", "#F29111"],
    description: {
      en: "My first Database Experience, since designing, implementing, and mantaining with Console and Workbench.",
      es: "Mi primera Experiencia en Bases de Datos, desde el diseño, implementación y mantenimiento con Consola y Workbench."
    },
    experience: {
      en: ["Designed databases with ERD and Workbench.", "Implemented queries with SQL and Stored Procedures.", "Managed data with Triggers and Events."],
      es: ["Diseñé bases de datos con ERD y Workbench.", "Implementé consultas con SQL y Stored Procedures.", "Gestioné datos con Triggers y Events."]
    }
  },
  {
    name: "Python", yearStart: 2020,
    img: "../assets/tech/python.svg", colors: ["#306998", "#FFD43B"],
    description: {
      en: "The love of my life, Python is my main programming language for Any Personal Project.",
      es: "El amor de mi vida, Python es mi lenguaje de programación principal para cualquier proyecto personal."
    },
    experience: {
      en: ["Developed applications with Object-Oriented Programming.", "Automated tasks with Scripting and Web Scraping.", "Tested code with Unit Testing and Test-Driven Development.", "Optimized performance with Profiling and Debugging.", "Deployed applications with Packaging and Distribution."],
      es: ["Desarrollé aplicaciones con Programación Orientada a Objetos.", "Automatizé tareas con Scripting y Web Scraping.", "Probé código con Pruebas Unitarias y Desarrollo Dirigido por Pruebas.", "Optimicé el rendimiento con Perfilado y Depuración.", "Implementé aplicaciones con Empaquetado y Distribución."]
    }

  },
  {
    name: "HTML5", yearStart: 2020,
    img: "../assets/tech/html5.svg", colors: ["#E34F26", "#F16529"],
    description: {
      en: "My starting point in web development, handling tags, structure, and semantics.",
      es: "Mi punto de partida en el desarrollo web, manejo de etiquetas, estructura y semántica.",
    },
    experience: {
      en: ["Created layouts with HTML5 tags and attributes.", "Styled elements with CSS3 properties and values.", "Enhanced interactions with JavaScript functions and events."],
      es: ["Creé diseños con etiquetas y atributos de HTML5.", "Estilicé elementos con propiedades y valores de CSS3.", "Mejoré interacciones con funciones y eventos de JavaScript."]
    }
  },
  {
    name: "React", yearStart: 2023,
    img: "../assets/tech/react.svg", colors: ["#61DAFB", "#20232A"],
    description: {
      en: "A guilty pleasure, implementing components, states, and props with TypeScript and best practices.",
      es: "Un gusto culposo, implementando componentes, estados, y props con TypeScript y buenas prácticas.",
    },
    experience: {
      en: ["Developed interfaces with React components and TSX.", "Managed states with React hooks and context.", "Consumed APIs with Axios and Fetch."],
      es: ["Desarrollé interfaces con componentes y TSX de React.", "Gestioné estados con ganchos y contexto de React.", "Consumí APIs con Axios y Fetch."]
    }
  },
  {
    name: "PyDantic", yearStart: 2022,
    img: "../assets/tech/pydantic.svg", colors: ["#4B8BBE", "#FFD43B"],
    description: {
      en: "My only Open Source contribution, fancy for data validation, serialization, and documentation.",
      es: "Mi único aporte Open Source, fancy para la validación, serialización y documentación de datos.",
    },
    experience: {
      en: ["Validated data with PyDantic models.", "Serialized data with PyDantic schemas.", "Extended configurations with PyDantic fields and configs library."],
      es: ["Validé datos con modelos PyDantic.", "Serialicé datos con esquemas PyDantic.", "Extendí configuraciones con campos y biblioteca de configuraciones de PyDantic."]
    }
  },
  {
    name: "Pandas", yearStart: 2022,
    img: "../assets/tech/pandas.svg", colors: ["#150458", "#E70488"],
    description: {
      en: "A headache, that is justified when it comes to manipulating data in DataFrames, Series, and Panel.",
      es: "Un dolor de cabeza, que se justifica cuando toca manipular datos en DataFrames, Series, y Panel.",
    },
    experience: {
      en: ["Filtered data with Pandas Series and DataFrames.", "Transformed data with Pandas Operations and Methods.", "Visualized data with Pandas Plotting and Visualization."],
      es: ["Filtré datos con Series y DataFrames de Pandas.", "Transformé datos con Operaciones y Métodos de Pandas.", "Visualicé datos con Plotting y Visualización de Pandas."]
    }
  },
  {
    name: "NumPy", yearStart: 2022,
    img: "../assets/tech/numpy.svg", colors: ["#4D77CF", "#FFD43B"],
    description: {
      en: "Remember the basics in Data Types, Primitives, Optimizations, and Operations in Arrays.",
      es: "Recuerda las bases en Tipos de Datos, Primitivos, Optimizaciones, y Operaciones en Arrays.",
    },
    experience: {
      en: ["Created arrays with NumPy data types and primitives.", "Optimized performance with NumPy operations and methods.", "Managed data with NumPy arrays and matrices."],
      es: ["Creé arrays con tipos de datos y primitivos de NumPy.", "Optimicé el rendimiento con operaciones y métodos de NumPy.", "Gestioné datos con arrays y matrices de NumPy."]
    }
  },
  {
    name: "PyTest", yearStart: 2022,
    img: "../assets/tech/pytest.svg", colors: ["#0A9EDC", "#FFD43B"],
    description: {
      en: "Fan and Hater of TDD, utilizing fixtures, parametrization, and plugins for testing, love it as a framework.",
      es: "Fan y Odiador de TDD, utilizando fixtures, parametrización, y plugins para pruebas, lo amo como un framework.",
    },
    experience: {
      en: ["Tested code with PyTest fixtures and parametrization.", "Extended functionalities with PyTest plugins and markers.", "Automated tests with PyTest CLI and configuration."],
      es: ["Probé código con fixtures y parametrización de PyTest.", "Extendí funcionalidades con plugins y marcadores de PyTest.", "Automatizé pruebas con CLI y configuración de PyTest."]
    }
  },
  {
    name: "PostgreSQL", yearStart: 2022,
    img: "../assets/tech/postgres.svg", colors: ["#336791", "#4169E1"],
    description: {
      en: "The Database for every thing with ACID, Transactions, and Concurrency Control, just check the budget.",
      es: "La Base de Datos para todo con ACID, Transacciones, y Control de Concurrencia, solo revisa el presupuesto.",
    },
    experience: {
      en: ["Designed databases with PostgreSQL schemas and tables.", "Implemented queries with SQL and PL/pgSQL.", "Managed data with PostgreSQL indexes and constraints."],
      es: ["Diseñé bases de datos con esquemas y tablas de PostgreSQL.", "Implementé consultas con SQL y PL/pgSQL.", "Gestioné datos con índices y restricciones de PostgreSQL."]
    }
  },
];

const techSection = document.getElementById("list-skills");
const infoSection = document.querySelector(".skills-left");

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}


function populateTechBackground() {
  techSection.innerHTML = "";

  let shuffledTechnologies = shuffleArray([...listTechnologies]);
  let totalCards = Math.ceil(window.innerWidth / 100) * Math.ceil(window.innerHeight / 100);

  for (let i = 0; i < totalCards; i++) {
    const tech = shuffledTechnologies[i % shuffledTechnologies.length];
    const card = document.createElement("div");
    card.classList.add("skills-card");

    card.style.background = `linear-gradient(135deg, ${tech.colors[0]}, ${tech.colors[1]})`;

    const img = document.createElement("img");
    img.src = tech.img;
    img.alt = tech.name;

    const name = document.createElement("div");
    name.classList.add("skills-card-name");
    name.innerText = tech.name;

    card.appendChild(img);
    card.appendChild(name);
    card.addEventListener("click", () => displaySelectedSkill(tech));
    techSection.appendChild(card);
  }
}

function displaySelectedSkill(tech) {

  const copyYearsExperience = {
    en: "years of experience.",
    es: "años de experiencia."
  }

  infoSection.innerHTML = `
    <div class="selected-skill-card" style="background: linear-gradient(135deg, ${tech.colors[0]}, ${tech.colors[1]});">
        <img src="${tech.img}" alt="${tech.name}">
        <h3>${tech.name}</h3>
        <p>
          ${tech.description[currentLang]}
          <ul class="skills-experience">
            ${tech.experience[currentLang].map(point => `<li>${point}</li>`).join("")}
          </ul>
        </p>
        <p class="skills-experience-time">
            ${new Date().getFullYear() - tech.yearStart} ${copyYearsExperience[currentLang]}
        </p>
    </div>
  `;
}

function displayRandomSkill() {
  const randomSkill = listTechnologies[Math.floor(Math.random() * listTechnologies.length)];
  displaySelectedSkill(randomSkill);
}

window.addEventListener("DOMContentLoaded", () => {
  populateTechBackground();
  displayRandomSkill();
});

populateTechBackground();
window.addEventListener("resize", populateTechBackground);

// FUNCTIONS ABOUT
document.addEventListener('DOMContentLoaded',function(event) {
  const textToTypeWrite = {
    en: [
      " like the FrontEnd",
      " hate Fix Bugs",
      " enjoy Development",
      " am learning English",
      " Scroll More!"
    ],
    es: [
      " me gusta el FrontEnd",
      " odio Arreglar Bugs",
      " disfruto Desarrollar",
      " estoy aprendiendo Inglés",
      " sigue Scrolleando!"
    ]
  }

  const dataText = textToTypeWrite[currentLang];
  
  // type one text in the typwriter
  function typeWriter(text, i, fnCallback){
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      document.querySelector("typewriter").innerHTML = text.substring(0, i+1) +'<span class="cursor-text" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
        setTimeout(function() {
          StartTextAnimation(0);
        }, 5000);
      }
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function() {
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  setTimeout(function() {
    StartTextAnimation(0);
  }, 2000);
});