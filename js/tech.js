const technologies = [
    { name: "AWS", img: "../assets/tech/aws.svg", colors: ["#FF9900", "#232F3E"], rating: 4 },
    { name: "Django", img: "../assets/tech/django.svg", colors: ["#092E20", "#44B78B"], rating: 4 },
    { name: "GitHub", img: "../assets/tech/github.svg", colors: ["#181717", "#6e5494"], rating: 4 },
    { name: "Linux", img: "../assets/tech/linux.svg", colors: ["#FCC624", "#333333"], rating: 4 },
    { name: "NodeJS", img: "../assets/tech/node.svg", colors: ["#8CC84B", "#3C873A"], rating: 3 },
    { name: "Tailwind", img: "../assets/tech/tailwind.svg", colors: ["#38BDF8", "#06B6D4"], rating: 4 },
    { name: "Docker", img: "../assets/tech/docker.svg", colors: ["#2496ED", "#0E4976"], rating: 3 },
    { name: "GitLab", img: "../assets/tech/gitlab.svg", colors: ["#FC6D26", "#E24329"], rating: 4 },
    { name: "MongoDB", img: "../assets/tech/mongodb.svg", colors: ["#4DB33D", "#1E2B30"], rating: 3 },
    { name: "NPM", img: "../assets/tech/npm.svg", colors: ["#CB3837", "#FFFFFF"], rating: 3 },
    { name: "TypeScript", img: "../assets/tech/typescript.svg", colors: ["#3178C6", "#2F74C0"], rating: 3 },
    { name: "Azure", img: "../assets/tech/azure.svg", colors: ["#0078D4", "#002050"], rating: 3 },
    { name: "FastAPI", img: "../assets/tech/fastapi.svg", colors: ["#009688", "#004D40"], rating: 4 },
    { name: "Git", img: "../assets/tech/git.svg", colors: ["#F1502F", "#E44C29"], rating: 5 },
    { name: "MySQL", img: "../assets/tech/mysql.svg", colors: ["#00758F", "#F29111"], rating: 4 },
    { name: "Python", img: "../assets/tech/python.svg", colors: ["#306998", "#FFD43B"], rating: 5 },
    { name: "Bitbucket", img: "../assets/tech/bitbucket.svg", colors: ["#0052CC", "#2684FF"], rating: 4 },
    { name: "Flask", img: "../assets/tech/flask.svg", colors: ["#000000", "#888888"], rating: 4 },
    { name: "HTML5", img: "../assets/tech/html5.svg", colors: ["#E34F26", "#F16529"], rating: 5 },
    { name: "NextJS", img: "../assets/tech/next.svg", colors: ["#000000", "#FFFFFF"], rating: 3 },
    { name: "React", img: "../assets/tech/react.svg", colors: ["#61DAFB", "#20232A"], rating: 3 },
    { name: "CSS3", img: "../assets/tech/css3.svg", colors: ["#264DE4", "#2965F1"], rating: 5 },
    { name: "GCP", img: "../assets/tech/gcp.svg", colors: ["#4285F4", "#EA4335"], rating: 3 },
    { name: "JavaScript", img: "../assets/tech/javascript.svg", colors: ["#F7DF1E", "#000000"], rating: 3 },
    { name: "Nginx", img: "../assets/tech/nginx.svg", colors: ["#009639", "#005F27"], rating: 3 },
    { name: "SQL", img: "../assets/tech/sql.svg", colors: ["#00758F", "#F29111"], rating: 4 },
    { name: "PyDantic", img: "../assets/tech/pydantic.svg", colors: ["#4B8BBE", "#FFD43B"], rating: 4 },
    { name: "StrapiCMS", img: "../assets/tech/strapi.svg", colors: ["#4945FF", "#8E75FF"], rating: 4 },
    { name: "Stripe", img: "../assets/tech/stripe.svg", colors: ["#635BFF", "#008CDD"], rating: 4 },
    { name: "Kafka", img: "../assets/tech/kafka.svg", colors: ["#231F20", "#E60023"], rating: 3 },
    { name: "Apache", img: "../assets/tech/apache.svg", colors: ["#D22128", "#A51E24"], rating: 3 },
    { name: "DigitalOcean", img: "../assets/tech/digitalocean.svg", colors: ["#0080FF", "#0057B8"], rating: 4 },
    { name: "VS Code", img: "../assets/tech/vscode.svg", colors: ["#007ACC", "#1F9CF0"], rating: 5 },
    { name: "OpenAI", img: "../assets/tech/openai.svg", colors: ["#10A37F", "#2D3748"], rating: 3 },
    { name: "Pandas", img: "../assets/tech/pandas.svg", colors: ["#150458", "#E70488"], rating: 3 },
    { name: "NumPy", img: "../assets/tech/numpy.svg", colors: ["#4D77CF", "#FFD43B"], rating: 3 },
    { name: "PyTest", img: "../assets/tech/pytest.svg", colors: ["#0A9EDC", "#FFD43B"], rating: 4 },
    { name: "PayPal", img: "../assets/tech/paypal.svg", colors: ["#003087", "#009CDE"], rating: 3 },
    { name: "PostgreSQL", img: "../assets/tech/postgres.svg", colors: ["#336791", "#4169E1"], rating: 4 },
    { name: "Selenium", img: "../assets/tech/selenium.svg", colors: ["#43B02A", "#000000"], rating: 4 },
    { name: "Redis", img: "../assets/tech/redis.svg", colors: ["#DC382D", "#A41E12"], rating: 3 },
    { name: "Grafana", img: "../assets/tech/grafana.svg", colors: ["#F46800", "#C45000"], rating: 3 },
    { name: "LangChain", img: "../assets/tech/langchain.svg", colors: ["#203C3C", "#126A3C"], rating: 3 },
];

const techSection = document.getElementById("tech-section");

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function generateStars(rating) {
    let stars = "⭐".repeat(rating) + "".repeat(5 - rating);
    return stars;
}

function populateTechBackground() {
    techSection.innerHTML = "";

    let shuffledTechnologies = shuffleArray([...technologies]);
    let totalCards = Math.ceil(window.innerWidth / 80) * Math.ceil(window.innerHeight / 80);

    for (let i = 0; i < totalCards; i++) {
        const tech = shuffledTechnologies[i % shuffledTechnologies.length];
        const card = document.createElement("div");
        card.classList.add("card");

        card.style.background = `linear-gradient(135deg, ${tech.colors[0]}, ${tech.colors[1]})`;

        const img = document.createElement("img");
        img.src = tech.img;
        img.alt = tech.name;

        const name = document.createElement("div");
        name.classList.add("tech-name");
        name.innerText = tech.name;

        const stars = document.createElement("div");
        stars.classList.add("tech-stars");
        stars.innerText = generateStars(tech.rating);

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(stars);
        techSection.appendChild(card);
    }
}

populateTechBackground();
window.addEventListener("resize", populateTechBackground);
